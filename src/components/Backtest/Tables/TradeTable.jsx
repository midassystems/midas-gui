import React from "react";
import "./TradeTable.css";
import { usePagination } from "../Hooks/usePagination";

/**
 * Displays trade data in a paginated table.
 *
 * @param {{ trades_data: Array<{timestamp: string, trade_id: number, leg_id: number, symbol: string, quantity: number, price: number, cost: number, direction: string}> }} props - Component props.
 */
function TradeTable({ trades_data }) {
  const {
    currentItems,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages,
  } = usePagination(trades_data, 12);

  return (
    <div className="trade-table-container">
      <table className="trade-table">
        <thead>
          <tr className="trade-table-header-row">
            <th className="trade-timestamp-column-header">Timestamp</th>
            <th className="trade-table-header">Signal ID</th>
            <th className="trade-table-header">Trade ID</th>
            <th className="trade-table-header">Ticker</th>
            <th className="trade-table-header">Quantity</th>
            <th className="trade-table-header">Price</th>
            <th className="trade-table-header">Value</th>
            <th className="trade-table-header">Cost</th>
            <th className="trade-table-header">Fees</th>
            <th className="trade-table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((trade, index) => (
            <tr className="trade-table-row" key={index}>
              <td className="trade-timestamp-column-data">
                {trade.iso_timestamp}
              </td>
              <td className="trade-table-data">{trade.signal_id}</td>
              <td className="trade-table-data">{trade.trade_id}</td>
              <td className="trade-table-data">{trade.ticker}</td>
              <td className="trade-table-data">{trade.quantity}</td>
              <td className="trade-table-data">
                {`$${trade.avg_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 5 })}`}
              </td>
              <td className="trade-table-data">
                {`$${trade.trade_value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </td>
              <td className="trade-table-data">
                {`$${trade.trade_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </td>
              <td className="trade-table-data">
                {`$${trade.fees.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </td>
              <td className="trade-table-data">{trade.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="trade-pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TradeTable;
