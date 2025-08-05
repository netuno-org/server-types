import {java, org} from '../types';
import Column from './Column';
import Values from './Values';

interface CheckExists {
	coalesce: {
		(params: java.lang.String[]): string;
	}
	column: {
		(table: string, column: string): boolean;
	}
	columnDataType: {
		(data: org.netuno.tritao.com.ComponentData): Column;
	}
	concatenation: {
		(param1: string, param2: string): string;
	}
	getBuilder: {
		(): org.netuno.tritao.db.Builder;
	}
	getDataValue: {
		(data: org.netuno.tritao.com.ComponentData): string;
		(data: org.netuno.tritao.com.ComponentData, value: string): string;
	}
	getExecutor: {
		(): org.netuno.tritao.db.DBExecutor;
	}
	getHili: {
		(): org.netuno.tritao.hili.Hili;
	}
	getKey: {
		(): string;
	}
	getManager: {
		(): org.netuno.tritao.db.manager.ManagerBase;
	}
	getProteu: {
		(): org.netuno.proteu.Proteu;
	}
	index: {
		(index: string): boolean;
		(tableName: string, columnName: string): boolean;
	}
	insertInto: {
		(tableName: string, data: Values): int;
	}
	isH2: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	isId: {
		(id: string): boolean;
	}
	isMSSQL: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	isMariaDB: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	isPostgreSQL: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	searchComparison: {
		(param: string): string;
	}
	sequence: {
		(): boolean;
		(name: string): boolean;
		(tableName: string, columnName: string): boolean;
	}
	table: {
		(table: string): boolean;
	}
	unaccent: {
		(input: string): string;
	}
}
export default CheckExists;