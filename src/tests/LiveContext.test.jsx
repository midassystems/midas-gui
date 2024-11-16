import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import * as apiClient from '../services/apiClient';
import { LiveContext, LiveProvider } from "../contexts/LiveContext";
import { mockSessionStorage, mockLocalStorage } from './mock/mockStorage';
import { mockToken, sessionDataResponse, sessionsIds } from './mock/mockData';

// Mock the apiClient to control its behavior for testing purposes
vi.mock('../services/apiClient');

// Mock browsers storage
global.sessionStorage = mockSessionStorage;
global.localStorage = mockLocalStorage;

describe('LiveContext Tests', () => {  
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Ensure sessionStorage is clear before each test
    sessionStorage.clear(); 
  
    // Mock apiClient return values
    sessionStorage.setItem("token", mockToken);
    apiClient.getSessionList.mockResolvedValue(sessionsIds);
    apiClient.getSessionData.mockResolvedValue(sessionDataResponse.data);

  });

  test("fetchSessionsList valid", async ()=> {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <LiveProvider>{children}</LiveProvider>;
    
    // Render hook for testing AuthContext within its provider
    const { result, waitFor } = renderHook(() => useContext(LiveContext), { wrapper });

    // test
    await act(async () => {
        await result.current.fetchSessionsList();
    });

    // validate
    await waitFor(() => {
      expect(result.current.sessionsList).toEqual(sessionsIds)
    })
  });

  test("refreshSessionData valid", async ()=> {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <LiveProvider>{children}</LiveProvider>;
    
    // Render hook for testing AuthContext within its provider
    const { result, waitFor } = renderHook(() => useContext(LiveContext), { wrapper });

    // test
    let session_id = 1;
    await act(async () => {
        await result.current.refreshSessionData(session_id);
    });

    // validate
    await waitFor(() => {
        expect(result.current.sessionData).toEqual(sessionDataResponse.data)
    })
  });

})
