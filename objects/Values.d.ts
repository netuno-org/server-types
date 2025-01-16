import {java, org} from '../types';
import File from './File';
import Values from './Values';
import DataSchema from './DataSchema';
import InputStream from './InputStream';
import OutputStream from './OutputStream';

interface Values {
	add: {
		(index: int, element: java.lang.Object): Values;
		(o: java.lang.Object): Values;
	}
	addAll: {
		(index: int, c: java.util.Collection): boolean;
		(c: java.util.Collection): boolean;
	}
	as: {
		(o: java.lang.Object): Values;
		(o: java.lang.Object, oDefault: java.lang.Object): Values;
	}
	asBoolean: {
		(index: int): boolean;
		(index: int, defaultValue: boolean): boolean;
		(key: string): boolean;
		(key: string, defaultValue: boolean): boolean;
	}
	asByte: {
		(index: int): byte;
		(index: int, defaultValue: byte): byte;
		(key: string, defaultValue: byte): byte;
	}
	asCalendar: {
		(key: string): java.util.Calendar;
		(key: string, defaultValue: java.util.Calendar): java.util.Calendar;
	}
	asDate: {
		(key: string): java.util.Date;
		(key: string, defaultValue: java.util.Date): java.util.Date;
	}
	asDouble: {
		(index: int): double;
		(index: int, defaultValue: double): double;
		(key: string): double;
		(key: string, defaultValue: double): double;
	}
	asFile: {
		(key: string): File;
	}
	asFloat: {
		(index: int): float;
		(index: int, defaultValue: float): float;
		(key: string): float;
		(key: string, defaultValue: float): float;
	}
	asHTMLDecode: {
		(key: string): string;
	}
	asHTMLEncode: {
		(key: string): string;
	}
	asInstant: {
		(key: string): java.time.Instant;
		(key: string, defaultValue: java.time.Instant): java.time.Instant;
	}
	asInt: {
		(index: int): int;
		(index: int, defaultValue: int): int;
		(key: string, defaultValue: short): int;
	}
	asList: {
		(index: int): java.util.List;
		(index: int, claz: java.lang.Class): java.util.List;
		(index: int, defaultValue: java.lang.Object): java.util.List;
		(index: int, defaultValue: java.lang.Object, claz: java.lang.Class): java.util.List;
		(key: string): java.util.List;
		(key: string, claz: java.lang.Class): java.util.List;
		(key: string, defaultValue: java.lang.Object): java.util.List;
		(key: string, defaultValue: java.lang.Object, claz: java.lang.Class): java.util.List;
	}
	asLocalDate: {
		(key: string): java.time.LocalDate;
		(key: string, defaultValue: java.time.LocalDate): java.time.LocalDate;
	}
	asLocalDateTime: {
		(key: string): java.time.LocalDateTime;
		(key: string, defaultValue: java.time.LocalDateTime): java.time.LocalDateTime;
	}
	asLocalTime: {
		(key: string): java.time.LocalTime;
		(key: string, defaultValue: java.time.LocalTime): java.time.LocalTime;
	}
	asLong: {
		(index: int): long;
		(index: int, defaultValue: long): long;
		(key: string): long;
		(key: string, defaultValue: long): long;
	}
	asMap: {
		(index: int): Values | DataSchema | java.util.Map;
		(index: int, defaultValue: java.lang.Object): Values | DataSchema | java.util.Map;
		(key: string): Values | DataSchema | java.util.Map;
		(key: string, defaultValue: java.lang.Object): Values | DataSchema | java.util.Map;
	}
	asSQLDate: {
		(key: string): java.sql.Date;
		(key: string, defaultValue: java.sql.Date): java.sql.Date;
	}
	asSQLTime: {
		(key: string): java.sql.Time;
		(key: string, defaultValue: java.sql.Time): java.sql.Time;
	}
	asSQLTimestamp: {
		(key: string): java.sql.Timestamp;
		(key: string, defaultValue: java.sql.Timestamp): java.sql.Timestamp;
	}
	asShort: {
		(index: int): short;
		(index: int, defaultValue: short): short;
		(key: string): short;
		(key: string, defaultValue: short): short;
	}
	asString: {
		(index: int): string;
		(index: int, defaultValue: string): string;
		(key: string): string;
		(key: string, defaultValue: string): string;
		(key: string, defaultValue: string, charsetName: string): string;
	}
	asUID: {
		(key: string): java.util.UUID;
		(key: string, defaultValue: string): java.util.UUID;
		(key: string, defaultValue: java.util.UUID): java.util.UUID;
	}
	asUUID: {
		(key: string): java.util.UUID;
		(key: string, defaultValue: string): java.util.UUID;
		(key: string, defaultValue: java.util.UUID): java.util.UUID;
	}
	asValues: {
		(index: int): Values;
		(index: int, defaultValue: java.lang.Object): Values;
		(key: string): Values;
		(key: string, defaultValue: java.lang.Object): Values;
	}
	clear: {
		(): void;
	}
	cloneJSON: {
		(): Values;
	}
	compute: {
		(arg0: java.lang.Object, arg1: java.util.function.BiFunction): java.lang.Object;
	}
	computeIfAbsent: {
		(arg0: java.lang.Object, arg1: java.util.function.Function): java.lang.Object;
	}
	computeIfPresent: {
		(arg0: java.lang.Object, arg1: java.util.function.BiFunction): java.lang.Object;
	}
	contains: {
		(o: java.lang.Object): boolean;
		(key: string, value: java.lang.Object): boolean;
	}
	containsAll: {
		(c: java.util.Collection): boolean;
	}
	containsKey: {
		(key: java.lang.Object): boolean;
	}
	containsValue: {
		(value: java.lang.Object): boolean;
	}
	ensureJail: {
		(jailPath: string): void;
	}
	entrySet: {
		(): java.util.Set;
	}
	filter: {
		(p: java.util.function.Predicate): Values;
		(func: org.graalvm.polyglot.Value): Values;
	}
	find: {
		(key: string, value: java.lang.Object): Values;
		(p: java.util.function.Predicate): java.lang.Object;
		(func: org.graalvm.polyglot.Value): java.lang.Object;
		(filter: Values): Values;
	}
	forEach: {
		(action: java.util.function.BiConsumer): void;
		(action: java.util.function.Consumer): void;
		(func: org.graalvm.polyglot.Value): void;
	}
	forceList: {
		(): Values;
	}
	forceMap: {
		(): Values;
	}
	fromJSON: {
		(content: string): Values;
		(content: org.netuno.psamata.net.Remote$Response): Values;
	}
	get: {
		(key: int): java.lang.Object;
		(key: java.lang.Object): java.lang.Object;
		(key: string): java.lang.Object;
		(key: string, type: java.lang.Class): java.lang.Object;
	}
	getBoolean: {
		(index: int): boolean;
		(index: int, defaultValue: boolean): boolean;
		(key: string): boolean;
		(key: string, defaultValue: boolean): boolean;
	}
	getByte: {
		(index: int): byte;
		(index: int, defaultValue: byte): byte;
		(key: string): byte;
		(key: string, defaultValue: byte): byte;
	}
	getCalendar: {
		(key: string): java.util.Calendar;
		(key: string, defaultValue: java.util.Calendar): java.util.Calendar;
	}
	getDate: {
		(key: string): java.util.Date;
		(key: string, defaultValue: java.util.Date): java.util.Date;
	}
	getDouble: {
		(index: int): double;
		(index: int, defaultValue: double): double;
		(key: string): double;
		(key: string, defaultValue: double): double;
	}
	getFile: {
		(key: string): File;
	}
	getFloat: {
		(index: int): float;
		(index: int, defaultValue: float): float;
		(key: string): float;
		(key: string, defaultValue: float): float;
	}
	getForceList: {
		(): boolean;
	}
	getForceMap: {
		(): boolean;
	}
	getHTMLDecode: {
		(key: string): string;
	}
	getHTMLEncode: {
		(key: string): string;
	}
	getInstant: {
		(key: string): java.time.Instant;
		(key: string, defaultValue: java.time.Instant): java.time.Instant;
	}
	getInt: {
		(index: int): int;
		(index: int, defaultValue: int): int;
		(key: string): int;
		(key: string, defaultValue: int): int;
	}
	getKeys: {
		(): java.util.Set;
	}
	getList: {
		(index: int): java.util.List;
		(index: int, claz: java.lang.Class): java.util.List;
		(index: int, defaultValue: java.lang.Object): java.util.List;
		(index: int, defaultValue: java.lang.Object, claz: java.lang.Class): java.util.List;
		(key: string): java.util.List;
		(key: string, claz: java.lang.Class): java.util.List;
		(key: string, defaultValue: java.lang.Object): java.util.List;
		(key: string, defaultValue: java.lang.Object, claz: java.lang.Class): java.util.List;
	}
	getLocalDate: {
		(key: string): java.time.LocalDate;
		(key: string, defaultValue: java.time.LocalDate): java.time.LocalDate;
	}
	getLocalDateTime: {
		(key: string): java.time.LocalDateTime;
		(key: string, defaultValue: java.time.LocalDateTime): java.time.LocalDateTime;
	}
	getLocalTime: {
		(key: string): java.time.LocalTime;
		(key: string, defaultValue: java.time.LocalTime): java.time.LocalTime;
	}
	getLong: {
		(index: int): long;
		(index: int, defaultValue: long): long;
		(key: string): long;
		(key: string, defaultValue: long): long;
	}
	getMap: {
		(index: int): Values | DataSchema | java.util.Map;
		(index: int, defaultValue: java.lang.Object): Values | DataSchema | java.util.Map;
		(key: string): Values | DataSchema | java.util.Map;
		(key: string, defaultValue: java.lang.Object): Values | DataSchema | java.util.Map;
	}
	getOrDefault: {
		(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object;
	}
	getSQLDate: {
		(key: string): java.sql.Date;
		(key: string, defaultValue: java.sql.Date): java.sql.Date;
	}
	getSQLTime: {
		(key: string): java.sql.Time;
		(key: string, defaultValue: java.sql.Time): java.sql.Time;
	}
	getSQLTimestamp: {
		(key: string): java.sql.Timestamp;
		(key: string, defaultValue: java.sql.Timestamp): java.sql.Timestamp;
	}
	getShort: {
		(index: int): short;
		(index: int, defaultValue: short): short;
		(key: string): short;
		(key: string, defaultValue: short): short;
	}
	getSize: {
		(): int;
	}
	getString: {
		(index: int): string;
		(index: int, defaultValue: string): string;
		(key: string): string;
		(key: string, defaultValue: string): string;
		(key: string, defaultValue: string, charsetName: string): string;
	}
	getUID: {
		(key: string): java.util.UUID;
		(key: string, defaultValue: string): java.util.UUID;
		(key: string, defaultValue: java.util.UUID): java.util.UUID;
	}
	getURLCharacterEncoding: {
		(): string;
	}
	getUUID: {
		(key: string): java.util.UUID;
		(key: string, defaultValue: string): java.util.UUID;
		(key: string, defaultValue: java.util.UUID): java.util.UUID;
	}
	getValues: {
		(): java.util.Collection;
		(index: int): Values;
		(index: int, defaultValue: java.lang.Object): Values;
		(key: string): Values;
		(key: string, defaultValue: java.lang.Object): Values;
	}
	has: {
		(o: java.lang.Object): boolean;
		(key: string): boolean;
		(key: string, value: java.lang.Object): boolean;
	}
	hasKey: {
		(key: string): boolean;
	}
	hasValue: {
		(value: java.lang.Object): boolean;
	}
	indexOf: {
		(o: java.lang.Object): int;
	}
	is: {
		(o: java.lang.Object): boolean;
	}
	isEmpty: {
		(): boolean;
	}
	isJail: {
		(): boolean;
	}
	isList: {
		(): boolean;
		(o: java.lang.Object): boolean;
	}
	isLockedAsReadOnly: {
		(): boolean;
	}
	isMap: {
		(): boolean;
		(o: java.lang.Object): boolean;
	}
	isMergeable: {
		(object: java.lang.Object): boolean;
	}
	iterator: {
		(): java.util.Iterator;
	}
	join: {
		(splitter: string): string;
	}
	keySet: {
		(): java.util.Set;
	}
	keys: {
		(): java.util.Set;
	}
	keysSorted: {
		(): java.util.Set;
	}
	keysToString: {
		(splitter: string): string;
		(map: Values | DataSchema | java.util.Map, splitter: string): string;
	}
	lastIndexOf: {
		(o: java.lang.Object): int;
	}
	length: {
		(): int;
	}
	list: {
		(): java.util.List;
		(cls: java.lang.Class): java.util.List;
	}
	listIterator: {
		(): java.util.ListIterator;
		(index: int): java.util.ListIterator;
	}
	listOfValues: {
		(): java.util.List;
	}
	loadJSON: {
		(input: InputStream): void;
		(input: java.io.Reader): void;
	}
	loadProperties: {
		(input: InputStream): void;
		(input: java.io.Reader): void;
		(properties: java.util.Properties): void;
	}
	loadPropertiesFromString: {
		(data: string): void;
	}
	lockAsReadOnly: {
		(): Values;
	}
	map: {
		(): Values | DataSchema | java.util.Map;
	}
	merge: {
		(object: java.lang.Object): Values;
		(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction): java.lang.Object;
	}
	newList: {
		(): Values;
	}
	newMap: {
		(): Values;
	}
	of: {
		(array: java.lang.Object[]): Values;
		(o: java.lang.Object): java.lang.Object;
		(list: java.util.List): Values;
		(map: Values | DataSchema | java.util.Map): Values;
	}
	ofList: {
		(o: java.lang.Object): Values;
	}
	ofMap: {
		(o: java.lang.Object): Values;
	}
	push: {
		(o: java.lang.Object): Values;
	}
	put: {
		(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
		(key: string, value: java.lang.Object): java.lang.Object;
	}
	putAll: {
		(m: Values | DataSchema | java.util.Map): void;
	}
	putIfAbsent: {
		(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object;
	}
	remove: {
		(i: int): java.lang.Object;
		(o: java.lang.Object): java.lang.Object;
		(arg0: java.lang.Object, arg1: java.lang.Object): boolean;
	}
	removeAll: {
		(): void;
		(c: java.util.Collection): boolean;
	}
	replace: {
		(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object;
		(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean;
	}
	replaceAll: {
		(arg0: java.util.function.BiFunction): void;
		(operator: java.util.function.UnaryOperator): void;
		(func: org.graalvm.polyglot.Value): void;
	}
	retainAll: {
		(c: java.util.Collection): boolean;
	}
	safeString: {
		(object: java.lang.Object): string;
		(object: java.lang.Object, defaultValue: string): string;
	}
	saveJSON: {
		(output: OutputStream): void;
		(output: java.io.Writer): void;
	}
	saveProperties: {
		(output: OutputStream): void;
		(output: java.io.Writer): void;
	}
	search: {
		(content: string): string;
		(content: string, ignoreCase: boolean): string;
		(content: string, splitter: string): string;
		(content: string, splitter: string, ignoreCase: boolean): string;
		(map: Values | DataSchema | java.util.Map, content: string, splitter: string, ignoreCase: boolean): string;
	}
	set: {
		(index: int, element: java.lang.Object): Values;
		(key: string, value: java.lang.Object): Values;
	}
	setForceList: {
		(forceList: boolean): Values;
	}
	setForceMap: {
		(forceMap: boolean): Values;
	}
	setIfFalse: {
		(key: string, value: boolean): Values;
	}
	setIfGreaterThanZero: {
		(key: string, value: double): Values;
		(key: string, value: float): Values;
		(key: string, value: int): Values;
		(key: string, value: long): Values;
		(key: string, value: short): Values;
	}
	setIfLowerThanZero: {
		(key: string, value: double): Values;
		(key: string, value: float): Values;
		(key: string, value: int): Values;
		(key: string, value: long): Values;
		(key: string, value: short): Values;
	}
	setIfNotEmpty: {
		(key: string, value: string): Values;
	}
	setIfNotZero: {
		(key: string, value: double): Values;
		(key: string, value: float): Values;
		(key: string, value: int): Values;
		(key: string, value: long): Values;
		(key: string, value: short): Values;
	}
	setIfTrue: {
		(key: string, value: boolean): Values;
	}
	setNull: {
		(key: string): Values;
	}
	setURLCharacterEncoding: {
		(characterEncoding: string): void;
	}
	size: {
		(): int;
	}
	sizeOfList: {
		(): int;
	}
	sizeOfMap: {
		(): int;
	}
	sort: {
		(c: java.util.Comparator): void;
		(func: org.graalvm.polyglot.Value): void;
	}
	spliterator: {
		(): java.util.Spliterator;
	}
	subList: {
		(fromIndex: int, toIndex: int): java.util.List;
	}
	toArray: {
		(): java.lang.Object[];
		(a: java.lang.Object[]): java.lang.Object[];
	}
	toByteArray: {
		(): number[];
	}
	toDoubleArray: {
		(): number[];
	}
	toFloatArray: {
		(): number[];
	}
	toFormMap: {
		(): Values;
		(key: string, data: Values): Values;
		(data: Values): Values;
	}
	toIntArray: {
		(): number[];
	}
	toJSON: {
		(): string;
		(htmlEscape: boolean): string;
		(htmlEscape: boolean, indentFactor: int): string;
		(indentFactor: int): string;
		(values: java.util.List): string;
		(values: java.util.List, htmlEscape: boolean): string;
		(values: java.util.List, htmlEscape: boolean, indentFactor: int): string;
		(values: java.util.List, indentFactor: int): string;
	}
	toJSONObject: {
		(object: java.lang.Object, htmlEscape: boolean): java.lang.Object;
	}
	toJSONString: {
		(object: java.lang.Object, htmlEscape: boolean, indentFactor: int): string;
	}
	toList: {
		(): java.util.List;
		(cls: java.lang.Class): java.util.List;
	}
	toLongArray: {
		(): number[];
	}
	toMap: {
		(): Values | DataSchema | java.util.Map;
	}
	toProperties: {
		(): string;
	}
	toShortArray: {
		(): number[];
	}
	toStringArray: {
		(): java.lang.String[];
	}
	unset: {
		(key: string): java.lang.Object;
	}
	unsetAll: {
		(): void;
	}
	values: {
		(): java.util.Collection;
	}
	valuesToString: {
		(splitter: string): string;
		(splitter: string, excludes: java.lang.String[]): string;
		(splitter: string, excludes: java.lang.String[], config: Values): string;
		(splitter: string, config: Values): string;
		(map: Values | DataSchema | java.util.Map, splitter: string): string;
		(map: Values | DataSchema | java.util.Map, splitter: string, excludes: java.lang.String[]): string;
		(map: Values | DataSchema | java.util.Map, splitter: string, excludes: java.lang.String[], config: Values): string;
		(map: Values | DataSchema | java.util.Map, splitter: string, config: Values): string;
	}
}
export default Values;