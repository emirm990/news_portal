import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const country = process.env.REACT_APP_COUNTRY || "us";
const pageSize = process.env.REACT_APP_PAGE_SIZE || 20;
const url = "https://newsapi.org/v2/";
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
axios.defaults.headers.common = {
    "X-API-Key": key,
    };

function generateUrl(endPoint, currentPageIndicator, searchTerm, searchCategory){
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

    return fetchUrl;
}
export function fetchNews({searchParameters}) {
    const {searchTerm, searchCategory ,endPoint, currentPageIndicator} = searchParameters;
    const fetchUrl = generateUrl(endPoint, currentPageIndicator, searchTerm, searchCategory);

    return axios.get(fetchUrl, config)
                .then(res => {
                  return res.data;
                 });
  }