import {java} from '../types';
import OutputStream from './OutputStream';

interface InputStream {
	available: {
		(): int;
	}
	close: {
		(): void;
	}
	mark: {
		(arg0: int): void;
	}
	markSupported: {
		(): boolean;
	}
	nullInputStream: {
		(): InputStream;
	}
	read: {
		(): int;
		(arg0: number[]): int;
		(bytes: number[], off: int, length: int): int;
	}
	readAll: {
		(): string;
		(input: InputStream): string;
		(input: InputStream, charset: string): string;
		(r: java.io.Reader): string;
	}
	readAllAndClose: {
		(): string;
	}
	readAllBytes: {
		(): number[];
		(input: InputStream): number[];
	}
	readAllBytesAndClose: {
		(): number[];
	}
	readAllBytesFromFile: {
		(file: java.io.File): number[];
		(file: string): number[];
		(file: java.nio.file.Path): number[];
	}
	readFromFile: {
		(path: java.io.File): string;
		(path: java.io.File, charset: string): string;
		(path: string): string;
		(path: string, charset: string): string;
		(path: java.nio.file.Path): string;
		(path: java.nio.file.Path, charset: string): string;
	}
	readLine: {
		(): string;
		(input: InputStream): string;
	}
	readNBytes: {
		(arg0: number[], arg1: int, arg2: int): int;
		(arg0: int): number[];
	}
	readString: {
		(): string;
		(charset: java.nio.charset.Charset): string;
	}
	readStringAndClose: {
		(): string;
		(charset: java.nio.charset.Charset): string;
	}
	reset: {
		(): void;
	}
	skip: {
		(arg0: long): long;
	}
	skipNBytes: {
		(arg0: long): void;
	}
	transferTo: {
		(arg0: OutputStream): long;
	}
	writeTo: {
		(output: OutputStream): InputStream;
		(output: OutputStream): InputStream;
	}
	writeToAndClose: {
		(output: OutputStream): InputStream;
		(output: OutputStream): InputStream;
	}
}
export default InputStream;