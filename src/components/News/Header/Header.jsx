import React from 'react';
import { invoke } from '@tauri-apps/api/core';
import './Header.css';

// URL mapping for each news source
const sourceUrls = {
  'WSJ': 'https://www.wsj.com',
  'YAHOO': 'https://finance.yahoo.com',
  'CNBC': 'https://www.cnbc.com/',
  'BLOOMBERG': 'https://www.bloomberg.com/canada',
  'BARRONS': 'https://www.barrons.com/'
};

const NewHeader = () => {
  const openSourceWindow = (source) => {
    const url = sourceUrls[source];
    if (url) {
      invoke('seperate_window', { url, windowLabel: source });
    }
  };

  return (
    <div className="news-filter-bar">
      {Object.keys(sourceUrls).map((source, index) => (
        <React.Fragment key={source}>
          <button
            className="news-filter-button"
            onClick={() => openSourceWindow(source)}
          >
            {source}
          </button>
          {/* Render the separator unless it's the last item */}
          {index !== Object.keys(sourceUrls).length - 1 && (
            <span className="news-separator"> | </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NewHeader;

