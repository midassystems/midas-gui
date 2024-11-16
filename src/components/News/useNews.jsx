import log from 'loglevel';
import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      // Call the Tauri command to fetch news
      const response = await invoke('fetch_news');
      if (response && response.length > 0) {
        setNews(response); // Set the news data
        log.info('Data is loaded, and filtering can be applied.');
      } else {
        log.info("No news data available.");
      }
    } catch (err) {
      setError(err.message);
      log.error("Failed to fetch news:", err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetchNews();
      } catch (error) {
        log.error('Error fetching current backtest:', error);
      } finally {
        setIsLoading(false);
      }

    };

    fetchData();
  }, []);

  return {
    isLoading,
    news,
    error,
  };
};



