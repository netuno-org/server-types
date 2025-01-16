import {java} from '../types';

interface RandomString {
	getRandom: {
		(): java.util.Random;
	}
	getSymbols: {
		(): string[];
	}
	getSymbolsString: {
		(): string;
	}
	next: {
		(): string;
	}
	nextString: {
		(): string;
	}
	random: {
		(): java.util.Random;
	}
	setRandom: {
		(random: java.util.Random): RandomString;
	}
	setSymbols: {
		(symbols: string[]): RandomString;
		(symbols: string): RandomString;
	}
	symbols: {
		(): string[];
	}
	symbolsString: {
		(): string;
	}
}
export default RandomString;