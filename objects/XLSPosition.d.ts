import {} from '../types';

interface XLSPosition {
	col: {
		(): int;
	}
	getCol: {
		(): int;
	}
	getRow: {
		(): int;
	}
	row: {
		(): int;
	}
}
export default XLSPosition;