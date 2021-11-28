import axios from 'axios';

const NewsService = {

  endpointUrl: 'https://newsapi.org/v2/',

  async index() {
    const response = await axios.get(`${this.endpointUrl}top-headlines`, {
      params: {
        language: 'en',
        apiKey: process.env.REACT_APP_NEWS_API_KEY
      }
    });
    return response.data.articles;
  },

  async search(query) {
    if (query.length !== undefined) {
      const response = await axios.get(`${this.endpointUrl}everything`, {
        params: {
          q: query,
          sortBy: 'publishedAt',
          language: 'en',
          apiKey: process.env.REACT_APP_NEWS_API_KEY
        }
      });
      return response.data.articles;
    }
  }
};

export default NewsService;