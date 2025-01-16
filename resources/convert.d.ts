import {java} from '../types';
import File from '../objects/File';

interface Convert {
	arrayToList: {
		(array: java.lang.Object): java.util.List;
	}
	bytesFromText: {
		(text: string): number[];
		(text: string, charset: string): number[];
	}
	fromBase64: {
		(content: number[]): string;
		(content: string): string;
	}
	fromBase64AsBytes: {
		(content: number[]): number[];
		(content: string): number[];
	}
	fromHTML: {
		(content: string): string;
	}
	fromJSON: {
		(content: string): string;
	}
	textFromBytes: {
		(bytes: number[]): string;
		(bytes: number[], charset: string): string;
	}
	toBase64: {
		(content: number[]): string;
		(content: string): string;
	}
	toBase64AsBytes: {
		(content: number[]): number[];
		(content: string): number[];
	}
	toByte: {
		(value: int): byte;
		(value: long): byte;
		(value: short): byte;
	}
	toDouble: {
		(value: byte): double;
		(value: float): double;
		(value: int): double;
		(value: long): double;
		(value: short): double;
	}
	toError: {
		(object: java.lang.Object): java.lang.Error;
	}
	toException: {
		(object: java.lang.Object): java.lang.Exception;
	}
	toFile: {
		(fileName: string, contentType: string, bytes: number[]): File;
	}
	toFloat: {
		(value: byte): float;
		(value: double): float;
		(value: int): float;
		(value: long): float;
		(value: short): float;
	}
	toHEX: {
		(bytes: number[]): string;
	}
	toHTML: {
		(content: string): string;
	}
	toHex: {
		(bytes: number[]): string;
	}
	toInt: {
		(value: byte): int;
		(value: double): int;
		(value: float): int;
		(value: long): int;
		(value: short): int;
	}
	toJSON: {
		(content: string): string;
	}
	toLong: {
		(value: byte): long;
		(value: double): long;
		(value: float): long;
		(value: int): long;
		(value: short): long;
	}
	toObject: {
		(object: java.lang.Object): java.lang.Object;
	}
	toShort: {
		(value: byte): short;
		(value: int): short;
		(value: long): short;
	}
	toThrowable: {
		(object: java.lang.Object): java.lang.Throwable;
	}
	toUUID: {
		(value: string): java.util.UUID;
	}
}
declare const _convert: Convert;
export default _convert;