import {java} from '../types';
import InputStream from '../objects/InputStream';
import File from '../objects/File';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';
import OutputStream from '../objects/OutputStream';
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
		(): java.util.List;
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
		(json: java.lang.Object): Out;
		(json: string): Out;
		(json: java.util.List): Out;
		(json: Values | DataSchema | java.util.Map): Out;
		(json: Values): Out;
	}
	jsonHTMLEscape: {
		(): boolean;
		(htmlEscape: boolean): Out;
	}
	jsonIdentFactor: {
		(): int;
		(jsonIdentFactor: int): Out;
	}
	mirrors: {
		(): java.util.List;
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
		(bytes: number[]): Out;
		(bytes: number[], off: int, len: int): Out;
		(b: int): Out;
	}
	writeBoolean: {
		(b: boolean): Out;
	}
	writeByte: {
		(b: int): Out;
	}
	writeChar: {
		(c: char): Out;
	}
	writeDouble: {
		(d: double): Out;
	}
	writeFloat: {
		(f: float): Out;
	}
	writeInt: {
		(i: int): Out;
	}
	writeLong: {
		(l: long): Out;
	}
	writeShort: {
		(s: short): Out;
	}
}
declare const _out: Out;
export default _out;