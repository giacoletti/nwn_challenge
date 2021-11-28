import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewsService from '../modules/NewsService';
import { Input } from 'semantic-ui-react';

const NewsSearch = ({ childToParent }) => {

  const [userSearch, setUserSearch] = useState({});

  const handleChange = (event) => {
    setUserSearch({ search: event.target.value });
  };

  const searchNews = async () => {
    const response = await NewsService.search(userSearch.search);
    childToParent(response);
  };

  return (
    <Input data-cy="nwn-search-input"
      action={{
        content: "Search",
        onClick: searchNews
      }}
      placeholder='Search...'
      onChange={handleChange}
    />
  );
};

export default NewsSearch;
