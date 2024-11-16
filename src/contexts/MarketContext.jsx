// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create the context
// const MarketDashboardContext = createContext();

// // Create a provider component
// export const MarketDashboardProvider = ({ children, defaultSymbol = 'NASDAQ:AAPL' }) => {
//   const [chartLayout, setChartLayout] = useState([{ id: "chart1", symbol: defaultSymbol }]);

//   // Load from localStorage or API on mount
//   useEffect(() => {
//     const savedLayout = localStorage.getItem('marketDashboardLayout');
//     if (savedLayout) {
//       setChartLayout(JSON.parse(savedLayout)); // Load saved layout
//     }
//   }, []);

//   // Save to localStorage whenever chartLayout changes
//   useEffect(() => {
//     localStorage.setItem('marketDashboardLayout', JSON.stringify(chartLayout));
//   }, [chartLayout]);

//   return (
//     <MarketDashboardContext.Provider value={{ chartLayout, setChartLayout }}>
//       {children}
//     </MarketDashboardContext.Provider>
//   );
// };

// // Create a custom hook to use the MarketDashboardContext
// export const useMarketDashboard = () => {
//   return useContext(MarketDashboardContext);
// };

