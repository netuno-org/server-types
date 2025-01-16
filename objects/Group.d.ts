import {} from '../types';

interface Group {
	getColumn: {
		(): string;
	}
	setColumn: {
		(column: string): Group;
	}
}
export default Group;