import log from 'loglevel';
import React, { createContext, useState, useEffect } from 'react';


export const LiveContext = createContext();

/**
 * Provides a context for managing and caching live session data.
 * It fetches a list of session data on component mount and provides functionality to refresh data for a specific session.
 *
 * @param {Object} props - Component props containing children elements.
 */
export function LiveProvider({ children }) {
  const [sessionData, setSessionData] = useState({});
  const [sessionsList, setSessionsList] = useState([]);

  /**
   * Fetches and caches a list of sessions if not already loaded.
   * This is triggered on component mount to ensure data is available for user selection.
   */
  useEffect(() => {
    if (sessionsList.length === 0) {
      fetchSessionsList();
    }
  }, [sessionsList.length]);

  /**
   * Retrieves the list of sessions from the server and updates the state.
   * This function includes error handling and will log successes or failures.
   */
  const fetchSessionsList = async () => {
    try {
      const data = await apiClient.getSessionList();
      setSessionsList(data);
      log.info('Sessions list fetched successfully.');
    } catch (error) {
      log.error('Error fetching sessions list:', error);
    }
  };

  /**
   * Fetches data for a specific session by its ID, updates the sessionData state, and logs the operation.
   * This can be triggered to refresh data as needed.
   *
   * @param {string} session_id - The unique identifier for the session to fetch data for.
   */
  const refreshSessionData = async (session_id) => {
    try {
      const data = await apiClient.getSessionData(session_id);
      setSessionData(data);
      log.info(`Fetched and cached data for session ID: ${session_id}`);
    } catch (error) {
      log.error('Error fetching session data:', error);
      throw error; // Ensure that errors are propagated to callers
    }
  };

  const contextValue = {
    sessionData,
    refreshSessionData,
    sessionsList,
    fetchSessionsList
  };

  return (
    <LiveContext.Provider value={contextValue}>
      {children}
    </LiveContext.Provider>
  );
}
