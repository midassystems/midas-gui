import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { LiveContext } from '../contexts/LiveContext.jsx';
import { useLive } from '../components/Live/Hooks/useLive.js';
import { sessionsIds, sessionDataResponse } from './mock/mockData.js';

// Mock the LiveContext
const refreshSessionData = vi.fn();

const wrapper = ({ children }) => (
  <LiveContext.Provider value={{
    sessionData: sessionDataResponse.data, 
    refreshSessionData: refreshSessionData, 
    sessionsList: sessionsIds
  }}>
    {children}
  </LiveContext.Provider>
);

describe('useLive', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('hook & loadLiveSessionData valid', async () => {
    // test (hook should run on render)
    const { result, waitFor } = renderHook(() => useLive(), { wrapper });

    // validate
    await waitFor(() => {
      expect(refreshSessionData).toHaveBeenCalledWith(sessionsIds[0]);
      expect(result.current.loading).toBe(false);
    });
  });

  test('handleRefreshClick valid', async () => {
    const { result, waitFor } = renderHook(() => useLive(), { wrapper });
      
    // test (hook should run on render)
    await act(async () => {
        await result.current.handleRefreshClick();
    });
    
    // valdiate
    await waitFor(() => {
        expect(refreshSessionData).toHaveBeenCalledWith(sessionsIds[0]);
        expect(result.current.loading).toBe(false);
      });
  });
});
