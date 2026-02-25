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
		(table: string, field: string, subpath: string): Storage;
		(table: string, field: string, subpath: string, fileName: string): Storage;
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
		(folder: string, subpath: string): Storage;
		(folder: string, subpath: string, fileName: string): Storage;
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
		(extension: string): boolean;
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
		(extension: string): Storage;
	}
	output: {
		(): OutputStream;
	}
	outputStream: {
		(): OutputStream;
	}
	path: {
		(): File;
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
	subpath: {
		(): string;
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