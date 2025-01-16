import {} from '../types';
import Values from '../objects/Values';

interface CORS {
	add: {
		(config: Values): CORS;
	}
	all: {
		(): Values;
	}
	getAll: {
		(): Values;
	}
	isOriginEnabled: {
		(origin: string): boolean;
	}
	load: {
		(): CORS;
	}
	removeOrigin: {
		(origin: string): CORS;
	}
}
declare const _cors: CORS;
export default _cors;