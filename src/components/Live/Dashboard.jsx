// live/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; 
import RiskTable from './Risk/RiskTable';
import Orders from './Orders/OrdersTable';
import Account from './Account/AccountTable';
import FilterBar from './FilterBar/FilterBar.jsx';
import { useLive } from './Hooks/useLive';
import Positions from './Positions/PositionsTable';
import TradingViewWatchlist from '../TradingView/Watchlist/Watchlist.jsx'

const LiveDashboard = () => {
  const { loading, sessionData, handleRefreshClick, selectedStrategyId, sessionsList, setSelectedStrategyId } = useLive();

  if (sessionsList.length === 0 ) {
    return <div className="live-dashboard-container">No active Sessions.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='live-dashboard-container'>
      <FilterBar sessionsList={sessionsList} setSelectedStrategyId={setSelectedStrategyId} selectedStrategyId={selectedStrategyId} handleRefreshClick={handleRefreshClick} />
      <div className="dashboard-grid">
        <div className="grid-item account"style={{ gridArea: 'account' }}>
          <Account account={sessionData.account} />
        </div>
        <div className="grid-item positions" style={{ gridArea: 'positions' }}>
          <Positions positions={sessionData.positions} />
        </div>
        <div className="grid-item orders" style={{ gridArea: 'orders' }}>
          <Orders orders={sessionData.orders} />
        </div>
        <div className="grid-item risk" style={{ gridArea: 'risk' }}>
          <RiskTable risk={sessionData.risk} />
        </div>
        <div className="grid-item watchlist" style={{ gridArea: 'watchlist' }}>
          <TradingViewWatchlist />
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;