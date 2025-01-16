import {java, org} from '../types';
import FTPConfig from '../objects/FTPConfig';
import Values from '../objects/Values';
import OutputStream from '../objects/OutputStream';
import File from '../objects/File';
import InputStream from '../objects/InputStream';
import _storage from './storage';

interface FTP {
	abort: {
		(): FTP;
	}
	changeToParentDirectory: {
		(): FTP;
	}
	changeWorkingDirectory: {
		(remotePath: string): FTP;
	}
	close: {
		(): void;
	}
	config: {
		(): FTPConfig;
		(config: Values): FTPConfig;
		(config: FTPConfig): FTP;
	}
	connect: {
		(): FTP;
	}
	createDirectory: {
		(remotePath: string): FTP;
	}
	deleteDirectory: {
		(remotePath: string): FTP;
	}
	deleteFile: {
		(remotePath: string): FTP;
	}
	disconnect: {
		(): FTP;
	}
	download: {
		(remotePath: string, destination: OutputStream): FTP;
		(remotePath: string, destination: File): FTP;
		(remotePath: string, destination: typeof _storage): FTP;
	}
	downloadBytes: {
		(remotePath: string): number[];
	}
	downloadText: {
		(remotePath: string): string;
		(remotePath: string, charset: string): string;
	}
	enabled: {
		(): boolean;
		(enabled: boolean): FTP;
	}
	getClient: {
		(): org.netuno.psamata.ftp.FTPClient;
	}
	getConfig: {
		(): FTPConfig;
	}
	getWorkingDirectory: {
		(): string;
	}
	init: {
		(): FTP;
		(configKey: string): FTP;
		(config: FTPConfig): FTP;
	}
	isEnabled: {
		(): boolean;
	}
	list: {
		(remotePath: string): java.util.List;
	}
	rename: {
		(oldPath: string, newPath: string): FTP;
	}
	sendCommand: {
		(command: string): int;
		(command: string, args: string): int;
	}
	sendSiteCommand: {
		(command: string): FTP;
	}
	setConfig: {
		(config: FTPConfig): FTP;
	}
	setEnabled: {
		(enabled: boolean): FTP;
	}
	upload: {
		(remotePath: string, source: InputStream): FTP;
		(remotePath: string, source: File): FTP;
		(remotePath: string, source: typeof _storage): FTP;
	}
	uploadBytes: {
		(remotePath: string, bytes: number[]): FTP;
	}
	uploadText: {
		(remotePath: string, text: string): FTP;
		(remotePath: string, text: string, charset: string): FTP;
	}
}
declare const _ftp: FTP;
export default _ftp;