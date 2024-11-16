import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { newsResponse, mockNews } from './mock/mockData';
import * as benzingaClient from "../services/benzingaClient";
import { NewsContext, NewsProvider } from "../contexts/NewsContext";
import { mockSessionStorage, mockLocalStorage } from './mock/mockStorage';

// Mock the benzingaClient to control its behavior for testing purposes
vi.mock("../services/benzingaClient");

// Mock browsers storage
global.sessionStorage = mockSessionStorage;
global.localStorage = mockLocalStorage;

describe('NewsContext Tests', () => {  
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Ensure sessionStorage is clear before each test
    sessionStorage.clear(); 
    localStorage.clear();
  
    // Mock api response 
    benzingaClient.fetchNews.mockResolvedValue(newsResponse.data);
  });

  test("initialFetchNews", async ()=> {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <NewsProvider>{children}</NewsProvider>;
     
    // Render hook for testing AuthContext within its provide
    const { result, waitFor } = renderHook(() => useContext(NewsContext), { wrapper });
    
    // test
    await act(async () => {
        await result.current.refreshNews();
    });
    
    // validate
    await waitFor(() => {
      expect(result.current.news).toEqual(mockNews)
      expect(Object.keys(JSON.parse(sessionStorage.getItem(`news`))).length).toEqual(7)
      expect(result.current.loading).toEqual(false)
    })
  });

  test("refreshNews Valid", async () => {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <NewsProvider>{children}</NewsProvider>;
     
    // Render hook for testing AuthContext within its provide
    const { result, waitFor } = renderHook(() => useContext(NewsContext), { wrapper });
    
    // test
    await act(async () => {
        await result.current.refreshNews();
    });

    // validate
    await waitFor(() => {
      expect(result.current.news).toEqual(mockNews)
      expect(sessionStorage.getItem(`news`).length).toBeGreaterThan(0)
      expect(sessionStorage.getItem(`news_lastUpdate`).length).toBeGreaterThan(0)
    })
  });

  test("refreshNews With cached News", async ()=> {
    // Wrap the AuthContext provider around the component under test
    const wrapper = ({ children }) => <NewsProvider>{children}</NewsProvider>;
     
    // Render hook for testing AuthContext within its provide
    const { result, waitFor } = renderHook(() => useContext(NewsContext), { wrapper });

    // Mock Cached Data
    let oldestid = newsResponse.data[0].id;
    let mockCachedNews = {
        [oldestid]: newsResponse.data[0]
    };
    
    const lastUpdate = 1714560277; // some timestamp in milliseconds
    sessionStorage.setItem(`news`, JSON.stringify(mockCachedNews));
    sessionStorage.setItem(`news_lastUpdate`, lastUpdate);

    // Mock API response of data since the mock news cached 
    let updateNews = newsResponse.data.slice(1);
    benzingaClient.fetchNews.mockResolvedValue(updateNews);
    
    // test
    await act(async () => {
        await result.current.refreshNews();
    });
    
    // validate
    await waitFor(() => {
      expect(result.current.news).toEqual(mockNews)
      expect(parseInt(sessionStorage.getItem(`news_lastUpdate`))).toBeGreaterThan(lastUpdate)
      expect(Object.keys(JSON.parse(sessionStorage.getItem(`news`))).length).toEqual(7)
    })
  });

})