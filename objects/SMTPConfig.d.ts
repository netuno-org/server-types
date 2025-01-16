import {} from '../types';

interface SMTPConfig {
	getAuthMechanisms: {
		(): string;
	}
	getAuthNTLMDomain: {
		(): string;
	}
	getBcc: {
		(): string;
	}
	getCc: {
		(): string;
	}
	getFrom: {
		(): string;
	}
	getHTML: {
		(): string;
	}
	getHost: {
		(): string;
	}
	getMultipartSubtype: {
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
	getReplyTo: {
		(): string;
	}
	getSocketFactoryClass: {
		(): string;
	}
	getSocketFactoryPort: {
		(): int;
	}
	getSubject: {
		(): string;
	}
	getSubjectPrefix: {
		(): string;
	}
	getText: {
		(): string;
	}
	getTo: {
		(): string;
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
		(authMechanisms: string): SMTPConfig;
	}
	setAuthNTLMDomain: {
		(authNTLMDomain: string): SMTPConfig;
	}
	setBcc: {
		(bcc: string): SMTPConfig;
	}
	setCc: {
		(cc: string): SMTPConfig;
	}
	setDebug: {
		(debug: boolean): SMTPConfig;
	}
	setEnabled: {
		(enabled: boolean): SMTPConfig;
	}
	setFrom: {
		(from: string): SMTPConfig;
	}
	setHTML: {
		(html: string): SMTPConfig;
	}
	setHost: {
		(host: string): SMTPConfig;
	}
	setMultipartSubtype: {
		(multipartSubtype: string): SMTPConfig;
	}
	setPassword: {
		(password: string): SMTPConfig;
	}
	setPort: {
		(port: int): SMTPConfig;
	}
	setProtocol: {
		(protocol: string): SMTPConfig;
	}
	setQuitWait: {
		(quitWait: boolean): SMTPConfig;
	}
	setReplyTo: {
		(replyTo: string): SMTPConfig;
	}
	setSSL: {
		(ssl: boolean): SMTPConfig;
	}
	setSocketFactoryClass: {
		(socketFactoryClass: string): SMTPConfig;
	}
	setSocketFactoryFallback: {
		(ssl: boolean): SMTPConfig;
	}
	setSocketFactoryPort: {
		(socketFactoryPort: int): SMTPConfig;
	}
	setSubject: {
		(subject: string): SMTPConfig;
	}
	setSubjectPrefix: {
		(subjectPrefix: string): SMTPConfig;
	}
	setTLS: {
		(ssl: boolean): SMTPConfig;
	}
	setText: {
		(text: string): SMTPConfig;
	}
	setTo: {
		(to: string): SMTPConfig;
	}
	setUsername: {
		(username: string): SMTPConfig;
	}
}
export default SMTPConfig;