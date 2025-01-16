import {java} from '../types';
import OSCommand from '../objects/OSCommand';
import Values from '../objects/Values';
import File from '../objects/File';
import _storage from './storage';

interface OS {
	command: {
		(command: java.lang.String[]): OSCommand;
		(command: java.util.List): OSCommand;
		(command: Values): OSCommand;
	}
	directory: {
		(): string;
		(directory: string): OS;
		(directory: File): OS;
		(directory: typeof _storage): OS;
	}
	env: {
		(): Values;
		(env: Values): OS;
	}
	file: {
		(path: string): File;
	}
	folder: {
		(path: string): File;
	}
	getDirectory: {
		(): string;
	}
	getEnv: {
		(): Values;
	}
	getFile: {
		(path: string): File;
	}
	getFolder: {
		(path: string): File;
	}
	getName: {
		(): string;
	}
	getShell: {
		(): boolean;
	}
	getWaitFor: {
		(): long;
	}
	init: {
		(): OS;
	}
	isFile: {
		(path: string): boolean;
	}
	isFolder: {
		(path: string): boolean;
	}
	isLinux: {
		(): boolean;
	}
	isMac: {
		(): boolean;
	}
	isOS: {
		(osType: string): boolean;
	}
	isReadCommandError: {
		(): boolean;
	}
	isReadCommandOutput: {
		(): boolean;
	}
	isWindows: {
		(): boolean;
	}
	name: {
		(): string;
	}
	readCommandError: {
		(): boolean;
		(readCommandError: boolean): OS;
	}
	readCommandOutput: {
		(): boolean;
		(readCommandOutput: boolean): OS;
	}
	setDirectory: {
		(directory: string): OS;
		(directory: File): OS;
		(directory: typeof _storage): OS;
	}
	setEnv: {
		(shell: Values): OS;
	}
	setReadCommandError: {
		(readCommandError: boolean): OS;
	}
	setReadCommandOutput: {
		(readCommandOutput: boolean): OS;
	}
	setShell: {
		(shell: boolean): OS;
	}
	setWaitFor: {
		(waitFor: long): OS;
	}
	shell: {
		(): boolean;
		(shell: boolean): OS;
	}
	waitFor: {
		(): long;
		(waitFor: long): OS;
	}
}
declare const _os: OS;
export default _os;