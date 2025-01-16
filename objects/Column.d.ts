import {org} from '../types';

interface Column {
	changeType: {
		(table: string): Column;
	}
	drop: {
		(table: string, column: string): Column;
	}
	getDefault: {
		(): string;
	}
	getKey: {
		(): string;
	}
	getMaxLength: {
		(): int;
	}
	getName: {
		(): string;
	}
	getType: {
		(): org.netuno.tritao.db.manager.Column$Type;
	}
	isH2: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
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
	sequence: {
		(): boolean;
	}
	setDefault: {
		(): Column;
		(_default: boolean): Column;
		(_default: float): Column;
		(_default: int): Column;
		(_default: string): Column;
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
	setPrimaryKey: {
		(primaryKey: boolean): Column;
	}
	setType: {
		(typeName: string): Column;
		(type: org.netuno.tritao.db.manager.Column$Type): Column;
	}
	toDefaultDefinition: {
		(): string;
	}
	toTypeDefinition: {
		(): string;
	}
}
export default Column;