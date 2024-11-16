// import log from 'loglevel';
// import React, { createContext, useState, useEffect } from 'react';
// import { invoke } from '@tauri-apps/api/tauri';
// // import * as apiClient from "../services/apiClient";
// import { convertUnixNanosecondsToISO } from "../utils/unix_time";

// export const BacktestContext = createContext();

// /**
//  * Provides a context for managing and caching backtest data.
//  * 
//  * @param {Object} props - Component props containing children elements.
//  */
// export function BacktestProvider({ children }) {
//   const [backtestsCache, setBacktestsCache] = useState({});
//   const [groupedSummaries, setGroupedSummaries] = useState([]);
//   const [currentBacktestId, setCurrentBacktestId] = useState(null);

//   /**
//    * Fetches backtest summaries from the server and groups them by strategy if not already cached.
//    * This is called on component mount to ensure that user has data available for selection immediately.
//    */
//   useEffect(() => {
//     if (process.env.NODE_ENV !== 'test') { // strictly for testing purposes
//       const shouldFetchSummaries = Object.keys(groupedSummaries).length === 0;
//       if (shouldFetchSummaries) {
//         fetchSummaries();
//       }
//     }
//   }, []);

//   /**
//    * Fetches backtest summaries from the server and groups them by strategy.
//    * If the summaries have already been fetched and are stored in the state,
//    * it returns the cached summaries instead of re-fetching them.
//    *
//    * @returns {Promise<Object>} A promise that resolves to an object where keys are strategy names
//    * and values are arrays of summary objects related to each strategy.
//    */

//   const fetchSummaries = async () => {
//     try {
//       const data = await invoke("get_backtest_list");

//       if (!data || data.length === 0) {
//         // Handle the case where data is None or an empty list
//         setGroupedSummaries([]);
//         log.info('No backtest summaries available.');
//       } else {
//         // Convert the list of tuples into the required format
//         // const grouped = groupSummariesByStrategy(data);
//         // console.log(grouped);
//         setGroupedSummaries(data);
//         log.info('Summaries fetched and grouped successfully.');
//       }
//     } catch (error) {
//       log.error('Error fetching backtest summaries:', error);
//     }
//   };

//   /**
//    * Groups an array of tuples by their strategy name (String).
//    * Each tuple is assumed to have (id: i32, strategy_name: String).
//    *
//    * @param {Array} summaries - The array of tuples to group.
//    * @returns {Object} An object where each key is a strategy name
//    * and each value is an array of IDs associated with that strategy.
//    */
//   // const groupSummariesByStrategy = (summaries) => {
//   //   return summaries.reduce((acc, [id, strategy_name]) => {
//   //     if (strategy_name && strategy_name.trim() !== "") {
//   //       if (!acc[strategy_name]) {
//   //         acc[strategy_name] = [];
//   //       }
//   //       acc[strategy_name].push(id);
//   //     }
//   //     return acc;
//   //   }, {});
//   // };

//   /**
//    * Fetches backtest data by ID, utilizing cache if available.
//    * 
//    * @param {string} backtest_id - The ID of the backtest to fetch.
//    */
//   const getBacktest = async (backtest_id) => {
//     console.log(backtestsCache);
//     // Check if the data is already in the cache
//     if (!backtestsCache[backtest_id]) {
//       // Fetch data from the API if not available in cache
//       try {
//         const data = await invoke("get_backtest_by_id", { id: backtest_id });
//         console.log(data);
//         //const data = await apiClient.getBacktestById(backtest_id);
//         if (data) {
//           const processedData = processBacktest(data);
//           setBacktestsCache(prevCache => ({ ...prevCache, [backtest_id]: processedData }));
//           log.info('Updated backtest cache', { backtest_id });
//         }
//       } catch (error) {
//         log.error('Error fetching backtest:', error);
//         throw error;
//       }
//     }
//   };

//   /**
//    * Processes the raw backtest data, filtering and mapping timeseries stats, price data,
//    * and signals to their respective processed formats. Unprocessed parts of the backtest
//    * data are preserved and included in the returned object.
//    * 
//    * @param {Object} backtestData - The raw backtest data including timeseries_stats, price_data, and signals, along with any additional data.
//    * @returns {Object} The processed backtest data, including processed timeseriesData, priceData, and signalData, along with all other unmodified backtest data.
//    */
//   const processBacktest = (backtestData) => {

//     // Destructure the parts of backtestData that require processing
//     const { period_timeseries_stats, daily_timeseries_stats, signals, trades, ...restOfBacktestData } = backtestData;


//     // Rename Static stats field
//     // let processedStaticStats = [...static_stats];
//     // processedStaticStats[0].annual_standard_deviation = static_stats[0].annual_standard_deviation_percentage;
//     // delete processedStaticStats[0].annual_standard_deviation_percentage;

//     // Extract Components
//     // let processedRegressionData = { ...regression_stats };
//     // let timeseriesData = regression_stats.timeseries_data || [];
//     // let beta = regression_stats.beta || {};
//     // let beta_p = regression_stats.p_value_beta || {};
//     // let vif = regression_stats.vif || {};

//     // // Remove specific nested data from the regression data object
//     // delete processedRegressionData.timeseries_data;
//     // delete processedRegressionData.residuals;
//     // delete processedRegressionData.backtest;
//     // delete processedRegressionData.beta;
//     // delete processedRegressionData.p_value_beta;
//     // delete processedRegressionData.vif;

//     // Dynamically add beta values to the top-level of processedRegressionData
//     // Object.keys(beta).forEach(key => {
//     //   processedRegressionData[key] = beta[key];
//     // });

//     // Object.keys(beta_p).forEach(key => {
//     //   processedRegressionData[key] = beta_p[key];
//     // });

//     // Object.keys(vif).forEach(key => {
//     //   processedRegressionData[key] = vif[key];
//     // });

//     // // Process the timeseries data
//     // const regressionTimeseriesData = timeseriesData.map(item => ({
//     //   timestamp: Math.floor(item.timestamp / 1000000000),  // Convert nanoseconds to seconds
//     //   daily_benchmark_return: parseFloat(item.daily_benchmark_return) * 100  // Example of processing, adjust according to your data structure
//     // }));

//     // Remove duplicate entries in timeseries_stats based on timestamp uniqueness (shouldn't be any )
//     const preprocessedPeriodData = period_timeseries_stats.filter((item, index, self) =>
//       index === self.findIndex((findItem) => findItem.timestamp === item.timestamp)
//     );

//     // Convert timeseries data to a more usable format with simplified time and normalized numerical values
//     const periodTimeseriesData = preprocessedPeriodData.map(item => ({
//       timestamp: item.timestamp, // Convert nanoseconds to seconds
//       equity_value: parseFloat(item.equity_value),
//       period_return: parseFloat(item.period_return) * 100, // convert to percent
//       cumulative_return: parseFloat(item.cumulative_return) * 100, // convert to percent
//       percent_drawdown: parseFloat(item.percent_drawdown) * 100, // convert to percent
//     }));

//     // Remove duplicate entries in timeseries_stats based on timestamp uniqueness (shouldn't be any )
//     const preprocessedDailyData = daily_timeseries_stats.filter((item, index, self) =>
//       index === self.findIndex((findItem) => findItem.timestamp === item.timestamp)
//     );

//     // Convert timeseries data to a more usable format with simplified time and normalized numerical values
//     const dailyTimeseriesData = preprocessedDailyData.map(item => ({
//       timestamp: item.timestamp, // Convert nanoseconds to seconds
//       equity_value: parseFloat(item.equity_value),
//       period_return: parseFloat(item.period_return) * 100, // convert to percent
//       cumulative_return: parseFloat(item.cumulative_return) * 100, // convert to percent
//       percent_drawdown: parseFloat(item.percent_drawdown) * 100, // convert to percent
//       // daily_strategy_return: parseFloat(item.daily_strategy_return) * 100,// convert to percent
//       // daily_benchmark_return: parseFloat(item.daily_benchmark_return) * 100,// convert to percent
//     }));

//     // // Format price data by normalizing numerical values and adjusting timestamps
//     // const priceData = price_data.map(item => ({
//     //   symbol: item.symbol,
//     //   time: Math.floor(item.timestamp / 1000000000), // Convert nanoseconds to seconds
//     //   open: parseFloat(item.open),
//     //   high: parseFloat(item.high),
//     //   low: parseFloat(item.low),
//     //   close: parseFloat(item.close),
//     //   volume: parseInt(item.volume),
//     // }));

//     // Enhance signal data with human-readable timestamps and maintain raw numerical values
//     const signalData = signals.map(item => ({
//       iso_timestamp: convertUnixNanosecondsToISO(item.timestamp), // Convert to ISO format for readability
//       time: Math.floor(item.timestamp / 1000000000), // Convert nanoseconds to seconds
//       trade_instructions: item.trade_instructions,
//     }));

//     // Process trade data to include readable timestamps and normalized numerical values
//     const tradeData = trades.map(item => ({
//       action: item.action,
//       cost: parseFloat(item.cost),
//       fees: parseFloat(item.fees),
//       leg_id: parseInt(item.leg_id),
//       price: parseFloat(item.price),
//       quantity: parseFloat(item.quantity),
//       ticker: item.ticker,
//       iso_timestamp: convertUnixNanosecondsToISO(item.timestamp), // Convert to ISO format for readability
//       timestamp: Math.floor(item.timestamp / 1000000000), // Convert nanoseconds to seconds
//       trade_id: parseInt(item.trade_id)
//     }));

//     // Combine processed data with unmodified parts of the original dataset
//     return {
//       ...restOfBacktestData,
//       dailyTimeseriesData,
//       periodTimeseriesData,
//       // priceData,
//       signalData,
//       tradeData,
//       // regression_stats: processedRegressionData,
//       // static_stats: processedStaticStats,
//       // regressionTimeseriesData,

//     };
//   };

//   const contextValue = {
//     fetchSummaries,
//     getBacktest,
//     currentBacktestId,
//     setCurrentBacktestId,
//     setGroupedSummaries,
//     backtestsCache,
//     groupedSummaries,
//     setBacktestsCache
//   };

//   return (
//     <BacktestContext.Provider value={contextValue}>
//       {children}
//     </BacktestContext.Provider>
//   );
// }
