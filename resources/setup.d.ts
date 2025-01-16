import {org} from '../types';

interface Setup {
	autoCreateSchema: {
		(): boolean;
	}
	createSchema: {
		(): boolean;
	}
	getSecret: {
		(): string;
	}
	isAutoCreateSchema: {
		(): boolean;
	}
	isRunning: {
		(): boolean;
	}
	run: {
		(): org.netuno.tritao.resource.Setup$RunResult;
	}
	running: {
		(): boolean;
	}
	secret: {
		(): string;
	}
}
declare const _setup: Setup;
export default _setup;