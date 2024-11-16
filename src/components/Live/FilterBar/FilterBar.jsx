// live/FilterBar.jsx
import React from 'react';
import './FilterBar.css'; 

function FilterBar({ sessionsList, setSelectedStrategyId, selectedStrategyId, handleRefreshClick }) {

  return (
    <div className="live-filter-bar">
      {sessionsList.map((sessionId, index) => (
        <React.Fragment key={sessionId}>
          <button
            className={`live-filter-bar-button ${selectedStrategyId === sessionId ? 'selected' : ''}`}
            onClick={() => setSelectedStrategyId(sessionId)}
          >
            {sessionId}
          </button>
          {index !== sessionsList.length - 1 && <span className="session-separator"> | </span>}
        </React.Fragment>
      ))}
      <button className="live-filter-bar-refresh-button" onClick={handleRefreshClick}>↻</button>
    </div>
  );
}

export default FilterBar;
