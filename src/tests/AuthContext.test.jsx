import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { mockImplementation } from 'vitest';

import { mockToken } from './mock/mockData.js';
import * as apiClient from '../services/apiClient.js';
import { AuthContext, AuthProvider } from '../contexts/AuthContext.jsx';
import { mockSessionStorage, mockLocalStorage } from './mock/mockStorage.js';

// Mock the apiClient to control its behavior for testing purposes
vi.mock('../services/apiClient');

// Setup global mocks for browser storage 
global.sessionStorage = mockSessionStorage;
global.localStorage = mockLocalStorage;

describe('AuthContext Tests', () => {
  beforeEach(() => {
    // Reset all mocks to a clean slate before each test.
    vi.clearAllMocks();

    // Ensure sessionStorage is clear before each test
    sessionStorage.clear();

    // Setup the mock implementation for the login function
    apiClient.login.mockImplementation((username, password) => {
      if (username === 'anthony' && password === 'testing123') {
        return Promise.resolve(mockToken);
      }
      return Promise.reject(new Error('Invalid credentials'));
    });
  });

  test('handleLogin valid', async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

    // Render hook for testing AuthContext within its provider
    const { result, waitFor } = renderHook(() => useContext(AuthContext), { wrapper });

    // Use act to simulate the login function call within the context
    act(() => {
      result.current.handleLogin('anthony', 'testing123');
    });

    // Use waitFor to handle asynchronous updates to the context
    waitFor(() => {
      expect(result.current.isAuthenticated).toEqual(true); // Verify that isAuthenticated is true after successful login.
      expect(Object.keys(sessionStorage.store).length).toEqual(1); // Check that sessionStorage has exactly one item stored.
      expect(sessionStorage.setItem).toHaveBeenCalledWith('token', mockToken); // Ensure the correct token is stored in sessionStorage.
    });
  });

  test('handleLogin  invalid credentials', async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

    // Render hook for testing AuthContext within its provider
    const { result, waitFor } = renderHook(() => useContext(AuthContext), { wrapper });

    // Use act to simulate the login function call within the context.
    act(() => {
      result.current.handleLogin('invalid', 'credentials');
    });

    // Use waitFor to handle asynchronous updates to the context.
    waitFor(() => {
      expect(result.current.isAuthenticated).toEqual(false); // Ensure that isAuthenticated is still false
      expect(Object.keys(sessionStorage).length).toEqual(0); // Ensure that sessionStorage.setItem was not called
    })
  });
})
