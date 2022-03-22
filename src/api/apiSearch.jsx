import instance from './api';

const apiSearch = {

  async getSearchData(value, sorted, category, pageCount) {
    const apiKey = 'AIzaSyAq3u5D7M2RdTNGHGg96kPUKn2tqSJYg3c';
    const categoryOnly = category !== 'all' ? `+subject:${category}` : '';
    const maxResults = 30;
    const startIndex = (pageCount - 1) * maxResults;
    try {
      return await instance
        // eslint-disable-next-line max-len
        .get(`volumes?q=${value}${categoryOnly}&orderBy=${sorted}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`)
        .then((res) => res);
    } catch (err) {
      return err;
    }
  },

};

export default apiSearch;
