// import log from 'loglevel';
// // import * as benzingaClient from "../services/benzingaClient";
// import React, { createContext, useState, useEffect } from 'react';

// export const NewsContext = createContext();

// /**
//  * Computes the last update time. It accounts for weekends by setting the last update to the previous Friday.
//  * This function ensures that the update time is adjusted for cases when news updates are not available over the weekend.
//  *
//  */
// const computeLastUpdateTime = () => {
//   const todayDate = new Date();
//   todayDate.setHours(0, 0, 0, 0);
//   const dayOfWeek = todayDate.getDay();
//   // Adjust for weekends(not very many stories so go back to friday)
//   if (dayOfWeek === 0 || dayOfWeek === 6) {
//     const daysToLastFriday = dayOfWeek === 0 ? 2 : 1;
//     todayDate.setDate(todayDate.getDate() - daysToLastFriday);
//   }
//   return todayDate;
// }

// export const NewsProvider = ({ children }) => {
//   const [news, setNews] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [initialDownloadFlag, setInitialDownloadFlag] = useState(false);

//   const REFRESH_INTERVAL = 300000; // 5 minutes in milliseconds

//   const initialFetchNews = async () => {
//     setLoading(true);
//     const lastUpdateDate = computeLastUpdateTime();
//     const dateFrom = lastUpdateDate.toISOString().slice(0, 10); // Format as YYYY-MM-DD
//     const dateTo = new Date().toISOString().slice(0, 10); // Format as YYYY-MM-DD

//     let allNews = {};
//     let page = 1;
//     try {
//       while (true) {
//         const params = {
//           displayOutput: "full",
//           dateTo: dateTo,
//           dateFrom: dateFrom,
//           page: page,
//           pageSize: 500
//         };
//         const newsResponse = await benzingaClient.fetchNews(params);
//         if (!newsResponse.length) break;
//         newsResponse.forEach(item => {
//           allNews[item.id] = item;  // Add each item to the allNews object using item.id as key
//         });

//         page++;
//       }
//       if (Object.keys(allNews).length) {
//         setNews(allNews);
//         sessionStorage.setItem('news', JSON.stringify(allNews));
//         sessionStorage.setItem('news_lastUpdate', `${Math.floor(new Date().getTime() / 1000)}`);
//         log.info("Initial news loaded.");
//       }
//     } catch (err) {
//       setError(err.message);
//       log.error("Failed to load news:", err);
//     } finally {
//       setLoading(false);
//       setInitialDownloadFlag(true);
//     }
//   };

//   const refreshNews = async () => {
//     setLoading(true);
//     setError(null);
//     const lastUpdate = sessionStorage.getItem('news_lastUpdate') || `${Math.floor(new Date().getTime() / 1000)}`;;
//     try {
//       const params = { updatedSince: lastUpdate, displayOutput: "full", pageSize: '500' };
//       const newData = await benzingaClient.fetchNews(params);
//       const existingData = JSON.parse(sessionStorage.getItem(`news`)) || {};
//       if (newData && newData.length > 0) {
//         newData.forEach(item => {
//           existingData[item.id] = item; // use ID as key to avoid duplicates
//         });
//         sessionStorage.setItem('news', JSON.stringify(existingData));
//         sessionStorage.setItem('news_lastUpdate', `${Math.floor(new Date().getTime() / 1000)}`);
//         setNews(existingData);
//         log.info("Refreshed news cache and state.");
//       }
//     } catch (err) {
//       setError(err.message);
//       log.error("Failed to fetch news:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (process.env.NODE_ENV !== 'test') { // strictly for testing purposes
//       initialFetchNews(); // Run once start of session
//       const interval = setInterval(refreshNews, REFRESH_INTERVAL);
//       return () => clearInterval(interval);
//     }
//   }, []);

//   const contextValue = { loading, error, news, setNews, refreshNews, initialDownloadFlag };

//   return (
//     <NewsContext.Provider value={contextValue}>
//       {children}
//     </NewsContext.Provider>
//   );
// };

// import log from 'loglevel';
// import React, { createContext, useState, useEffect } from 'react';
// import { invoke } from '@tauri-apps/api/tauri';

// export const NewsContext = createContext();

// /**
//  * Computes the last update time. It accounts for weekends by setting the last update to the previous Friday.
//  * This function ensures that the update time is adjusted for cases when news updates are not available over the weekend.
//  */
// const computeLastUpdateTime = () => {
//   const todayDate = new Date();
//   todayDate.setHours(0, 0, 0, 0);
//   const dayOfWeek = todayDate.getDay();
//   // Adjust for weekends (not very many stories so go back to Friday)
//   if (dayOfWeek === 0 || dayOfWeek === 6) {
//     const daysToLastFriday = dayOfWeek === 0 ? 2 : 1;
//     todayDate.setDate(todayDate.getDate() - daysToLastFriday);
//   }
//   return todayDate;
// }

// export const NewsProvider = ({ children }) => {
//   const [news, setNews] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [initialDownloadFlag, setInitialDownloadFlag] = useState(false);

//   /*   const REFRESH_INTERVAL = 300000; // 5 minutes in milliseconds */
//   const REFRESH_INTERVAL = 3600000; // 1 hour in milliseconds


//   const fetchNews = async (isInitialFetch = false) => {
//     setLoading(true);
//     setError(null);

//     try {
//       // Use Tauri's invoke to call the fetch_news command from Rust
//       const newsResponse = await invoke('fetch_news');

//       if (newsResponse && newsResponse.length > 0) {
//         const allNews = {};
//         newsResponse.forEach(item => {
//           allNews[item.id] = item;  // Use item.id as the key to avoid duplicates
//         });

//         setNews(allNews);
//         console.log(allNews);
//         sessionStorage.setItem('news', JSON.stringify(allNews));
//         sessionStorage.setItem('news_lastUpdate', `${Math.floor(new Date().getTime() / 1000)}`);
//         log.info(isInitialFetch ? "Initial news loaded." : "News refreshed.");
//       } else {
//         log.info("No news data available.");
//       }
//     } catch (err) {
//       setError(err.message);
//       log.error("Failed to fetch news:", err);
//     } finally {
//       setLoading(false);
//       if (isInitialFetch) {
//         setInitialDownloadFlag(true);
//       }
//     }
//   };

//   useEffect(() => {
//     if (process.env.NODE_ENV !== 'test') { // strictly for testing purposes
//       fetchNews(true); // Initial fetch
//       const interval = setInterval(() => fetchNews(false), REFRESH_INTERVAL);
//       return () => clearInterval(interval);
//     }
//   }, []);

//   const contextValue = { loading, error, news, setNews, refreshNews: () => fetchNews(false), initialDownloadFlag };

//   return (
//     <NewsContext.Provider value={contextValue}>
//       {children}
//     </NewsContext.Provider>
//   );
// };
