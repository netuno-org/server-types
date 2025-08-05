import {java, org} from '../types';
import Values from './Values';

interface Column {
	changeType: {
		(table: string): Column;
	}
	coalesce: {
		(params: java.lang.String[]): string;
	}
	columnDataType: {
		(data: org.netuno.tritao.com.ComponentData): Column;
	}
	concatenation: {
		(param1: string, param2: string): string;
	}
	drop: {
		(table: string, column: string): Column;
	}
	getBuilder: {
		(): org.netuno.tritao.db.Builder;
	}
	getDataValue: {
		(data: org.netuno.tritao.com.ComponentData): string;
		(data: org.netuno.tritao.com.ComponentData, value: string): string;
	}
	getDefault: {
		(): string;
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
	getMaxLength: {
		(): int;
	}
	getName: {
		(): string;
	}
	getPrecision: {
		(): int;
	}
	getProteu: {
		(): org.netuno.proteu.Proteu;
	}
	getScale: {
		(): int;
	}
	getType: {
		(): org.netuno.tritao.db.manager.Column$Type;
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
	isNotNull: {
		(): boolean;
	}
	isPostgreSQL: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	isPrimaryKey: {
		(): boolean;
	}
	rename: {
		(table: string, oldName: string, newName: string): Column;
	}
	renameIfExists: {
		(table: string, oldName: string, newName: string): Column;
	}
	searchComparison: {
		(param: string): string;
	}
	sequence: {
		(): boolean;
	}
	setDefault: {
		(): Column;
		(_default: boolean): Column;
		(_default: double): Column;
		(_default: float): Column;
		(_default: int): Column;
		(_default: string): Column;
		(_default: long): Column;
	}
	setDefaultAsCurrentDate: {
		(): Column;
	}
	setDefaultAsCurrentTime: {
		(): Column;
	}
	setDefaultAsCurrentTimeStamp: {
		(): Column;
	}
	setDefaultAsNewUUID: {
		(): Column;
	}
	setMaxLength: {
		(maxLength: int): Column;
	}
	setName: {
		(name: string): Column;
	}
	setNotNull: {
		(notNull: boolean): Column;
	}
	setPrecision: {
		(precision: int): Column;
	}
	setPrimaryKey: {
		(primaryKey: boolean): Column;
	}
	setScale: {
		(scale: int): Column;
	}
	setType: {
		(typeName: string): Column;
		(type: org.netuno.tritao.db.manager.Column$Type): Column;
	}
	toDefaultDefinition: {
		(): string;
	}
	toPrimaryKeyDefinition: {
		(): string;
	}
	toTypeDefinition: {
		(): string;
	}
	unaccent: {
		(input: string): string;
	}
}
export default Column;