import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const country = process.env.REACT_APP_COUNTRY;
const pageSize = process.env.REACT_APP_PAGE_SIZE;
const url = "https://newsapi.org/v2/";
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
axios.defaults.headers.common = {
    "X-API-Key": key,
    };

export function fetchNews({searchParameters}) {
    const {searchTerm, searchCategory ,endPoint, currentPageIndicator} = searchParameters;
    let fetchUrl = url + endPoint + "?&pageSize="+ pageSize +"&page=" + currentPageIndicator;
    if(searchTerm){
      fetchUrl += "&q=" + searchTerm;
    }
    if(searchCategory){
      fetchUrl += "&sortBy=" + searchCategory;
    }
    if(endPoint === "top-headlines"){
      fetchUrl += "&country=" + country;
    }

    return axios.get(fetchUrl, config)
                .then(res => {
                  return res.data;
                 });
  }