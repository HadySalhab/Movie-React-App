import seedMovies from "../data/seedMovies";
class PaletteFinder {
	constructor() {
		const localPalettes = JSON.parse(localStorage.getItem("palettes"));
		if (localPalettes === null) {
			this.seedMovies = seedMovies;
		} else {
			this.seedMovies = localPalettes;
		}
	}
	findPaletteById(paletteId) {
		return this.seedMovies.find((palette) => {
			return palette.id === paletteId;
		});
	}
	getAllPalettes() {
		return this.seedMovies;
	}
	addPalettesToSeed(palette) {
		this.seedMovies.push(palette);
		localStorage.setItem("palettes", JSON.stringify(this.seedMovies));
	}
	isPaletteNameUnique(paletteName) {
		return !this.seedMovies.some(
			(palette) => palette.paletteName === paletteName
		);
	}
}
const paletteFinder = new PaletteFinder();
export default paletteFinder;
