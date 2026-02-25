import {java} from '../types';
import File from '../objects/File';
import OutputStream from '../objects/OutputStream';
import _storage from './storage';

interface In {
	available: {
		(): boolean;
	}
	close: {
		(): In;
	}
	init: {
		(): In;
	}
	isAvailable: {
		(): boolean;
	}
	read: {
		(): int;
		(bytes: byte[], off: int, length: int): int;
	}
	readAll: {
		(): string;
	}
	readAllAndClose: {
		(): string;
	}
	readAllBytes: {
		(): byte[];
	}
	readAllBytesAndClose: {
		(): byte[];
	}
	readLine: {
		(): string;
	}
	readString: {
		(): string;
		(charset: java.nio.charset.Charset): string;
	}
	readStringAndClose: {
		(): string;
		(charset: java.nio.charset.Charset): string;
	}
	save: {
		(file: File): void;
		(storage: typeof _storage): void;
	}
	writeTo: {
		(output: OutputStream): In;
		(output: OutputStream): In;
	}
	writeToAndClose: {
		(output: OutputStream): In;
		(output: OutputStream): In;
	}
}
declare const _in: In;
export default _in;