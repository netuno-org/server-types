import {java} from '../types';
import DBBatch from '../objects/DBBatch';
import CheckExists from '../objects/CheckExists';
import Column from '../objects/Column';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';
import Index from '../objects/Index';
import DBSearchResult from '../objects/DBSearchResult';
import Sequence from '../objects/Sequence';
import Table from '../objects/Table';

interface DB {
	all: {
		(table: string): java.util.List;
	}
	batch: {
		(): DBBatch;
		(sqlCommand: string): DBBatch;
	}
	checkExists: {
		(): CheckExists;
	}
	column: {
		(): Column;
	}
	config: {
		(): Values;
	}
	date: {
		(): java.sql.Date;
		(time: long): java.sql.Date;
		(text: string): java.sql.Date;
		(instant: java.time.Instant): java.util.Date;
		(localDateTime: java.time.LocalDate): java.sql.Date;
	}
	delete: {
		(table: string, id: int): int;
		(table: string, uid: string): int;
		(table: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, data: Values): int;
	}
	deleteMany: {
		(table: string, dataItems: java.lang.Object[]): number[];
		(table: string, dataItems: java.util.List): number[];
		(table: string, dataItems: Values): number[];
	}
	escape: {
		(data: string): string;
	}
	escapeEnd: {
		(): string;
	}
	escapeStart: {
		(): string;
	}
	execute: {
		(sqlCommand: string): int;
		(sqlCommand: string, params: java.lang.Object[]): int;
		(sqlCommand: string, params: java.util.List): int;
		(sqlCommand: string, params: Values): int;
	}
	find: {
		(table: string, params: Values): java.util.List;
	}
	findFirst: {
		(table: string, params: Values): Values;
	}
	findQuery: {
		(table: string, params: Values): string;
	}
	get: {
		(table: string, id: int): Values;
		(table: string, uid: string): Values;
	}
	getConfig: {
		(): Values;
	}
	getKey: {
		(): string;
	}
	index: {
		(): Index;
	}
	init: {
		(key: string): DB;
	}
	insert: {
		(table: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, data: Values): int;
	}
	insertIfNotExists: {
		(table: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, data: Values): int;
	}
	insertMany: {
		(table: string, dataItems: java.lang.Object[]): number[];
		(table: string, dataItems: java.util.List): number[];
		(table: string, dataItems: Values): number[];
	}
	isH2: {
		(): boolean;
	}
	isH2DataBase: {
		(): boolean;
	}
	isMariaDB: {
		(): boolean;
	}
	isPG: {
		(): boolean;
	}
	isPostgreSQL: {
		(): boolean;
	}
	key: {
		(): string;
	}
	param: {
		(type: string): string;
	}
	query: {
		(query: string): java.util.List;
		(query: string, params: java.lang.Object[]): java.util.List;
		(query: string, params: java.util.List): java.util.List;
		(query: string, params: Values): java.util.List;
	}
	queryFirst: {
		(query: string): Values;
		(query: string, params: java.lang.Object[]): Values;
		(query: string, params: java.util.List): Values;
		(query: string, params: Values): Values;
	}
	sanitize: {
		(data: string): string;
	}
	sanitizeBoolean: {
		(data: string): string;
	}
	sanitizeFloat: {
		(data: string): string;
	}
	sanitizeInt: {
		(data: string): string;
	}
	sanitizeName: {
		(data: string): string;
	}
	sanitizePath: {
		(data: string): string;
	}
	save: {
		(table: string, uid: int, data: Values | DataSchema | java.util.Map): int;
		(table: string, uid: int, data: Values): int;
		(table: string, uid: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, uid: string, data: Values): int;
	}
	search: {
		(table: string, data: Values | DataSchema | java.util.Map): DBSearchResult;
		(table: string, data: Values | DataSchema | java.util.Map, wildcards: boolean): DBSearchResult;
		(table: string, data: Values): DBSearchResult;
		(table: string, data: Values, wildcards: boolean): DBSearchResult;
	}
	sequence: {
		(): Sequence;
	}
	store: {
		(table: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, data: Values): int;
	}
	table: {
		(): Table;
	}
	time: {
		(): java.sql.Time;
		(time: long): java.sql.Time;
		(text: string): java.sql.Time;
		(instant: java.time.Instant): java.util.Date;
		(localDateTime: java.time.LocalTime): java.sql.Time;
	}
	timestamp: {
		(): java.sql.Timestamp;
		(time: long): java.sql.Timestamp;
		(text: string): java.sql.Timestamp;
		(instant: java.time.Instant): java.sql.Timestamp;
		(localDateTime: java.time.LocalDateTime): java.sql.Timestamp;
	}
	toFloat: {
		(text: string): string;
	}
	toInt: {
		(text: string): string;
	}
	toIntSequence: {
		(text: string): string;
	}
	toRawName: {
		(text: string): string;
	}
	toRawPath: {
		(text: string): string;
	}
	toString: {
		(): string;
		(text: string): string;
	}
	update: {
		(table: string, id: int, data: Values | DataSchema | java.util.Map): int;
		(table: string, id: int, data: Values): int;
		(table: string, uid: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, uid: string, data: Values): int;
		(table: string, data: Values | DataSchema | java.util.Map): int;
		(table: string, data: Values): int;
	}
	updateMany: {
		(table: string, dataItems: java.lang.Object[]): number[];
		(table: string, dataItems: java.util.List): number[];
		(table: string, dataItems: Values): number[];
	}
}
declare const _db: DB;
export default _db;