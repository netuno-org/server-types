import {} from '../types';

interface Env {
	current: {
		(): string;
	}
	is: {
		(name: string): boolean;
	}
	isGraal: {
		(): boolean;
	}
}
declare const _env: Env;
export default _env;