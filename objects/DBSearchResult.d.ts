import {} from '../types';
import Values from './Values';

interface DBSearchResult {
	getFullTotal: {
		(): int;
	}
	getLength: {
		(): int;
	}
	getOffset: {
		(): int;
	}
	getResults: {
		(): Values[];
	}
	getTotal: {
		(): int;
	}
	setFullTotal: {
		(fullTotal: int): DBSearchResult;
	}
	setLength: {
		(length: int): DBSearchResult;
	}
	setOffset: {
		(offset: int): DBSearchResult;
	}
	setResults: {
		(results: Values[]): DBSearchResult;
	}
	setTotal: {
		(total: int): DBSearchResult;
	}
}
export default DBSearchResult;