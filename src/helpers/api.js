// wrapper for movie db

const BASE_URI = 'https://api.themoviedb.org/3'
const API_KEY = '00796473759e09ef6178b6534e673ec4'

export function popular (page = 1) {
  return movies('popular', page)
}

export function topRated (page = 1) {
  return movies('top_rated', page)
}

export function upcoming (page = 1) {
  return movies('upcoming', page)
}

function movies (key, page) {
  return fetch(`${BASE_URI}/movie/${key}?language=en-US&page=${page}&api_key=${API_KEY}`)
    .then(response => response.json())
}