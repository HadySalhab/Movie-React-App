import seedMovies from "../data/seedMovies";

//Singleton: Global object that shares mutable state for all components.
class PaletteFinder {
	constructor() {
		const localPalettes = JSON.parse(localStorage.getItem("palettes"));
		if (localPalettes === null || localPalettes.length === 0) {
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
		if (this.seedMovies === null || this.seedMovies.length === 0) {
			return seedMovies;
		}
		return this.seedMovies;
	}
	deleteAndReturnUpdatedList(id) {
		this.seedMovies = this.seedMovies.filter((palette) => palette.id !== id);
		localStorage.setItem("palettes", JSON.stringify(this.seedMovies));
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
