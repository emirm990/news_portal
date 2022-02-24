import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const country = "us";
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
axios.defaults.headers.common = {
    "X-API-Key": key,
    };
// A mock function to mimic making an async request for data
export function fetchNews(currentPage) {
    
    const url = "https://newsapi.org/v2/top-headlines?country=" + country +"&pageSize=20&page=" + currentPage;
    return axios.get(url, config)
                .then(res => {
                  return res.data;
                 });
  }

export function searchNews(searchQuery) {
   const url = "https://newsapi.org/v2/everything?q=" + searchQuery;
   return axios.get(url, config)
               .then(res => {
                 return res.data;
                });
}
  