import React from 'react';
import './OverviewTable.css';

/**
 * Configuration for field display names and formats.
 * Each key represents a field in `overview_data`, with a `label` for display and `format` for styling.
 */
const fieldConfig = {
  total_trades: { label: 'Total Trades', format: 'integer' },
  total_winning_trades: { label: 'Total Winning Trades', format: 'integer' },
  total_losing_trades: { label: 'Total Losing Trades', format: 'integer' },
  avg_profit: { label: 'Avg Profit', format: 'currency' },
  avg_gain: { label: 'Avg Gain', format: 'currency' },
  avg_loss: { label: 'Avg Loss', format: 'currency' },
  total_fees: { label: 'Total Fees', format: 'currency' },
  net_profit: { label: 'Net Profit', format: 'currency' },
  profit_and_loss_ratio: { label: 'Profit & Loss Ratio', format: 'ratio' },
  beginning_equity: { label: 'Beginning Equity', format: 'currency' },
  ending_equity: { label: 'Ending Equity', format: 'currency' },
  avg_profit_percent: { label: 'Avg Profit Percent', format: 'percentage' },
  avg_gain_percent: { label: 'Avg Gain Percent', format: 'percentage' },
  avg_loss_percent: { label: 'Avg Loss Percent', format: 'percentage' },
  total_return: { label: 'Total Return', format: 'percentage' },
  daily_standard_deviation_percentage: { label: 'Daily Standard Deviation', format: 'percentage' },
  annual_standard_deviation_percentage: { label: 'Annual Standard Deviation', format: 'percentage' },
  max_drawdown_percentage_daily: { label: 'Max Drawdown Daily', format: 'percentage' },
  max_drawdown_percentage_period: { label: 'Max Drawdown Period', format: 'percentage' },
  profit_factor: { label: 'Profit Factor', format: 'ratio' },
  profitability_ratio: { label: 'Profitability Ratio', format: 'ratio' },
  sharpe_ratio: { label: 'Sharpe Ratio', format: 'ratio' },
  sortino_ratio: { label: 'Sortino Ratio', format: 'ratio' },
};

/**
 * Formats values based on the key using the format specified in fieldConfig.
 * @param {string} key - The key indicating the type of the data.
 * @param {number} value - The raw value from the data.
 * @returns {string} The formatted value.
 */
function formatValue(key, value) {
  const formatType = fieldConfig[key]?.format;

  switch (formatType) {
    case 'percentage':
      return `${(value * 100).toFixed(4)}%`;
    case 'currency':
      return `$${value.toFixed(2).toLocaleString()}`;
    case 'ratio':
      return value.toFixed(4);
    case 'integer':
      return Math.round(value).toLocaleString();
    default:
      return value.toString();
  }
}

/**
 * Transforms overview data for tabular presentation.
 * @param {Array} overviewData - The overview data to be transformed.
 * @returns {Array} An array of objects representing the transformed data.
 */
function transformOverviewData(overviewData) {
  const transformedData = [];
  const keys = Object.keys(overviewData);

  // Iterate over the keys in pairs
  for (let i = 0; i < keys.length; i += 2) {
    const key1 = keys[i];
    const value1 = formatValue(key1, overviewData[key1]);
    const label1 = fieldConfig[key1]?.label || key1.replace(/_/g, ' ');

    const key2 = keys[i + 1] || '';
    const value2 = key2 ? formatValue(key2, overviewData[key2]) : '';
    const label2 = key2 ? (fieldConfig[key2]?.label || key2.replace(/_/g, ' ')) : '';

    const row = {
      label1: label1,
      value1: value1,
      label2: label2,
      value2: value2,
    };
    transformedData.push(row);
  }

  return transformedData;
}

/**
 * Renders an overview table with transformed data.
 * @param {Object} props - Component props.
 * @param {Array} props.overview_data - The overview data to display in the table.
 */
function OverviewTable({ overview_data }) {
  const data = transformOverviewData(overview_data);

  return (
    <div className="overview-table-container">
      <h1 className="overview-table-header">STATISTICS</h1>
      <table className='overview-table'>
        <tbody>
          {data.map((row, index) => (
            <tr className='overview-table-row' key={index}>
              <td className='overview-table-data-key'>{row.label1}</td>
              <td className='overview-table-data-value'>{row.value1}</td>
              <td className='overview-table-data-key'>{row.label2}</td>
              <td className='overview-table-data-value'>{row.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewTable;


