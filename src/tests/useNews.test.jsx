import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { NewsContext } from '../contexts/NewsContext.jsx';
import { useNews } from '../components/News/Hooks/useNews.jsx';
import { mockNews, mockFilteredByNews, mockFilteredByTech } from './mock/mockData.js';

const wrapper = ({ children }) => (
    <NewsContext.Provider value={{
        news: mockNews, 
        loading: false,
        error: null
    }}>
      {children}
    </NewsContext.Provider>
  );

describe('useNews', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('initializes correctly with news context', async () => {
        const { result } = renderHook(() => useNews(), { wrapper });
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.currentFilter).toEqual("News");
        expect(result.current.filteredNews).toEqual(mockFilteredByNews);
    });

    test('filters news based on current filter', async () => {
        const { result, waitFor } = renderHook(() => useNews(), { wrapper });
        
        // test
        await act(async () => {
            result.current.setCurrentFilter('Tech');
        });
        
        // validate
        await waitFor(() => {
            expect(result.current.filteredNews).toEqual(mockFilteredByTech);
        });
    });

});