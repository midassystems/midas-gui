import React from 'react';
import '../TableLayout.css';

const Positions = ({ positions }) => {
  if (!positions || typeof positions.data !== 'object' || Object.keys(positions.data).length === 0) {
    return <div className="live-table-container">No positions available.</div>;
  }

  return (
    <div className="live-table-container">
        <table className="live-table-container">
          <thead>
            <tr className='live-table-row'>
            <th className='live-table-header'>
              <span className="top-word">POSITIONS</span>
              <span className="bottom-word">Ticker</span>
            </th>
            <th className='live-table-header'>
              <span className="top-word">&nbsp;</span>
              <span className="bottom-word">Action</span>
            </th>
            <th className='live-table-header'>
              <span className="top-word">&nbsp;</span>
              <span className="bottom-word">Quantity</span>
            </th>
            <th className='live-table-header'>
              <span className="top-word">&nbsp;</span>
              <span className="bottom-word">Avg. Cost</span>
            </th>
            <th className='live-table-header'>
              <span className="top-word">&nbsp;</span>
              <span className="bottom-word">Total Cost</span>
            </th>
            <th className='live-table-header'>
              <span className="top-word">&nbsp;</span>
              <span className="bottom-word">Mkt. Value</span>
            </th>
          </tr>
          </thead>
          <tbody>
            <tr className='live-table-row' >
              <td className='live-table-data'>{positions.data.ticker}</td>
              <td className='live-table-data'>{positions.data.action}</td>
              <td className='live-table-data'>{positions.data.quantity}</td>
              <td className='live-table-data'>${positions.data.avg_cost}</td>
              <td className='live-table-data'>${positions.data.total_cost}</td>
              <td className='live-table-data'>${positions.data.market_value}</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default Positions;
