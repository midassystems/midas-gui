import React from 'react';
import '../TableLayout.css';

const Orders = ({ orders }) => {
  if (!orders || typeof orders.data !== 'object' ) {
    return <div className="live-table-container">No orders available.</div>;
  }

  return (
    <div className="live-table-container">
        <table className="live-table-container">
          <thead>
            <tr className='live-table-row'>
              <th className='live-table-header'>
                <span className="top-word">ORDERS</span>
                <span className="bottom-word">Order Id</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Ticker</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Action</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Filled</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Avg. Fill Price</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Total Qty</span>
              </th>
              <th className='live-table-header'>
                <span className="top-word">&nbsp;</span>
                <span className="bottom-word">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
              <tr className='live-table-row' >
                <td className='live-table-data'>{orders.data.symbol}</td>
                <td className='live-table-data'>{orders.data.action}</td>
                <td className='live-table-data'>{orders.data.status}</td>
                <td className='live-table-data'>{orders.data.filled}</td>
                <td className='live-table-data'>{orders.data.totalQty}</td>
              </tr>

          </tbody>
        </table>
      </div>
  );
};

export default Orders;
