import './TablesCollection.css';
import TradeTable from './TradeTable';
import React, { useState } from 'react';
import SignalsTable from './SignalsTable';


function TablesCollection({ trades_data, signals_data }) {
  const [selectedTable, setSelectedTable] = useState('trades');

  // Dynamically Render Table
  const renderTable = () => {
    switch (selectedTable) {
      case 'trades':
        return <TradeTable trades_data={trades_data} />;
      case 'signals':
        return <SignalsTable signals_data={signals_data} />;
      default:
        return <div>Select a table...</div>;
    }
  };

  return (
    <div className="table-collection">
      <div className="strategy-buttons-bar">
        <button
          className={`button-style ${selectedTable === 'trades' ? 'selected' : ''}`}
          onClick={() => setSelectedTable('trades')}
        >TRADES
        </button>
        <span className="divider">|</span> {/* Add vertical bar as a divider */}
        <button
          className={`button-style ${selectedTable === 'signals' ? 'selected' : ''}`}
          onClick={() => setSelectedTable('signals')}
        >SIGNALS
        </button>
      </div>
      <div className="table-container">
        {renderTable()}
      </div>
    </div>
  );
}

export default TablesCollection;
