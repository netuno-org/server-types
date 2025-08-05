import {java, org} from '../types';
import Column from './Column';
import Values from './Values';

interface Sequence {
	coalesce: {
		(params: java.lang.String[]): string;
	}
	columnDataType: {
		(data: org.netuno.tritao.com.ComponentData): Column;
	}
	commandNextValue: {
		(sequenceName: string): string;
	}
	concatenation: {
		(param1: string, param2: string): string;
	}
	create: {
		(name: string): Sequence;
		(name: string, startWith: int): Sequence;
	}
	drop: {
		(name: string): Sequence;
	}
	getBuilder: {
		(): org.netuno.tritao.db.Builder;
	}
	getCurrentValue: {
		(sequenceName: string): int;
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
	rename: {
		(oldName: string, newName: string): Sequence;
	}
	renameIfExists: {
		(oldName: string, newName: string): Sequence;
	}
	restart: {
		(sequenceName: string, nextValue: int): Sequence;
		(sequenceName: string, tableName: string, column: string): Sequence;
	}
	searchComparison: {
		(param: string): string;
	}
	sequence: {
		(): boolean;
	}
	supported: {
		(): boolean;
	}
	unaccent: {
		(input: string): string;
	}
}
export default Sequence;