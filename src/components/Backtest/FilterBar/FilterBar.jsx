import "./FilterBar.css";
import React, { useState } from "react";
import { IoRefreshOutline } from "react-icons/io5";
import Modal from "./Modal.jsx";

const FilterBar = ({
  groupedSummaries,
  currentBacktestName,
  updateBacktestId,
  refreshBacktestList,
}) => {
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
        <button
          className="backtest-refresh-button"
          onClick={() => refreshBacktestList(true)}
        >
          <IoRefreshOutline className="icon" />
        </button>
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
};

export default FilterBar;
