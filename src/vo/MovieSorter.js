/*If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.*/
//https://reactjs.org/docs/composition-vs-inheritance.html
class MovieSorter {
	constructor(movies) {
		this.movies = movies;
	}
	sortMoviesBy(sortBy) {
		const movieCopy = this.movies.map((movie) => movie); //to avoid passing by reference
		switch (sortBy) {
			case "original":
				return this.movies;
			case "popularity":
				return movieCopy.sort((movie1, movie2) => {
					return movie2.popularity - movie1.popularity;
				});
			case "vote":
				return movieCopy.sort((movie1, movie2) => {
					return movie2.vote_average - movie1.vote_average;
				});
			case "date":
				return movieCopy.sort((movie1, movie2) => {
					return new Date(movie2.release_date) - new Date(movie1.release_date);
				});
			case "name":
				return movieCopy.sort((movie1, movie2) => {
					if (movie2.title > movie1.title) {
						return -1;
					}
					if (movie1.title > movie2.title) {
						return 1;
					}
					return 0;
				});
		}
	}
}

export default MovieSorter;
