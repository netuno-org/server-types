import {java, org} from '../types';

interface OutputStream {
	close: {
		(): void;
	}
	closeMirrors: {
		(): OutputStream;
	}
	finish: {
		(): OutputStream;
	}
	flush: {
		(): void;
	}
	getLength: {
		(): int;
	}
	getMirrors: {
		(): java.util.List;
	}
	getNotify: {
		(): org.netuno.psamata.io.OutputStreamNotify;
	}
	isEmpty: {
		(): boolean;
	}
	isEnabled: {
		(): boolean;
	}
	nullOutputStream: {
		(): OutputStream;
	}
	print: {
		(v: boolean): OutputStream;
		(v: byte): OutputStream;
		(v: char): OutputStream;
		(v: double): OutputStream;
		(v: float): OutputStream;
		(v: int): OutputStream;
		(bytes: string): OutputStream;
		(v: long): OutputStream;
		(v: short): OutputStream;
	}
	printAndClose: {
		(v: boolean): OutputStream;
		(v: char): OutputStream;
		(v: double): OutputStream;
		(v: float): OutputStream;
		(v: int): OutputStream;
		(bytes: string): OutputStream;
		(v: long): OutputStream;
		(v: short): OutputStream;
	}
	printf: {
		(format: string, objects: java.lang.Object[]): OutputStream;
	}
	printfAndClose: {
		(format: string, objects: java.lang.Object[]): OutputStream;
	}
	println: {
		(): OutputStream;
		(v: boolean): OutputStream;
		(v: byte): OutputStream;
		(v: char): OutputStream;
		(v: double): OutputStream;
		(v: float): OutputStream;
		(v: int): OutputStream;
		(bytes: string): OutputStream;
		(v: long): OutputStream;
		(v: short): OutputStream;
	}
	printlnAndClose: {
		(): OutputStream;
		(v: boolean): OutputStream;
		(v: char): OutputStream;
		(v: double): OutputStream;
		(v: float): OutputStream;
		(v: int): OutputStream;
		(bytes: string): OutputStream;
		(v: long): OutputStream;
		(v: short): OutputStream;
	}
	setEnabled: {
		(enabled: boolean): OutputStream;
	}
	setNotify: {
		(outputNotify: org.netuno.psamata.io.OutputStreamNotify): OutputStream;
	}
	setStart: {
		(v: boolean): OutputStream;
	}
	start: {
		(): OutputStream;
	}
	write: {
		(b: number[]): void;
		(bytes: number[], off: int, leng: int): void;
		(b: int): void;
	}
	writeAndClose: {
		(v: boolean): OutputStream;
		(v: char): OutputStream;
		(v: double): OutputStream;
		(v: float): OutputStream;
		(v: int): OutputStream;
		(bytes: string): OutputStream;
		(v: long): OutputStream;
		(v: short): OutputStream;
	}
	writeBoolean: {
		(v: boolean): OutputStream;
	}
	writeByte: {
		(b: int): OutputStream;
	}
	writeBytes: {
		(s: string): OutputStream;
	}
	writeChar: {
		(v: int): OutputStream;
	}
	writeChars: {
		(s: string): OutputStream;
	}
	writeDouble: {
		(v: double): OutputStream;
	}
	writeFile: {
		(file: java.io.File): OutputStream;
		(file: string): OutputStream;
		(file: java.nio.file.Path): OutputStream;
	}
	writeFileAndClose: {
		(file: java.io.File): OutputStream;
		(file: string): OutputStream;
		(file: java.nio.file.Path): OutputStream;
	}
	writeFloat: {
		(v: float): OutputStream;
	}
	writeInt: {
		(v: int): OutputStream;
	}
	writeLong: {
		(v: long): OutputStream;
	}
	writeShort: {
		(v: short): OutputStream;
	}
	writeToFile: {
		(bytes: number[], path: java.io.File, append: boolean): void;
		(bytes: number[], path: string, append: boolean): void;
		(bytes: number[], path: java.nio.file.Path, append: boolean): void;
		(content: string, path: java.io.File, append: boolean): void;
		(content: string, path: string, append: boolean): void;
		(content: string, path: java.nio.file.Path, append: boolean): void;
	}
}
export default OutputStream;