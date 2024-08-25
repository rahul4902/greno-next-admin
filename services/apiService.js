const { default: axios } = require("axios");
const { API_URL } = require("utils/constant");

const apiService = {
  fetchCategories: async (query) => {
    try {
      const { data } = await axios.get(API_URL + 'category/activeList', {
        params: { query },
      });
      
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  },
  fetchSampleTypes: async (query) => {
    try {
      const { data } = await axios.get(API_URL + 'sampleType/activeList', {
        params: { query },
      });
      
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  },
};

export default apiService;
