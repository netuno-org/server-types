import {java} from '../types';

interface Logger {
	debug: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
	error: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
	fatal: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
	info: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
	print: {
		(content: string[]): void;
		(content: boolean): void;
		(content: char): void;
		(content: double): void;
		(content: float): void;
		(content: int): void;
		(content: java.lang.Object): void;
		(content: string): void;
		(content: long): void;
	}
	println: {
		(content: string[]): void;
		(content: boolean): void;
		(content: char): void;
		(content: double): void;
		(content: float): void;
		(content: int): void;
		(content: java.lang.Object): void;
		(content: string): void;
		(content: long): void;
	}
	trace: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
	warn: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
	}
}
declare const _log: Logger;
export default _log;