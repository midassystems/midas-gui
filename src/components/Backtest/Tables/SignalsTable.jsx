import React from 'react';
import "./SignalsTable.css";
import { usePagination } from '../Hooks/usePagination';

/**
 * Displays signal data in a paginated table.
 * 
 * @param {{ signals_data: Array<{timestamp: string, trade_instructions: Array<{leg_id: number, ticker: string, direction: string, allocation_percent: number}>}> }} props - Component props.
 */
function SignalsTable({ signals_data }) {
  const { currentItems, goToNextPage, goToPreviousPage, currentPage, totalPages } = usePagination(signals_data, 8);

  return (
    <div className="signal-table-container">
      <table className='signal-table'>
        <thead>
          <tr className='signal-table-header-row'>
            <th className='signal-timestamp-column-header'>TIMESTAMP</th>
            <th className='signal-table-header'>Leg ID</th>
            <th className='signal-table-header'>Symbol</th>
            <th className='signal-table-header'>Direction</th>
            <th className='signal-table-header'>Weight</th>
            <th className='signal-table-header'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((trade, index) => (
            <React.Fragment key={index}>
              {trade.trade_instructions.map((instruction, idx) => (
                <tr className='signal-table-row' key={idx}>
                  {idx === 0 && (
                    <td className='signal-timestamp-column-data' rowSpan={trade.trade_instructions.length}>
                      {trade.iso_timestamp}
                    </td>
                  )}
                  <td className='signal-table-data'>{instruction.leg_id}</td>
                  <td className='signal-table-data'>{instruction.ticker}</td>
                  <td className='signal-table-data'>{instruction.action}</td>
                  <td className='signal-table-data'>{instruction.weight}</td>
                  <td className='signal-table-data'>{instruction.quantity}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}

        </tbody>
      </table>
      <div className="signal-pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>&lt;</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>&gt;</button>
      </div>
    </div>
  );

}
export default SignalsTable;
