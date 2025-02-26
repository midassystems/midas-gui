import React, { useState } from "react";
import "./ChartsCollection.css";
import LineChart from "./LineChart";

function ChartsCollection({ period_timeseries_stats, daily_timeseries_stats }) {
  const [selectedChart, setSelectedChart] = useState("Equity");
  const [timeFrame, setTimeFrame] = useState("Period"); // Added state for time frame selection

  // Mapping functions to generate chart data arrays
  const mapData = (data, key) => {
    return data.map((item) => ({
      time: item.timestamp, // Convert timestamp to readable format if needed
      value: item[key], // Convert string value to a number
    }));
  };

  // Daily
  const dailyEquityArray = mapData(daily_timeseries_stats, "equity_value");
  const dailyReturnArray = mapData(daily_timeseries_stats, "period_return");
  const dailyCumReturnArray = mapData(
    daily_timeseries_stats,
    "cumulative_return",
  );
  const dailyDrawdownArray = mapData(
    daily_timeseries_stats,
    "percent_drawdown",
  );

  // Period
  const periodEquityArray = mapData(period_timeseries_stats, "equity_value");
  const periodReturnArray = mapData(period_timeseries_stats, "period_return");
  const periodCumReturnArray = mapData(
    period_timeseries_stats,
    "cumulative_return",
  );
  const periodDrawdownArray = mapData(
    period_timeseries_stats,
    "percent_drawdown",
  );

  // Function to decide which data array to use based on the selected time frame
  const getChartData = (dailyArray, periodArray) =>
    timeFrame === "Daily" ? dailyArray : periodArray;

  const chartsData = {
    Equity: (
      <LineChart data={getChartData(dailyEquityArray, periodEquityArray)} />
    ),
    SimpleReturn: (
      <LineChart data={getChartData(dailyReturnArray, periodReturnArray)} />
    ),
    Drawdown: (
      <LineChart data={getChartData(dailyDrawdownArray, periodDrawdownArray)} />
    ),
    CumReturn: (
      <LineChart
        data={getChartData(dailyCumReturnArray, periodCumReturnArray)}
      />
    ),
  };

  return (
    <div className="chart-collection-container">
      <div className="chart-selector">
        <select
          className="chart-collection-dropdown-menu"
          onChange={(e) => setSelectedChart(e.target.value)}
          value={selectedChart}
        >
          <option value="Equity">Equity</option>
          <option value="SimpleReturn">Simple Return</option>
          <option value="CumReturn">Cumulative Return</option>
          <option value="Drawdown">Drawdown</option>
        </select>
        <select
          className="timeframe-dropdown-menu"
          onChange={(e) => setTimeFrame(e.target.value)}
          value={timeFrame}
        >
          <option value="Daily">Daily</option>
          <option value="Period">Period</option>
        </select>
      </div>
      <div className="chart-container">{chartsData[selectedChart]}</div>
    </div>
  );
}

export default ChartsCollection;
