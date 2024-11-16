use crate::context::Config;
use crate::error::Result;
use serde::{Deserialize, Serialize};
use tauri::State;
use tokio::sync::Mutex;

pub type Charts = Vec<ChartLayout>;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct ChartLayout {
    id: String,
    symbol: String,
}

impl ChartLayout {
    fn new(id: String, symbol: String) -> Self {
        Self { id, symbol }
    }
}

#[tauri::command]
pub async fn load_layout(
    charts: State<'_, Mutex<Charts>>,
    config: State<'_, Config>,
) -> Result<Charts> {
    let mut layout = charts.lock().await;

    // If no layout exists, initialize it with the default config from config.toml
    if layout.is_empty() {
        let num_charts = config.dashboard.num_charts; // Number of charts to display
        let symbols = &config.dashboard.chart_symbols; // List of symbols from config

        for i in 0..num_charts {
            if let Some(symbol) = symbols.get(i as usize) {
                let chart_id = format!("chart{}", i + 1); // Create unique chart IDs like chart1, chart2, etc.
                layout.push(ChartLayout::new(chart_id, symbol.clone())); // Push the new chart layout
            }
        }
    }

    Ok(layout.clone())
}

#[tauri::command]
pub async fn update_chart_layout(
    charts: State<'_, Mutex<Charts>>,
    id: String,
    symbol: String,
) -> Result<Charts> {
    let mut layout = charts.lock().await;

    layout.push(ChartLayout::new(id, symbol));

    Ok(layout.clone())
}

// Load the chart layout from a file
#[tauri::command]
pub async fn load_chart_layout(charts: State<'_, Mutex<Charts>>) -> Result<Charts> {
    let layout = charts.lock().await;
    Ok(layout.clone())
}
