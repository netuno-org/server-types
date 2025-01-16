import {} from '../types';

interface SSHFile {
	getName: {
		(): string;
	}
	getParent: {
		(): string;
	}
	getPath: {
		(): string;
	}
	isDirectory: {
		(): boolean;
	}
	isRegularFile: {
		(): boolean;
	}
	setDirectory: {
		(directory: boolean): void;
	}
	setName: {
		(name: string): void;
	}
	setParent: {
		(parentName: string): void;
	}
	setPath: {
		(path: string): void;
	}
	setRegularFile: {
		(directory: boolean): void;
	}
}
export default SSHFile;