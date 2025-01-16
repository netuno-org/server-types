import {org} from '../types';

interface Index {
	create: {
		(table: string, column: string): Index;
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
	sequence: {
		(): boolean;
	}
}
export default Index;