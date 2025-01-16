import {java, org} from '../types';
import IMAPConfig from '../objects/IMAPConfig';
import Values from '../objects/Values';
import _smtp from './smtp';

interface IMAP {
	close: {
		(): void;
	}
	config: {
		(): IMAPConfig;
		(config: Values): IMAPConfig;
		(config: IMAPConfig): IMAP;
	}
	connect: {
		(): IMAP;
	}
	deletedSize: {
		(): int;
	}
	enabled: {
		(): boolean;
		(enabled: boolean): IMAP;
	}
	getClient: {
		(): org.netuno.psamata.mail.IMAPClient;
	}
	getConfig: {
		(): IMAPConfig;
	}
	init: {
		(): IMAP;
		(configKey: string): IMAP;
		(config: IMAPConfig): IMAP;
	}
	isEnabled: {
		(): boolean;
	}
	mail: {
		(position: int): org.netuno.psamata.mail.Mail;
	}
	mails: {
		(): java.util.List;
		(start: int, start: int): java.util.List;
	}
	newSize: {
		(): int;
	}
	openFolder: {
		(name: string): IMAP;
		(name: string, write: boolean): IMAP;
	}
	setConfig: {
		(config: IMAPConfig): IMAP;
	}
	setEnabled: {
		(enabled: boolean): IMAP;
	}
	size: {
		(): int;
	}
	unreadSize: {
		(): int;
	}
	with: {
		(smtp: typeof _smtp): IMAP;
	}
}
declare const _imap: IMAP;
export default _imap;