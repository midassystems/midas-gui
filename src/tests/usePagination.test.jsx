import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from '../components/Backtest/Hooks/usePagination';

describe('usePagination', () => {
  it('initializes with the correct state', () => {
    const items = Array.from({ length: 100 }, (_, i) => i + 1);
    const itemsPerPage = 10;

    const { result } = renderHook(() => usePagination(items, itemsPerPage));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(10);
    expect(result.current.currentItems).toEqual(items.slice(0, 10));
  });

  it('navigates to next and previous pages correctly', () => {
    const items = Array.from({ length: 30 }, (_, i) => i + 1);
    const itemsPerPage = 10;

    const { result } = renderHook(() => usePagination(items, itemsPerPage));

    // Go to next page
    act(() => {
      result.current.goToNextPage();
    });
    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentItems).toEqual(items.slice(10, 20));

    // Go to previous page
    act(() => {
      result.current.goToPreviousPage();
    });
    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentItems).toEqual(items.slice(0, 10));
  });

  it('handles edge cases for navigation', () => {
    const items = Array.from({ length: 15 }, (_, i) => i + 1);
    const itemsPerPage = 10;

    const { result } = renderHook(() => usePagination(items, itemsPerPage));

    // Attempt to go beyond last page
    act(() => {
      result.current.goToNextPage();
      result.current.goToNextPage();
    });
    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentItems).toEqual(items.slice(10, 15));

    // Attempt to go before first page
    act(() => {
      result.current.goToPreviousPage();
      result.current.goToPreviousPage();
    });
    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentItems).toEqual(items.slice(0, 10));
  });
});
