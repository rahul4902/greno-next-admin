import { CategoryFormData, SampleTypeFormData, TestFormData, CouponFormData } from "data/greno/defaultFormData";

const { default: axios } = require("axios");
const { API_URL } = require("utils/constant");

const apiService = {
  fetchCategories: async (query,other=null) => {
    try {
      
      const { data } = await axios.get(API_URL + `category/activeList${other?other:''}`, {
        params: { query },
      });
      
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  },
  getActiveBanner: async (query) => {
    try {
      const { data } = await axios.get(API_URL + 'api/banner/activeList', {
        params: { query },
      });
      
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  },
  

  fetchUsers: async (query) => {
    try {
      const { data } = await axios.get(API_URL + 'api/users', {});
      
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
  fetchTests: async () => {
    try {
      const { data } = await axios.get(API_URL + 'api/test/activeList');
      
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  },
  fetchTest: async (_id) => {
    try {
      const { data } = await axios.get(API_URL + 'api/test/'+_id);
      
      return data?.data || TestFormData; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return TestFormData;
    }
  },
  fetchCategoryById: async (_id) => {
    try {
      const { data } = await axios.get(API_URL + 'category/'+_id);
      
      return data?.data || CategoryFormData; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return TestFormData;
    }
  },
  fetchBannerById: async (_id) => {
    try {
      const { data } = await axios.get(API_URL + 'api/banner/'+_id);
      
      return data?.data || BannerFormData; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return TestFormData;
    }
  },
  fetchCouponById: async (_id) => {
    try {
      const { data } = await axios.get(API_URL + 'api/coupon/'+_id);
      
      return data?.data || CouponFormData; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return TestFormData;
    }
  },
  fetchSampleTypeById: async (_id) => {
    try {
      const { data } = await axios.get(API_URL + 'sampleType/'+_id);
      
      return data?.data || SampleTypeFormData; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return TestFormData;
    }
  },
  saveTestForm: async (formData) => {
    try {
      const { data } = await axios.post(API_URL + 'api/test/create', formData);
      console.log('data',data)
      return data?.data || []; // Return the categories array from the response
    } catch (error) {
      console.error('API Error:', error.message);
      return [];
    }
  }
};

export default apiService;
