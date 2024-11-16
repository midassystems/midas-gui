import React, { useState } from 'react';
import './Feed.css';
import stock_image from '../../../assets/stock_image.png';
import { invoke } from '@tauri-apps/api/core';


export const ArticleFeed = ({ stories }) => {
  const initialItemsToShow = 10;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + initialItemsToShow);
  };

  const openArticle = (url, id) => {
    invoke("seperate_window", { url: url, windowLabel: id.toString() });
  };

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
    <div className="remaining-articles">
      {stories.slice(3, itemsToShow).map(story => (
        <div className='article-teaser' key={story.id} onClick={() => openArticle(story.url, story.id)}>
          <img src={getImageUrl(story)} alt={story.headline} />
          <div className="article-text">
            <p>{formatDate(story.datetime)}</p>
            <h1>{story.headline}</h1>
            <p>{story.summary}</p>
          </div>
        </div>
      ))}
      {itemsToShow < stories.length && (
        <button className="news-list-load-more" onClick={loadMoreItems}>LOAD MORE</button>
      )}
    </div>
  );
};




