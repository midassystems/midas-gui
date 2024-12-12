use crate::error::Result;
// use bigdecimal::ToPrimitive;
use chrono::DateTime;
use midas_client::trading::Trading;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tauri::State;
use tokio::sync::Mutex;

pub type BacktestCache = HashMap<i32, DisplayBacktestData>;
pub type BacktestList = Vec<(i32, String)>;
pub type CurrentBacktestId = Option<i32>;

pub fn price_scale(value: i64) -> f64 {
    value as f64 / mbn::PRICE_SCALE as f64
}

#[tauri::command]
pub async fn get_current_backtest(
    current_id: State<'_, Mutex<CurrentBacktestId>>,
) -> Result<Option<i32>> {
    let id = current_id.lock().await;
    match *id {
        Some(id_value) => Ok(Some(id_value)),
        None => Ok(None),
    }
}

#[tauri::command]
pub async fn get_backtest_list(
    backtest_list: State<'_, Mutex<BacktestList>>,
    client: State<'_, Arc<Trading>>,
) -> Result<Option<BacktestList>> {
    // Lock the backtest_list to check if it's empty
    let mut list = backtest_list.lock().await;

    // If the list already has data, return it without making the API call
    if !list.is_empty() {
        return Ok(Some(list.clone()));
    }

    // Fetch backtest list from the API client only if the list is empty
    let mut response = client.list_backtest().await.map_err(|e| e.to_string())?;

    match response.status.as_str() {
        "success" => {
            // Append new data to the current list
            list.append(&mut response.data);

            // Return the updated list
            Ok(Some(list.clone()))
        }
        _ => Ok(None),
    }
}

#[tauri::command]
pub async fn get_backtest_by_id(
    id: i32,
    backtest_cache: State<'_, Mutex<BacktestCache>>,
    current_id: State<'_, Mutex<CurrentBacktestId>>,
    client: State<'_, Arc<Trading>>,
) -> Result<Option<DisplayBacktestData>> {
    match client.get_backtest(&id).await {
        Ok(response) => {
            match response.status.as_str() {
                "success" => {
                    let mut new_id = current_id.lock().await;
                    *new_id = Some(id);

                    let display_data: DisplayBacktestData = response.data[0].clone().into();

                    let mut cache = backtest_cache.lock().await;
                    cache.insert(id, display_data.clone());

                    Ok(Some(display_data))
                }
                _ => Ok(None), // Explicitly returning None if no data is present
            }
        }
        Err(err) => Err(format!("Failed to get backtest id ({}): {}", id, err)),
    }
}

// --- Display backtest data ---
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplayBacktestData {
    pub backtest_name: String,
    pub parameters: DisplayParameters,
    pub static_stats: DisplayStaticStats,
    pub period_timeseries_stats: Vec<DisplayTimeseriesStats>,
    pub daily_timeseries_stats: Vec<DisplayTimeseriesStats>,
    pub trades: Vec<DisplayTrade>,
    pub signals: Vec<DisplaySignal>,
}

impl From<mbn::backtest::BacktestData> for DisplayBacktestData {
    fn from(data: mbn::backtest::BacktestData) -> Self {
        println!("{:?}", DisplayStaticStats::from(data.static_stats.clone()));

        DisplayBacktestData {
            backtest_name: data.backtest_name,
            parameters: DisplayParameters::from(data.parameters),
            static_stats: DisplayStaticStats::from(data.static_stats),
            period_timeseries_stats: data
                .period_timeseries_stats
                .into_iter()
                .map(DisplayTimeseriesStats::from)
                .collect(),
            daily_timeseries_stats: data
                .daily_timeseries_stats
                .into_iter()
                .map(DisplayTimeseriesStats::from)
                .collect(),
            trades: data.trades.into_iter().map(DisplayTrade::from).collect(),
            signals: data.signals.into_iter().map(DisplaySignal::from).collect(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplayParameters {
    pub strategy_name: String,
    pub capital: i64,
    pub schema: String,
    pub data_type: String,
    pub start: String,
    pub end: String,
    pub tickers: Vec<String>,
}

impl From<mbn::backtest::Parameters> for DisplayParameters {
    fn from(x: mbn::backtest::Parameters) -> Self {
        DisplayParameters {
            strategy_name: x.strategy_name,
            capital: x.capital,
            schema: x.schema,
            data_type: x.data_type,
            start: format_timestamp(x.start),
            end: format_timestamp(x.end),
            tickers: x.tickers,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplayTimeseriesStats {
    pub timestamp: i64,
    pub equity_value: f64,
    pub percent_drawdown: f64,
    pub cumulative_return: f64,
    pub period_return: f64,
}

impl From<mbn::backtest::TimeseriesStats> for DisplayTimeseriesStats {
    fn from(stats: mbn::backtest::TimeseriesStats) -> Self {
        DisplayTimeseriesStats {
            timestamp: stats.timestamp / 1_000_000_000,
            equity_value: price_scale(stats.equity_value),
            percent_drawdown: price_scale(stats.percent_drawdown),
            cumulative_return: price_scale(stats.cumulative_return),
            period_return: price_scale(stats.period_return),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplayStaticStats {
    pub total_trades: i32,
    pub total_winning_trades: i32,
    pub total_losing_trades: i32,
    pub avg_profit: f64,                           // Scaled by 1e9
    pub avg_profit_percent: f64,                   // Scaled by 1e9
    pub avg_gain: f64,                             // Scaled by 1e9
    pub avg_gain_percent: f64,                     // Scaled by 1e9
    pub avg_loss: f64,                             // Scaled by 1e9
    pub avg_loss_percent: f64,                     // Scaled by 1e9
    pub profitability_ratio: f64,                  // Scaled by 1e9
    pub profit_factor: f64,                        // Scaled by 1e9
    pub profit_and_loss_ratio: f64,                // Scaled by 1e9
    pub total_fees: f64,                           // Scaled by 1e9
    pub net_profit: f64,                           // Scaled by 1e9
    pub beginning_equity: f64,                     // Scaled by 1e9
    pub ending_equity: f64,                        // Scaled by 1e9
    pub total_return: f64,                         // Scaled by 1e9
    pub daily_standard_deviation_percentage: f64,  // Scaled by 1e9
    pub annual_standard_deviation_percentage: f64, // Scaled by 1e9
    pub max_drawdown_percentage_period: f64,       // Scaled by 1e9
    pub max_drawdown_percentage_daily: f64,        // Scaled by 1e9
    pub sharpe_ratio: f64,                         // Scaled by 1e9
    pub sortino_ratio: f64,                        // Scaled by 1e9
}

impl From<mbn::backtest::StaticStats> for DisplayStaticStats {
    fn from(stat: mbn::backtest::StaticStats) -> Self {
        println!("{:?}", stat);

        DisplayStaticStats {
            total_trades: stat.total_trades,
            total_winning_trades: stat.total_winning_trades,
            total_losing_trades: stat.total_losing_trades,
            avg_profit: price_scale(stat.avg_profit),
            avg_profit_percent: price_scale(stat.avg_profit_percent),
            avg_gain: price_scale(stat.avg_gain),
            avg_gain_percent: price_scale(stat.avg_gain_percent),
            avg_loss: price_scale(stat.avg_loss),
            avg_loss_percent: price_scale(stat.avg_loss_percent),
            profitability_ratio: price_scale(stat.profitability_ratio),
            profit_factor: price_scale(stat.profit_factor),
            profit_and_loss_ratio: price_scale(stat.profit_and_loss_ratio),
            total_fees: price_scale(stat.total_fees),
            net_profit: price_scale(stat.net_profit),
            beginning_equity: price_scale(stat.beginning_equity),
            ending_equity: price_scale(stat.ending_equity),
            total_return: price_scale(stat.total_return),
            daily_standard_deviation_percentage: price_scale(
                stat.daily_standard_deviation_percentage,
            ),
            annual_standard_deviation_percentage: price_scale(
                stat.annual_standard_deviation_percentage,
            ),
            max_drawdown_percentage_period: price_scale(stat.max_drawdown_percentage_period),
            max_drawdown_percentage_daily: price_scale(stat.daily_standard_deviation_percentage),
            sharpe_ratio: price_scale(stat.sharpe_ratio),
            sortino_ratio: price_scale(stat.sortino_ratio),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplayTrade {
    pub trade_id: i32,
    pub leg_id: i32,
    pub unix_timestamp: i64,
    pub iso_timestamp: String,
    pub ticker: String,
    pub quantity: f64,
    pub avg_price: f64,
    pub trade_value: f64,
    pub action: String,
    pub fees: f64,
}

impl From<mbn::backtest::Trades> for DisplayTrade {
    fn from(trade: mbn::backtest::Trades) -> Self {
        DisplayTrade {
            trade_id: trade.trade_id,
            leg_id: trade.leg_id,
            unix_timestamp: trade.timestamp,
            iso_timestamp: format_timestamp(trade.timestamp),
            ticker: trade.ticker,
            quantity: price_scale(trade.quantity),
            avg_price: price_scale(trade.avg_price),
            trade_value: price_scale(trade.trade_value),
            action: trade.action,
            fees: price_scale(trade.fees),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplaySignal {
    pub unix_timestamp: i64,
    pub iso_timestamp: String,
    pub trade_instructions: Vec<DisplaySignalInstructions>,
}

impl From<mbn::backtest::Signals> for DisplaySignal {
    fn from(signal: mbn::backtest::Signals) -> Self {
        DisplaySignal {
            unix_timestamp: signal.timestamp,
            iso_timestamp: format_timestamp(signal.timestamp),
            trade_instructions: signal
                .trade_instructions
                .into_iter()
                .map(DisplaySignalInstructions::from)
                .collect(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DisplaySignalInstructions {
    pub ticker: String,
    pub order_type: String,
    pub action: String,
    pub trade_id: i32,
    pub leg_id: i32,
    pub weight: f64, // Scaled by 1e9
    pub quantity: i32,
    pub limit_price: String,
    pub aux_price: String,
}

impl From<mbn::backtest::SignalInstructions> for DisplaySignalInstructions {
    fn from(instructions: mbn::backtest::SignalInstructions) -> Self {
        DisplaySignalInstructions {
            ticker: instructions.ticker,
            order_type: instructions.order_type,
            action: instructions.action,
            trade_id: instructions.trade_id,
            leg_id: instructions.leg_id,
            weight: price_scale(instructions.weight),
            quantity: instructions.quantity,
            limit_price: instructions.limit_price,
            aux_price: instructions.aux_price,
        }
    }
}

// Helper function to format Unix timestamp into a human-readable ISO 8601 string fr display
fn format_timestamp(timestamp: i64) -> String {
    let datetime = DateTime::from_timestamp_nanos(timestamp);

    datetime.to_rfc3339()
}
