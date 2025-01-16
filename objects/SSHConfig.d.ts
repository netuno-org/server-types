import {} from '../types';

interface SSHConfig {
	getConnectTimeout: {
		(): int;
	}
	getHost: {
		(): string;
	}
	getPassword: {
		(): string;
	}
	getPort: {
		(): int;
	}
	getPublicKey: {
		(): string;
	}
	getUsername: {
		(): string;
	}
	isCompression: {
		(): boolean;
	}
	isDebug: {
		(): boolean;
	}
	isEnabled: {
		(): boolean;
	}
	setCompression: {
		(compression: boolean): void;
	}
	setConnectTimeout: {
		(connectTimeout: int): SSHConfig;
	}
	setDebug: {
		(debug: boolean): SSHConfig;
	}
	setEnabled: {
		(enabled: boolean): SSHConfig;
	}
	setHost: {
		(host: string): SSHConfig;
	}
	setPassword: {
		(password: string): SSHConfig;
	}
	setPort: {
		(port: int): SSHConfig;
	}
	setPublicKey: {
		(publicKey: string): void;
	}
	setUsername: {
		(username: string): SSHConfig;
	}
}
export default SSHConfig;