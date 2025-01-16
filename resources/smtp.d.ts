import {org} from '../types';
import File from '../objects/File';
import SMTPConfig from '../objects/SMTPConfig';
import Values from '../objects/Values';
import _storage from './storage';
import _imap from './imap';

interface SMTP {
	attachment: {
		(name: string, type: string, file: File): SMTP;
		(name: string, type: string, file: File, contentId: string): SMTP;
		(name: string, type: string, file: File, contentId: string, inline: boolean): SMTP;
		(name: string, type: string, file: typeof _storage): SMTP;
		(name: string, type: string, file: typeof _storage, contentId: string): SMTP;
		(name: string, type: string, file: typeof _storage, contentId: string, inline: boolean): SMTP;
	}
	bcc: {
		(): string;
		(bcc: string): SMTP;
	}
	cc: {
		(): string;
		(cc: string): SMTP;
	}
	config: {
		(): SMTPConfig;
		(config: Values): SMTPConfig;
		(config: SMTPConfig): SMTP;
	}
	emptyMail: {
		(): org.netuno.psamata.mail.Mail;
	}
	enabled: {
		(): boolean;
		(enabled: boolean): SMTP;
	}
	from: {
		(): string;
		(from: string): SMTP;
	}
	getBcc: {
		(): string;
	}
	getCc: {
		(): string;
	}
	getConfig: {
		(): SMTPConfig;
	}
	getFrom: {
		(): string;
	}
	getHTML: {
		(): string;
	}
	getMultipartSubtype: {
		(): string;
	}
	getReplyTo: {
		(): string;
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
	html: {
		(): string;
		(html: string): SMTP;
	}
	init: {
		(): SMTP;
		(configKey: string): SMTP;
		(config: SMTPConfig): SMTP;
	}
	isEnabled: {
		(): boolean;
	}
	mail: {
		(): org.netuno.psamata.mail.Mail;
	}
	multipartSubtype: {
		(): string;
		(html: string): SMTP;
	}
	replyTo: {
		(): string;
		(replyTo: string): SMTP;
	}
	send: {
		(): void;
		(mail: org.netuno.psamata.mail.Mail): void;
	}
	setBcc: {
		(bcc: string): SMTP;
	}
	setCc: {
		(cc: string): SMTP;
	}
	setConfig: {
		(config: SMTPConfig): SMTP;
	}
	setEnabled: {
		(enabled: boolean): SMTP;
	}
	setFrom: {
		(from: string): SMTP;
	}
	setHTML: {
		(html: string): SMTP;
	}
	setMultipartSubtype: {
		(multipartSubtype: string): SMTP;
	}
	setReplyTo: {
		(replyTo: string): SMTP;
	}
	setSubject: {
		(subject: string): SMTP;
	}
	setSubjectPrefix: {
		(subjectPrefix: string): SMTP;
	}
	setText: {
		(text: string): SMTP;
	}
	setTo: {
		(to: string): SMTP;
	}
	subject: {
		(): string;
		(subject: string): SMTP;
	}
	subjectPrefix: {
		(): string;
		(subjectPrefix: string): SMTP;
	}
	text: {
		(): string;
		(text: string): SMTP;
	}
	to: {
		(): string;
		(to: string): SMTP;
	}
	with: {
		(imap: typeof _imap): SMTP;
	}
}
declare const _smtp: SMTP;
export default _smtp;