import {java} from '../types';
import File from '../objects/File';
import InputStream from '../objects/InputStream';
import OutputStream from '../objects/OutputStream';

interface Storage {
	absolutePath: {
		(): string;
	}
	database: {
		(table: string): Storage;
		(table: string, field: string): Storage;
		(table: string, field: string, path: string): Storage;
		(table: string, field: string, path: string, fileName: string): Storage;
	}
	ensurePath: {
		(): Storage;
	}
	extension: {
		(): string;
	}
	file: {
		(): File;
	}
	filesystem: {
		(folder: string, path: string): Storage;
		(folder: string, path: string, fileName: string): Storage;
	}
	folder: {
		(): File;
	}
	fullPath: {
		(): string;
	}
	getBase: {
		(): string;
	}
	getInput: {
		(): InputStream;
	}
	getInputStream: {
		(): InputStream;
	}
	getOutput: {
		(): OutputStream;
	}
	getOutputStream: {
		(): OutputStream;
	}
	input: {
		(): InputStream;
	}
	inputStream: {
		(): InputStream;
	}
	isDatabase: {
		(): boolean;
	}
	isExtension: {
		(charset: string): boolean;
	}
	isFile: {
		(): boolean;
	}
	isFileSystem: {
		(): boolean;
	}
	isFileSystemPrivate: {
		(): boolean;
	}
	isFileSystemPublic: {
		(): boolean;
	}
	isFileSystemServer: {
		(): boolean;
	}
	isFolder: {
		(): boolean;
	}
	newRandomFile: {
		(charset: string): Storage;
	}
	output: {
		(): OutputStream;
	}
	outputStream: {
		(): OutputStream;
	}
	path: {
		(): string;
	}
	reader: {
		(): java.io.Reader;
	}
	readerBOM: {
		(): java.io.Reader;
		(charset: string): java.io.Reader;
	}
	saveFile: {
		(file: File): void;
	}
	setBase: {
		(base: string): boolean;
	}
	url: {
		(): string;
	}
	writer: {
		(): java.io.Writer;
	}
}
declare const _storage: Storage;
export default _storage;