import axios from "axios";

class TmdbClient {
	async getMovie(movieId) {
		const movieResponse = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}`,
			{
				params: {
					api_key: process.env.REACT_APP_TMDB_CLIENT_ID,
					append_to_response: "videos,credits,reviews",
				},
			}
		);
		return movieResponse.data;
	}
}
export default new TmdbClient();
