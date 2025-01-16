import {java} from '../types';

interface DBBatch {
	add: {
		(sql: string): DBBatch;
	}
	clear: {
		(): void;
	}
	close: {
		(): void;
	}
	execute: {
		(): number[];
	}
	put: {
		(params: java.lang.Object[]): DBBatch;
	}
}
export default DBBatch;