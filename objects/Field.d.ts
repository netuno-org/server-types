import {} from '../types';

interface Field {
	getAlias: {
		(): string;
	}
	getColumn: {
		(): string;
	}
	setAlias: {
		(column: string): Field;
	}
	setColumn: {
		(column: string): Field;
	}
}
export default Field;