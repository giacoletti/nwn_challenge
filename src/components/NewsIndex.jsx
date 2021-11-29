import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsService from '../modules/NewsService';
import { Grid } from 'semantic-ui-react';

const NewsIndex = (props) => {

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

  useEffect(() => {
    if (props.search.length > 0) {
      setNews(props.search);
    }
  }, [props.search]);

  return (
    <>
      <Grid data-cy="news-list">
        {newsList}
      </Grid>
    </>
  );
};

export default NewsIndex;
