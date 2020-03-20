import axios from "axios";

// 유니 피드백 코드
const base_url = 'https://api.themoviedb.org/3';
const api_key = '44ebf9cf927b173d893cd89ea3db2e1e';

export const moviesApi = {
  nowPlaying: () => axios.get(`${base_url}/movie/now_playing?api_key=${api_key}`),
  upcoming: () => axios.get(`${base_url}/movie/upcoming?api_key=${api_key}`),
  popular: () => axios.get(`${base_url}/movie/popular?api_key=${api_key}`),
  movieDetail: id => axios.get(`${base_url}/movie/${id}?api_key=${api_key}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term =>
    axios.get(`${base_url}/search/movie?api_key=${api_key}`, {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => axios.get(`${base_url}/tv/top_rated?api_key=${api_key}`),
  popular: () => axios.get(`${base_url}/tv/popular?api_key=${api_key}`),
  airingToday: () => axios.get(`${base_url}/tv/airing_today?api_key=${api_key}`),
  showDetail: id => axios.get(`${base_url}/tv/${id}?api_key=${api_key}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term =>
    axios.get(`${base_url}/search/tv?api_key=${api_key}`, {
      params: {
        query: encodeURIComponent(term)
      }
    })
};


// 니꼬 코드
//
// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   params: {
//     api_key: "44ebf9cf927b173d893cd89ea3db2e1e",
//     language: "en-US"
//   }
// });
//
// export const moviesApi = {
//   nowPlaying: () => api.get("movie/now_playing"),
//   upcoming: () => api.get("movie/upcoming"),
//   popular: () => api.get("movie/popular"),
//   movieDetail: id =>
//     api.get(`movie/${id}`, {
//       params: {
//         append_to_response: "videos"
//       }
//     }),
//   search: term =>
//     api.get("search/movie", {
//       params: {
//         query: encodeURIComponent(term)
//       }
//     })
// };
//
// export const tvApi = {
//   topRated: () => api.get("tv/top_rated"),
//   popular: () => api.get("tv/popular"),
//   airingToday: () => api.get("tv/airing_today"),
//   showDetail: id =>
//     api.get(`tv/${id}`, {
//       params: {
//         append_to_response: "videos"
//       }
//     }),
//   search: term =>
//     api.get("search/tv", {
//       params: {
//         query: encodeURIComponent(term)
//       }
//     })
// };