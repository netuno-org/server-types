import {java} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Val {
	cast: {
		(obj: java.lang.Object): Values;
	}
	fromJSON: {
		(text: string): Values;
	}
	global: {
		(): Values;
	}
	init: {
		(): Values;
		(obj: Values | DataSchema | java.lang.Iterable): Values;
		(obj: java.lang.Object): Values;
		(obj: Values | DataSchema | java.util.Map): Values;
	}
	is: {
		(obj: java.lang.Object): boolean;
	}
	list: {
		(): Values;
		(values: java.lang.Object): java.util.List;
		(values: Values): java.util.List;
	}
	map: {
		(): Values;
		(values: java.lang.Object): Values | DataSchema | java.util.Map;
		(values: Values): Values | DataSchema | java.util.Map;
	}
	persistent: {
		(): Values;
	}
	toJSON: {
		(values: java.util.List): string;
		(values: java.util.List, htmlEscape: boolean): string;
		(values: java.util.List, htmlEscape: boolean, indentFactor: int): string;
		(values: java.util.List, indentFactor: int): string;
		(values: Values): string;
		(values: Values, htmlEscape: boolean): string;
		(values: Values, htmlEscape: boolean, indentFactor: int): string;
		(values: Values, indentFactor: int): string;
	}
	toList: {
		(values: java.lang.Object): java.util.List;
		(values: Values): java.util.List;
	}
	toMap: {
		(values: java.lang.Object): Values | DataSchema | java.util.Map;
		(values: Values): Values | DataSchema | java.util.Map;
	}
}
declare const _val: Val;
export default _val;