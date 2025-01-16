import {} from '../types';
import Values from '../objects/Values';
import File from '../objects/File';

interface App {
	config: {
		(): Values;
	}
	configReloaded: {
		(): boolean;
	}
	file: {
		(path: string): File;
	}
	folder: {
		(path: string): File;
	}
	getConfig: {
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
	getPathBase: {
		(): string;
	}
	getPathConfig: {
		(): string;
	}
	getPathHome: {
		(): string;
	}
	getPathPublic: {
		(): string;
	}
	getPathServer: {
		(): string;
	}
	getPathStorage: {
		(): string;
	}
	getSettings: {
		(): Values;
	}
	getUrl: {
		(): string;
		(key: string): string;
	}
	getUrlAdmin: {
		(): string;
	}
	getUrlFileSystem: {
		(): string;
	}
	getUrlFileSystemPrivate: {
		(): string;
	}
	getUrlFileSystemPublic: {
		(): string;
	}
	getUrlFileSystemServer: {
		(): string;
	}
	getUrlPublic: {
		(): string;
	}
	getUrlServices: {
		(): string;
	}
	getUrlStorage: {
		(): string;
	}
	isConfigReloaded: {
		(): boolean;
	}
	isFile: {
		(path: string): boolean;
	}
	isFolder: {
		(path: string): boolean;
	}
	name: {
		(): string;
	}
	pathBase: {
		(): string;
	}
	pathConfig: {
		(): string;
	}
	pathHome: {
		(): string;
	}
	pathPublic: {
		(): string;
	}
	pathServer: {
		(): string;
	}
	pathStorage: {
		(): string;
	}
	settings: {
		(): Values;
	}
	url: {
		(): string;
		(key: string): string;
	}
	urlAdmin: {
		(): string;
	}
	urlFileSystem: {
		(): string;
	}
	urlFileSystemPrivate: {
		(): string;
	}
	urlFileSystemPublic: {
		(): string;
	}
	urlFileSystemServer: {
		(): string;
	}
	urlPublic: {
		(): string;
	}
	urlServices: {
		(): string;
	}
	urlStorage: {
		(): string;
	}
}
declare const _app: App;
export default _app;