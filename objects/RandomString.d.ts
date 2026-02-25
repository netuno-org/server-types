import {java} from '../types';

interface RandomString {
	chars: {
		(): char[];
	}
	charsString: {
		(): string;
	}
	getChars: {
		(): char[];
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
		(symbols: char[]): RandomString;
		(chars: string): RandomString;
	}
	setRandom: {
		(random: java.util.Random): RandomString;
	}
}
export default RandomString;