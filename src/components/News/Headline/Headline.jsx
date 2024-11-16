import React, { useState } from 'react';
import './Headline.css';
import stock_image from '../../../assets/stock_image.png'
import { invoke } from '@tauri-apps/api/core';

const Headline = ({ stories }) => {

  const openArticle = (url, id) => {
    invoke("seperate_window", { url: url, windowLabel: id.toString() });
  };

  // Pull the most recent articles for headline
  const story1 = stories[0];

  const formatDate = (dateStr) => {
    return dateStr ? new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true
    }) : '';
  };

  const getImageUrl = (story) => {
    return story.image ? story.image : stock_image;
  };

  return (
    <div className="headlines-bar">
      {story1.id && (
        <div className="story-container" onClick={() => openArticle(story1.url, story1.id)}>
          <img src={getImageUrl(story1)} alt={story1.headline} />
          <div className="story-overlay">
            <p>{formatDate(story1.datetime)}</p>
            <h1>{story1.headline}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Headline;
