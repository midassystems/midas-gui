import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { BacktestContext } from '../contexts/BacktestContext.jsx';
import { useBacktest } from '../components/Backtest/Hooks/useBacktest.js';
import { mockGroupedSummaries, mockProcessedBacktest} from './mock/mockData.js';

// Mock the BacktestContext
const mockSetCurrentBacktestId = vi.fn();
const mockGetBacktest = vi.fn();

const wrapper = ({ children }) => (
  <BacktestContext.Provider value={{
    getBacktest: mockGetBacktest,
    currentBacktestId: null,
    setCurrentBacktestId: mockSetCurrentBacktestId,
    backtestsCache: mockProcessedBacktest,
    groupedSummaries: mockGroupedSummaries
  }}>
    {children}
  </BacktestContext.Provider>
);

describe('useBacktest', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('hook & updateBacktestId valid', async () => {
    // test (hook should run on render)
    const { result, waitFor } = renderHook(() => useBacktest(), { wrapper });

    // validate
    await waitFor(() => {
      expect(mockSetCurrentBacktestId).toHaveBeenCalledWith(10) // currentBacktestId should be set 
      expect(mockGetBacktest).toHaveBeenCalledWith(10) // context function getBacktest shoudl be called with the new ID
    });
  });
});
