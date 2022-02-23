import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchNews() {
    const key = "a167066467594f269e8ed0f8c53bf5c9";
    const country = "us";
    const url = "https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=" + key;
    return axios.get(url)
            .then(res => {
                return res.data.articles;
        });
  }
  