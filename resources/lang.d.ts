import {java} from '../types';

interface Lang {
	code: {
		(): string;
	}
	get: {
		(key: string): string;
		(key: string, formats: java.lang.Object[]): string;
	}
	getCode: {
		(): string;
	}
	getLocale: {
		(): java.util.Locale;
	}
	getName: {
		(): string;
	}
	getOrDefault: {
		(key: string, text: string): string;
	}
	init: {
		(): Lang;
		(localeName: string): Lang;
		(localeName: string, asDefault: boolean): Lang;
	}
	locale: {
		(): java.util.Locale;
	}
	name: {
		(): string;
	}
}
declare const _lang: Lang;
export default _lang;