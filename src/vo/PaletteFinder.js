import seedMovies from "../data/seedMovies";
class PaletteFinder {
	findPaletteById(paletteId) {
		return seedMovies.find((palette) => {
			return palette.id === paletteId;
		});
	}
}

export default new PaletteFinder();
