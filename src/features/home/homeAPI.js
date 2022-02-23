import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchNews() {
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
    const url = "https://newsapi.org/v2/top-headlines?country=" + country;
    return axios.get(url)
            .then(res => {
                return res.data.articles;
        });
  }
  