import seedMovies from "../data/seedMovies";
class PaletteFinder {
	findPaletteById(paletteId) {
		return seedMovies.find((palette) => {
			return palette.id === paletteId;
		});
	}
	getAllPalettes() {
		return seedMovies;
	}
	addPalettesToSeed(palette) {
		seedMovies.push(palette);
	}
}

export default new PaletteFinder();
