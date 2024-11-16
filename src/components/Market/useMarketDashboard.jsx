import log from 'loglevel';
import { useState, useContext, useEffect } from 'react';
// import { NewsContext } from '../../../contexts/NewsContext';
import { invoke } from '@tauri-apps/api/core';

export const useMarketDashboard = () => {
  const [chartLayout, setChartLayout] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load the chart layout from Rust's persistence layer on mount
  useEffect(() => {
    const loadLayout = async () => {
      try {
        const savedLayout = await invoke('load_layout');
        console.log(savedLayout);
        if (savedLayout && savedLayout.length > 0) {
          setChartLayout(savedLayout); // Set the layout if there's any saved layout
        }
      } catch (err) {
        setError('Failed to load chart layout');
        console.error('Failed to load chart layout:', err);
      } finally {
        setIsLoading(false); // Set loading to false after trying to load the data
      }
    };

    loadLayout();
  }, []);

  // // Save the chart layout to Rust's persistence layer whenever chartLayout changes
  // useEffect(() => {
  //   if (!isLoading) {  // Prevent saving the initial default layout on the first render
  //     const saveLayout = async () => {
  //       try {
  //         await invoke('save_chart_layout', { layout: chartLayout });
  //       } catch (err) {
  //         setError('Failed to save chart layout');
  //         console.error('Failed to save chart layout:', err);
  //       }
  //     };

  //     saveLayout();
  //   }
  // }, [chartLayout]);

  return {
    chartLayout,
    setChartLayout,
    isLoading,
    error,
  };
};

