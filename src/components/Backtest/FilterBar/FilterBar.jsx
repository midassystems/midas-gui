import './FilterBar.css';
import React, { useState } from 'react';

// Define a simple modal component for selecting backtests
const Modal = ({ isOpen, onClose, groupedSummaries, onSelectBacktest }) => {
  if (!isOpen) return null; // Do not render if the modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Select Backtest</h3>
        <table className="modal-table">
          <tbody>
            {groupedSummaries.map((backtest, index) => (
              <tr key={index} className="modal-row" onClick={() => {
                onSelectBacktest(backtest[0]);
                onClose();
              }}>
                <td className="modal-cell">
                  {backtest[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
};


function FilterBar({ groupedSummaries, currentBacktestName, updateBacktestId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectBacktest = (backtestId) => {
    updateBacktestId(backtestId);
  };

  return (
    <div className="backtest-filter-bar">
      <div className="filter-bar-content">
        <div className="current-backtest-name">
          {currentBacktestName || "None Selected"}
        </div>
        <button className="view-button" onClick={handleOpenModal}>
          View
        </button>
      </div>

      {/* Render the modal for selecting backtests */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        groupedSummaries={groupedSummaries}
        onSelectBacktest={handleSelectBacktest}
      />
    </div>
  );
}

export default FilterBar;
