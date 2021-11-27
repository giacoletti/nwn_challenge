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

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Grid>
        <NewsCard />
      </Grid>
    </>
  );
};

export default NewsIndex;
