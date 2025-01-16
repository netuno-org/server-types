import {org} from '../types';

interface CheckExists {
	column: {
		(table: string, column: string): boolean;
	}
	getKey: {
		(): string;
	}
	index: {
		(index: string): boolean;
		(tableName: string, columnName: string): boolean;
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
	isPostgreSQL: {
		(): boolean;
		(builder: org.netuno.tritao.db.Builder): boolean;
	}
	sequence: {
		(): boolean;
		(name: string): boolean;
		(tableName: string, columnName: string): boolean;
	}
	table: {
		(table: string): boolean;
	}
}
export default CheckExists;