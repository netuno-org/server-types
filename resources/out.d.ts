import {java} from '../types';
import InputStream from '../objects/InputStream';
import File from '../objects/File';
import OutputStream from '../objects/OutputStream';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';
import _storage from './storage';

interface Out {
	close: {
		(): Out;
	}
	closed: {
		(): boolean;
	}
	copy: {
		(input: InputStream): Out;
		(input: InputStream, skip: long): Out;
		(input: InputStream, skip: long, size: long): Out;
		(file: File): Out;
		(file: File, skip: long): Out;
		(file: File, skip: long, size: long): Out;
		(storage: typeof _storage): Out;
		(storage: typeof _storage, skip: long): Out;
		(storage: typeof _storage, skip: long, size: long): Out;
	}
	flush: {
		(): void;
	}
	getJSONHTMLEscape: {
		(): boolean;
	}
	getJSONIdentFactor: {
		(): int;
	}
	getMirrors: {
		(): OutputStream[];
	}
	init: {
		(): Out;
	}
	isClosed: {
		(): boolean;
	}
	isStarted: {
		(): boolean;
	}
	json: {
		(Values: java.lang.Object): Out;
		(String: string): Out;
		(Values: Values[]): Out;
		(Values: Values | DataSchema | java.util.Map): Out;
		(Values: Values): Out;
	}
	jsonHTMLEscape: {
		(): boolean;
		(htmlEscape: boolean): Out;
	}
	jsonIdentFactor: {
		(): int;
		(int: int): Out;
	}
	mirrors: {
		(): OutputStream[];
	}
	output: {
		(): OutputStream;
	}
	print: {
		(bool: boolean): Out;
		(number: byte): Out;
		(character: char): Out;
		(bool: double): Out;
		(bool: float): Out;
		(bool: int): Out;
		(obj: java.lang.Object): Out;
		(text: string): Out;
		(bool: long): Out;
		(bool: short): Out;
	}
	printf: {
		(format: string, objects: java.lang.Object[]): Out;
	}
	println: {
		(): Out;
		(bool: boolean): Out;
		(number: byte): Out;
		(character: char): Out;
		(bool: double): Out;
		(bool: float): Out;
		(bool: int): Out;
		(obj: java.lang.Object): Out;
		(text: string): Out;
		(bool: long): Out;
		(bool: short): Out;
	}
	setJSONHTMLEscape: {
		(htmlEscape: boolean): Out;
	}
	setJSONIdentFactor: {
		(jsonIdentFactor: int): Out;
	}
	start: {
		(): void;
	}
	started: {
		(): boolean;
	}
	write: {
		(bytes: byte[]): Out;
		(bytes: byte[], off: int, len: int): Out;
		(int: int): Out;
	}
	writeBoolean: {
		(boolean: boolean): Out;
	}
	writeByte: {
		(int: int): Out;
	}
	writeChar: {
		(char: char): Out;
	}
	writeDouble: {
		(double: double): Out;
	}
	writeFloat: {
		(float: float): Out;
	}
	writeInt: {
		(int: int): Out;
	}
	writeLong: {
		(long: long): Out;
	}
	writeShort: {
		(boolean: short): Out;
	}
}
declare const _out: Out;
export default _out;