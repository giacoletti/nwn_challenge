import axios from 'axios';

const NewsService = {

  endpointUrl: "https://newsapi.org/v2/top-headlines",

  async index() {
    const response = await axios.get(this.endpointUrl, {
      params: {
        language: 'en',
        apiKey: process.env.REACT_APP_NEWS_API_KEY
      }
    });
    debugger
    return response;
  },

  async search(query) {

  }
};

export default NewsService;