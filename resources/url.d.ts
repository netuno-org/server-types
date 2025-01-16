import {java, org} from '../types';

interface URL {
	contains: {
		(string: string): boolean;
	}
	download: {
		(): org.netuno.proteu.Download;
	}
	endsWith: {
		(string: string): boolean;
	}
	equalsIgnoreCase: {
		(string: string): boolean;
	}
	indexOf: {
		(string: string): int;
	}
	isDownloadable: {
		(): boolean;
	}
	isEmpty: {
		(): boolean;
	}
	lastIndexOf: {
		(string: string): int;
	}
	replace: {
		(_old: java.lang.CharSequence, _new: java.lang.CharSequence): string;
	}
	replaceAll: {
		(_old: string, _new: string): string;
	}
	request: {
		(): string;
	}
	scheme: {
		(): string;
	}
	split: {
		(regex: string): java.lang.String[];
	}
	startsWith: {
		(string: string): boolean;
	}
	substring: {
		(start: int, end: int): string;
	}
	to: {
		(url: string): URL;
	}
	uri: {
		(): string;
	}
	url: {
		(): string;
	}
}
declare const _url: URL;
export default _url;