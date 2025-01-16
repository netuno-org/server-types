import {java} from '../types';
import InputStream from './InputStream';
import OutputStream from './OutputStream';

interface File {
	available: {
		(): int;
	}
	baseName: {
		(): string;
	}
	bufferedReader: {
		(): java.io.BufferedReader;
		(bufferSize: int): java.io.BufferedReader;
		(bufferSize: int, charset: string): java.io.BufferedReader;
		(bufferSize: int, charset: java.nio.charset.Charset): java.io.BufferedReader;
		(charset: string): java.io.BufferedReader;
		(charset: java.nio.charset.Charset): java.io.BufferedReader;
	}
	bytes: {
		(): number[];
	}
	contentType: {
		(): string;
		(contentType: string): File;
	}
	copy: {
		(destPath: string): boolean;
		(destPath: string, override: boolean): boolean;
	}
	copyFiles: {
		(destPath: string, extension: string): boolean;
	}
	delete: {
		(): boolean;
	}
	deleteAll: {
		(): boolean;
		(extension: string): boolean;
	}
	deleteFiles: {
		(): boolean;
		(stringExtension: string): boolean;
	}
	ensureJail: {
		(jailPath: string): File;
	}
	exists: {
		(): boolean;
	}
	extension: {
		(): string;
	}
	fullPath: {
		(): string;
	}
	getBaseName: {
		(): string;
	}
	getBytes: {
		(): number[];
	}
	getContentType: {
		(): string;
	}
	getExtension: {
		(): string;
	}
	getFullPath: {
		(): string;
	}
	getInput: {
		(): InputStream;
	}
	getInputStream: {
		(): InputStream;
	}
	getName: {
		(): string;
		(path: string): string;
	}
	getOutput: {
		(): OutputStream;
	}
	getOutputStream: {
		(): OutputStream;
	}
	getPath: {
		(): string;
	}
	getPhysicalPath: {
		(): string;
	}
	getSequenceName: {
		(targetPath: java.io.File, fileName: string): string;
		(targetPath: string, fileName: string): string;
	}
	input: {
		(): InputStream;
	}
	inputStream: {
		(): InputStream;
	}
	isBaseName: {
		(baseName: string): boolean;
	}
	isDirectory: {
		(): boolean;
	}
	isExtension: {
		(extension: string): boolean;
	}
	isFile: {
		(): boolean;
	}
	isJail: {
		(): boolean;
	}
	lastModified: {
		(): long;
	}
	list: {
		(): java.util.List;
	}
	mkdir: {
		(): boolean;
	}
	mkdirs: {
		(): boolean;
	}
	name: {
		(): string;
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
	physicalPath: {
		(): string;
	}
	reader: {
		(): java.io.Reader;
	}
	readerBOM: {
		(): java.io.Reader;
		(charsetName: string): java.io.Reader;
	}
	rename: {
		(newName: string): boolean;
	}
	renameTo: {
		(destPath: string): boolean;
	}
	save: {
		(path: java.lang.Object): void;
		(path: string): void;
	}
	sequenceName: {
		(targetPath: java.io.File, fileName: string): string;
		(targetPath: string, fileName: string): string;
	}
	setContentType: {
		(contentType: string): File;
	}
	writer: {
		(): java.io.Writer;
	}
}
export default File;