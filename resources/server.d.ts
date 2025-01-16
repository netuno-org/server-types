import {} from '../types';

interface Server {
	getHost: {
		(): string;
	}
	getName: {
		(): string;
	}
	getPort: {
		(): int;
	}
	host: {
		(): string;
	}
	name: {
		(): string;
	}
	port: {
		(): int;
	}
	print: {
		(message: string): void;
	}
	println: {
		(message: string): void;
	}
	shutdown: {
		(): void;
		(intervalo: int): void;
	}
}
declare const _server: Server;
export default _server;