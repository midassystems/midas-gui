import React, { useState } from 'react';
import "./Markets.css";
import TradingViewChart from "../TradingView/Chart/TradingView.jsx";
import { GoPlusCircle } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { useMarketDashboard } from './useMarketDashboard.jsx'; //MarketDashboardContext';

const MarketsDashboard = () => {
  const [nextChartId, setNextChartId] = useState(5); // Keep track of the next unique chart ID
  const { chartLayout, setChartLayout, isLoading, error } = useMarketDashboard();

  const handleAddChart = () => {
    // Add a new chart with a unique id
    if (chartLayout.length < 4) {
      const newChartId = `chart${nextChartId}`;
      setChartLayout([...chartLayout, { id: newChartId, symbol: "FOREXCOM:SPXUSD" }]);
      setNextChartId(nextChartId + 1); // Increment the unique ID counter
    }
  };

  const handleCloseChart = (chartId) => {
    // Filter out the closed chart from the layout
    const updatedLayout = chartLayout.filter(chart => chart.id !== chartId);
    setChartLayout(updatedLayout);
  };

  // Determine grid class based on the number of charts open
  let gridClass = '';
  if (chartLayout.length === 1) {
    gridClass = 'one-chart';
  } else if (chartLayout.length === 2) {
    gridClass = 'two-charts';
  } else if (chartLayout.length === 3) {
    gridClass = 'three-charts';
  } else if (chartLayout.length === 4) {
    gridClass = 'four-charts';
  }

  return (
    <div className="market-dashboard-container">
      {/* Persistent Top Bar with Add Chart button */}
      <div className="market-dashboard-bar">
        {chartLayout.length < 5 && (
          <button className="add-chart-btn" onClick={handleAddChart}>
            <GoPlusCircle />
          </button>
        )}
      </div>

      {/* Grid layout for charts */}
      <div className={`market-dashboard-grid ${gridClass}`}>
        {chartLayout.map(chart => (
          <div key={chart.id} className="market-chart-container">
            {/* Close button for each chart */}
            <button className="close-chart-btn" onClick={() => handleCloseChart(chart.id)}>
              <GrFormClose />
            </button>
            {/* Render the chart */}
            <TradingViewChart scriptId={chart.id} symbol={chart.symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketsDashboard;

