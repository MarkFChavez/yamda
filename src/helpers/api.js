// wrapper for movie db

const BASE_URI = 'https://api.themoviedb.org/3'
const API_KEY = '00796473759e09ef6178b6534e673ec4'

export function popular () {
  return movies('popular')
}

export function topRated () {
  return movies('top_rated')
}

export function upcoming () {
  return movies('upcoming')
}

function movies (key) {
  return fetch(`${BASE_URI}/movie/${key}?language=en-US&page=1&api_key=${API_KEY}`)
    .then(response => response.json())
}