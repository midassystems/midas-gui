import React from "react";
import "./ParametersTable.css"; 

/**
 * Displays a bar with key parameters of a backtest, including start and end dates, symbols, and capital.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.parameters - The parameters to display in the bar.
 * @param {string} props.parameters.start_date - The start date of the backtest.
 * @param {string} props.parameters.end_date - The end date of the backtest.
 * @param {Array<string>} props.parameters.tickers - The symbols used in the backtest.
 * @param {number|string} props.parameters.capital - The initial capital for the backtest.
 */
function ParametersTable({ parameters }) {
    
    return (
        <div className="parameters-table-container">
            <h1 className="parameters-table-header">{parameters.strategy_name.toUpperCase()}</h1>
            <table className='parameters-table'>
                <tbody>
                    <tr className='parameters-table-row'>
                        <td className='parameters-table-data'>TICKERS</td>
                        <td className='parameters-table-data'>{parameters.tickers.map((symbol, index) => (<span key={index}>{symbol} </span>))}</td>
                        <td className='parameters-table-data'></td>
                        <td className='parameters-table-data'></td>
                    </tr>
                    <tr className='parameters-table-row'>
                        <td className='parameters-table-data'>CAPITAL</td>
                        <td className='parameters-table-data'>{`$${parameters.capital.toLocaleString()}`}</td>
                        <td className='parameters-table-data'>SCHEMA</td>
                        <td className='parameters-table-data'>{parameters.schema}</td>
                    </tr>
                    <tr className='parameters-table-row'>
                        <td className='parameters-table-data'>START</td>
                        <td className='parameters-table-data'>{parameters.start}</td>
                        <td className='parameters-table-data'>END</td>
                        <td className='parameters-table-data'>{parameters.end}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ParametersTable;


