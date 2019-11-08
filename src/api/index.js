import axios from 'axios';


export default class API {
  static apiURL = process.env.REACT_APP_API_URL;
  static timeout = 5000;

  static defaultCB = () => {
  };

  static getLatest = (date, success, error = API.defaultCB, always = API.defaultCB) => {
    axios({
      url: `/latest/${date}`,
      method: "GET",
      baseURL: API.apiURL,
      timeout: API.timeout
    }).then((response) => success(response))
      .catch((response) => error(response))
      .then(always());
  };

  static getCategory = (categoryId, success, error = API.defaultCB, always = API.defaultCB) => {
    axios({
      url: `/news/category/${categoryId}`,
      method: "GET",
      baseURL: API.apiURL,
      timeout: API.timeout
    }).then((response) => success(response))
      .catch((response) => error(response))
      .then(always());
  };

  static getSearch = (searchValue, success, error = API.defaultCB, always = API.defaultCB) => {
    axios({
      url: `/search/${searchValue}`,
      method: "GET",
      baseURL: API.apiURL,
      timeout: API.timeout
    }).then((response) => success(response))
      .catch((response) => error(response))
      .then(always());
  };
}