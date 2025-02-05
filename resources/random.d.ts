import {java} from '../types';
import RandomString from '../objects/RandomString';

interface Random {
	init: {
		(): java.util.Random;
		(seed: long): java.util.Random;
	}
	initSecure: {
		(): java.security.SecureRandom;
		(seed: number[]): java.security.SecureRandom;
	}
	initString: {
		(): RandomString;
		(length: int): RandomString;
		(length: int, symbols: string): RandomString;
		(length: int, random: java.util.Random): RandomString;
		(length: int, random: java.util.Random, symbols: string): RandomString;
	}
}
declare const _random: Random;
export default _random;