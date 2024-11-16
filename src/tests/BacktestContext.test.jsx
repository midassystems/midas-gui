import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import * as apiClient from '../services/apiClient';
import { mockSessionStorage, mockLocalStorage } from './mock/mockStorage';
import { BacktestContext, BacktestProvider } from "../contexts/BacktestContext";
import { backtestResponse, backtestListResponse, mockGroupedSummaries, mockProcessedBacktest, mockToken } from './mock/mockData';

// Mock the apiClient to control its behavior for testing purposes
vi.mock('../services/apiClient');

// Mock browsers storage
global.sessionStorage = mockSessionStorage;
global.localStorage = mockLocalStorage;

describe('BacktestContext Tests', () => {  
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Ensure sessionStorage is clear before each test
    sessionStorage.clear(); 
  
    // Mock the login function
    sessionStorage.setItem("token", mockToken);
  
    // Mock apiClient return values
    apiClient.getBacktestById.mockResolvedValue(backtestResponse.data);
    apiClient.getBacktestList.mockResolvedValue(backtestListResponse.data);
  
  });

  test("fetchSummaries and groupSummariesByStrategy Valid", async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <BacktestProvider>{children}</BacktestProvider>;
    
    // Render hook for testing AuthContext within its provider
    const { result, waitFor } = renderHook(() => useContext(BacktestContext), { wrapper });

    // test
    await act(async () => {
        await result.current.fetchSummaries();
    });
    
    // validate
    await waitFor(() => {
      expect(result.current.groupedSummaries).toEqual(mockGroupedSummaries)
    })
  });

  test("fetchSummaries and groupSummariesByStrategy w groupedSumamries not empty", async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <BacktestProvider>{children}</BacktestProvider>;

    // Render hook for testing AuthContext within its provider
    const { result, waitFor} = renderHook(() => useContext(BacktestContext), { wrapper });

    // test
    await waitFor(() => {
      result.current.setGroupedSummaries(mockGroupedSummaries);
    });

    // validate
    await waitFor(() => {
      expect(result.current.groupedSummaries).toEqual(mockGroupedSummaries)
      expect(apiClient.getBacktestList).not.toHaveBeenCalled();
    });
  });

  test("getBacktest Valid", async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <BacktestProvider>{children}</BacktestProvider>;

    // Render hook for testing AuthContext within its provider
    const { result, waitFor} = renderHook(() => useContext(BacktestContext), { wrapper });

    // test
    await act(async () => {
        await result.current.getBacktest(1);
    });

    // validate
    await waitFor(() => {
      expect(result.current.backtestsCache[1]).toEqual(mockProcessedBacktest);
    })
  });

  test("getBacktest with id in backtestsCache Valid", async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <BacktestProvider>{children}</BacktestProvider>;

    // Render hook for testing AuthContext within its provider
    const { result, waitFor} = renderHook(() => useContext(BacktestContext), { wrapper });

    // add backtest to cache
    result.current.setBacktestsCache({1 : mockProcessedBacktest});

    await act(async () => {
        await result.current.getBacktest(1);
    });

    await waitFor(() => {
      expect(apiClient.getBacktestById).not.toHaveBeenCalled()
      expect(result.current.backtestsCache).toEqual({1: mockProcessedBacktest});
    })
  });

//   test("getBacktest with different id in backtestsCache Valid", async ()=> {
//     // Wrap the AuthContext provider around the component under test
//     const wrapper = ({ children }) => <BacktestProvider>{children}</BacktestProvider>;

//     // Render hook for testing AuthContext within its provider
//     const { result, waitFor} = renderHook(() => useContext(BacktestContext), { wrapper });

//     // add backtest to cache
//     result.current.backtestsCache[1] = { ...mockProcessedBacktest };

//     // test
//     await act(async () => {
//         await result.current.getBacktest(2);
//     });
//     // console.log(result.current.backtestsCache[1])
//     console.log(result.current.backtestsCache[2])
    
//     // validate
//     await waitFor(() => {
//       expect(apiClient.getBacktestById).toHaveBeenCalled()
//       expect(result.current.backtestsCache[2]).toEqual(mockProcessedBacktest);
//     })
//   });

})
