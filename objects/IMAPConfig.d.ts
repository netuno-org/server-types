import {} from '../types';

interface IMAPConfig {
	getAuthMechanisms: {
		(): string;
	}
	getAuthNTLMDomain: {
		(): string;
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
	getProtocol: {
		(): string;
	}
	getSocketFactoryClass: {
		(): string;
	}
	getSocketFactoryPort: {
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
	isQuitWait: {
		(): boolean;
	}
	isSSL: {
		(): boolean;
	}
	isSocketFactoryFallback: {
		(): boolean;
	}
	isTLS: {
		(): boolean;
	}
	setAuthMechanisms: {
		(authMechanisms: string): IMAPConfig;
	}
	setAuthNTLMDomain: {
		(authNTLMDomain: string): IMAPConfig;
	}
	setDebug: {
		(debug: boolean): IMAPConfig;
	}
	setEnabled: {
		(enabled: boolean): IMAPConfig;
	}
	setHost: {
		(host: string): IMAPConfig;
	}
	setPassword: {
		(password: string): IMAPConfig;
	}
	setPort: {
		(port: int): IMAPConfig;
	}
	setProtocol: {
		(protocol: string): IMAPConfig;
	}
	setQuitWait: {
		(quitWait: boolean): IMAPConfig;
	}
	setSSL: {
		(ssl: boolean): IMAPConfig;
	}
	setSocketFactoryClass: {
		(socketFactoryClass: string): IMAPConfig;
	}
	setSocketFactoryFallback: {
		(ssl: boolean): IMAPConfig;
	}
	setSocketFactoryPort: {
		(socketFactoryPort: int): IMAPConfig;
	}
	setTLS: {
		(ssl: boolean): IMAPConfig;
	}
	setUsername: {
		(username: string): IMAPConfig;
	}
}
export default IMAPConfig;