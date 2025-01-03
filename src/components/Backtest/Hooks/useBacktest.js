import log from "loglevel";
import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

/**
 * Custom hook for managing the dashboard state, including loading backtests,
 * handling current backtest selection, and interacting with the BacktestContext.
 *
 * @returns {Object} The state and functions needed for dashboard operation.
 */
export const useBacktest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [backtestList, setBacktestList] = useState([]);
  const [currentBacktestId, setCurrentBacktestId] = useState(null);
  const [currentBacktestData, setCurrentBacktestData] = useState({});

  const setBacktest = async (list) => {
    try {
      // Get cached backtest if one
      const id = await invoke("get_current_backtest");

      if (!id) {
        if (list.length > 0) {
          updateBacktestId(list[0][0]); // Set first backtest ID if no current ID
        }
      } else {
        updateBacktestId(id); // If current backtest ID exists, update it
      }
    } catch (error) {
      log.error("Error fetching current backtest:", error);
    }
  };

  const updateBacktestId = async (newId) => {
    setCurrentBacktestId(newId);
    setIsLoading(true);
    try {
      const data = await invoke("get_backtest_by_id", { id: newId }); // Use 'newId' instead of undefined 'backtest_id'
      if (data) {
        setCurrentBacktestData(data); // Set only the current backtest's data
        log.info(`Backtest data loaded for ID: ${newId}`);
      }
    } catch (error) {
      log.error(`Failed to load backtest data for ID: ${newId}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshBacktestList = async (refresh) => {
    try {
      // Get list backtests
      const data = await invoke("get_backtest_list", { refresh });

      if (!data || data.length === 0) {
        // Handle the case where data is None or an empty list
        log.info("No backtest summaries available.");
        return [];
      } else {
        // Set the fetched backtest list
        setBacktestList(data);
        log.info("Summaries fetched and grouped successfully.");
        return data;
      }
    } catch (error) {
      log.error("Error fetching backtest list:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Get list backtests
        const list = await refreshBacktestList(false);

        // Get current backtest id & data
        await setBacktest(list);
      } catch (error) {
        log.error("Error fetching current backtest:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []); // Dependency on backtestList to ensure proper update

  return {
    isLoading,
    backtestList,
    currentBacktestId,
    currentBacktestData,
    updateBacktestId,
    refreshBacktestList,
  };
};
