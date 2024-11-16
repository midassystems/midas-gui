import "./NewsPage.css";
import { useNews } from './useNews';
import NewsHeader from './Header/Header.jsx';
import React from 'react';
import TradingViewWatchlist from '../TradingView/Watchlist/Watchlist';
import { ArticleFeed } from './Feed/Feed.jsx';
import Headline from "./Headline/Headline.jsx";

const NewsPage = () => {
  const { isLoading, error, news } = useNews();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="news-container">
      <div className="news-header">
        <NewsHeader />
      </div>
      <div className="news-grid">
        <div className="top-articles">
          <Headline stories={news.slice(0, 2)} />
        </div>
        <div className="watchlist">
          <TradingViewWatchlist />
        </div>
        <div className="remaining-articles">
          <ArticleFeed stories={news} />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

