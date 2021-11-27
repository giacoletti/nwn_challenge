import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';
import NewsService from '../modules/NewsService';
import { Grid } from 'semantic-ui-react';

const NewsIndex = () => {

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await NewsService.index();
    setNews(response);
  };

  const newsList = news.map((news, index) => {
    news.id = index + 1;
    return (
      <div key={news.id}>
        <NewsCard news={news} />
      </div>
    );
  });

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Grid data-cy="news-list">
        {newsList}
      </Grid>
    </>
  );
};

export default NewsIndex;
