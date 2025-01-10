import "./Modal.css";
import React, { useState } from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { PiLessThanBold } from "react-icons/pi";

const Modal = ({ isOpen, onClose, groupedSummaries, setSelectedBacktest }) => {
  const [selectedStrategy, setSelectedStrategy] = useState(null); // Track selected strategy
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!isOpen) return null; // Do not render if the modal is not open

  // Extract unique strategy names
  const strategies = Array.from(
    new Set(groupedSummaries.map((backtest) => backtest[1].split("-")[0])),
  );

  // Filter backtests by the selected strategy
  const filteredSummaries = selectedStrategy
    ? groupedSummaries.filter(
        (backtest) => backtest[1].split("-")[0] === selectedStrategy,
      )
    : [];

  // Pagination logic
  const totalPages = Math.ceil(filteredSummaries.length / itemsPerPage);
  const currentItems = filteredSummaries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const resetModal = () => {
    setSelectedStrategy(null);
    setCurrentPage(1);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {selectedStrategy === null ? (
          // First Modal: Select Strategy
          <>
            <h3>Strategies</h3>
            <table className="modal-table">
              <tbody>
                {strategies.map((strategy, index) => (
                  <tr
                    key={index}
                    className="modal-row"
                    onClick={() => setSelectedStrategy(strategy)}
                  >
                    <td className="modal-cell">{strategy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          // Second Modal: Display Backtests for Selected Strategy
          <>
            <h3>{selectedStrategy}</h3>
            <table className="modal-table">
              <tbody>
                {currentItems.map((backtest, index) => (
                  <tr
                    key={index}
                    className="modal-row"
                    onClick={() => {
                      setSelectedBacktest(backtest[0]);
                      onClose();
                    }}
                  >
                    <td className="modal-cell">{backtest[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="modal-pagination">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
                className="modal-arrow-button"
              >
                <PiLessThanBold className="modal-arrow-icons" />
              </button>
              <span className="modal-page-text">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
                className="modal-arrow-button"
              >
                <PiGreaterThanBold className="modal-arrow-icons" />
              </button>
            </div>
            <button onClick={resetModal} className="modal-back-button">
              Strategies
            </button>
          </>
        )}
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
