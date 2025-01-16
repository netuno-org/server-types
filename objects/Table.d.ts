import {org} from '../types';
import Column from './Column';

interface Table {
	create: {
		(name: string, columns: Column[]): Table;
	}
	drop: {
		(name: string): Table;
	}
	getKey: {
		(): string;
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
	newColumn: {
		(): Column;
	}
	rename: {
		(oldName: string, newName: string): Table;
	}
	renameIfExists: {
		(oldName: string, newName: string): Table;
	}
	sequence: {
		(): boolean;
	}
}
export default Table;