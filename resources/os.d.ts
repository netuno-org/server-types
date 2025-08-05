import {} from '../types';
import File from '../objects/File';
import ProcessLauncher from '../objects/ProcessLauncher';

interface OS {
	file: {
		(path: string): File;
	}
	folder: {
		(path: string): File;
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
	init: {
		(): OS;
	}
	initProcess: {
		(): ProcessLauncher;
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
	isWindows: {
		(): boolean;
	}
	name: {
		(): string;
	}
}
declare const _os: OS;
export default _os;