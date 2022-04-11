const API_KEY = "15c7ffe143a2583add5d482852d834a1"; //Ma clé API récupéré dans les paramètres sur The movie database

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&networks=Netflix&release_date.gte=2017-05-01`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   /* Les trailers ne marchent pas 
    fetchTrailer : '/discover/movie/634649/videos?api_key=&language=en-US', */
    
}

export default requests;