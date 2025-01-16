import {java} from '../types';

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
		(): java.util.List;
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
		(results: java.util.List): DBSearchResult;
	}
	setTotal: {
		(total: int): DBSearchResult;
	}
}
export default DBSearchResult;