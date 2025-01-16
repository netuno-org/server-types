import {} from '../types';

interface FTPConfig {
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
	getUsername: {
		(): string;
	}
	isDebug: {
		(): boolean;
	}
	isEnabled: {
		(): boolean;
	}
	isPassiveMode: {
		(): boolean;
	}
	isSSL: {
		(): boolean;
	}
	isSecureImplicit: {
		(): boolean;
	}
	isTLS: {
		(): boolean;
	}
	setConnectTimeout: {
		(conectionTimeout: int): FTPConfig;
	}
	setDebug: {
		(enabled: boolean): FTPConfig;
	}
	setEnabled: {
		(enabled: boolean): FTPConfig;
	}
	setHost: {
		(host: string): FTPConfig;
	}
	setPassiveMode: {
		(enabled: boolean): FTPConfig;
	}
	setPassword: {
		(password: string): FTPConfig;
	}
	setPort: {
		(port: int): FTPConfig;
	}
	setSSL: {
		(enabled: boolean): FTPConfig;
	}
	setSecureImplicit: {
		(enabled: boolean): FTPConfig;
	}
	setTLS: {
		(enabled: boolean): FTPConfig;
	}
	setUsername: {
		(username: string): FTPConfig;
	}
}
export default FTPConfig;