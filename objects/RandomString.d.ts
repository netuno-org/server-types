import {java} from '../types';

interface RandomString {
	chars: {
		(): string[];
	}
	charsString: {
		(): string;
	}
	getChars: {
		(): string[];
	}
	getCharsString: {
		(): string;
	}
	getRandom: {
		(): java.util.Random;
	}
	getSymbols: {
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
	setChars: {
		(symbols: string[]): RandomString;
		(chars: string): RandomString;
	}
	setRandom: {
		(random: java.util.Random): RandomString;
	}
}
export default RandomString;