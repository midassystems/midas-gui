// backtest/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import FilterBar from "./FilterBar/FilterBar";
import { useBacktest } from "./Hooks/useBacktest";
import OverviewTable from "./Tables/OverviewTable";
import ParametersBar from "./Tables/ParametersTable";
import ChartsCollection from "./Charts/ChartsCollection";
import TablesCollection from "./Tables/TablesCollection";

const BacktestDashboard = () => {
  const {
    isLoading,
    backtestList,
    currentBacktestId,
    currentBacktestData,
    updateBacktestId,
    refreshBacktestList,
  } = useBacktest();
  console.log(currentBacktestData);

  return (
    <div className="backtest-dashboard-container">
      <div key="backtest-dashbaord-filterBar">
        <FilterBar
          groupedSummaries={backtestList}
          currentBacktestName={currentBacktestData?.backtest_name || ""}
          updateBacktestId={updateBacktestId}
          refreshBacktestList={refreshBacktestList}
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : !currentBacktestId ||
        Object.keys(currentBacktestData).length === 0 ? (
        <div>Select a backtest to view details.</div>
      ) : (
        <div className="backtest-dashboard-grid">
          <div
            className="backtest-grid-item charts"
            style={{ gridArea: "charts" }}
          >
            <ChartsCollection
              period_timeseries_stats={
                currentBacktestData?.period_timeseries_stats
              }
              daily_timeseries_stats={
                currentBacktestData?.daily_timeseries_stats
              }
              bm_timeseries_stats={
                currentBacktestData?.regressionTimeseriesData
              }
              price_data={currentBacktestData?.priceData}
              signals_data={currentBacktestData?.signalData}
            />
          </div>
          <div
            className="backtest-grid-item parameters"
            style={{ gridArea: "parameters" }}
          >
            <ParametersBar parameters={currentBacktestData?.parameters} />
          </div>
          <div
            className="backtest-grid-item overview"
            style={{ gridArea: "overview" }}
          >
            <OverviewTable overview_data={currentBacktestData?.static_stats} />
          </div>
          <div
            className="backtest-grid-item tables"
            style={{ gridArea: "tables" }}
          >
            <TablesCollection
              trades_data={currentBacktestData?.trades}
              signals_data={currentBacktestData?.signals}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BacktestDashboard;
