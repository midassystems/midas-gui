import { useState } from 'react';

/**
 * Custom hook for managing pagination logic.
 * Handles pagination by calculating total pages and slicing items per the current page.
 * 
 * @param {Array} items - The items to paginate.
 * @param {number} itemsPerPage - Number of items per page. Must be greater than 0.
 * @returns {Object} Pagination logic and current items.
 */
export function usePagination(items, itemsPerPage) {
  if (itemsPerPage <= 0) {
    throw new Error('itemsPerPage must be greater than 0.');
  }
  console.log(items);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Navigates to the next page if not on the last page.
  const goToNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  // Navigates to the previous page if not on the first page.
  const goToPreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  // Calculate the items to be shown on the current page.
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentItems();

  return {
    currentItems,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages
  };
}
