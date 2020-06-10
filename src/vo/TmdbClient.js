import axios from "axios";
let tmdbCliendId;
if (process.env.NODE_ENV !== "production") {
	tmdbCliendId = process.env.REACT_APP_TMDB_CLIENT_ID;
} else {
	tmdbCliendId = process.env.TMDB_CLIENT_ID;
}

/*If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.*/
//https://reactjs.org/docs/composition-vs-inheritance.html
class TmdbClient {
	async getMovie(movieId) {
		const movieResponse = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}`,
			{
				params: {
					api_key: tmdbCliendId,
					append_to_response: "videos,credits,reviews",
				},
			}
		);
		return movieResponse.data;
	}
	async searchMovie(query) {
		const movieResponse = await axios.get(
			`https://api.themoviedb.org/3/search/movie/`,
			{
				params: {
					api_key: tmdbCliendId,
					query: query,
					page: 1,
				},
			}
		);
		return movieResponse.data;
	}
}
export default new TmdbClient();
