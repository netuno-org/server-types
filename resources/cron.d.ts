import {} from '../types';
import Values from '../objects/Values';

interface Cron {
	checkExists: {
		(key: string): boolean;
	}
	config: {
		(): void;
	}
	delete: {
		(key: string): boolean;
	}
	interrupt: {
		(key: string): boolean;
	}
	pause: {
		(key: string): boolean;
	}
	remove: {
		(key: string): boolean;
	}
	resume: {
		(key: string): boolean;
	}
	schedule: {
		(key: string, config: string, url: string): Cron;
		(key: string, config: string, url: string, params: Values): Cron;
	}
	schedules: {
		(): Values;
	}
}
declare const _cron: Cron;
export default _cron;