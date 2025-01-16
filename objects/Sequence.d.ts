import {org} from '../types';

interface Sequence {
	commandNextValue: {
		(sequenceName: string): string;
	}
	create: {
		(name: string): Sequence;
		(name: string, startWith: int): Sequence;
	}
	drop: {
		(name: string): Sequence;
	}
	getCurrentValue: {
		(sequenceName: string): int;
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
	sequence: {
		(): boolean;
	}
	supported: {
		(): boolean;
	}
}
export default Sequence;