import {java} from '../types';

interface FTPFile {
	getGroup: {
		(): string;
	}
	getHardLinkCount: {
		(): int;
	}
	getLink: {
		(): string;
	}
	getName: {
		(): string;
	}
	getRawListing: {
		(): string;
	}
	getSize: {
		(): long;
	}
	getTimestamp: {
		(): java.util.Calendar;
	}
	getTimestampInstant: {
		(): java.time.Instant;
	}
	getUser: {
		(): string;
	}
	isDirectory: {
		(): boolean;
	}
	isFile: {
		(): boolean;
	}
	isGroupExecutable: {
		(): boolean;
	}
	isGroupReadable: {
		(): boolean;
	}
	isGroupWritable: {
		(): boolean;
	}
	isSymbolicLink: {
		(): boolean;
	}
	isUnknown: {
		(): boolean;
	}
	isUserExecutable: {
		(): boolean;
	}
	isUserReadable: {
		(): boolean;
	}
	isUserWritable: {
		(): boolean;
	}
	isValid: {
		(): boolean;
	}
	isWorldExecutable: {
		(): boolean;
	}
	isWorldReadable: {
		(): boolean;
	}
	isWorldWritable: {
		(): boolean;
	}
	setGroup: {
		(group: string): FTPFile;
	}
	setGroupExecutable: {
		(access: boolean): FTPFile;
	}
	setGroupReadable: {
		(access: boolean): FTPFile;
	}
	setGroupWritable: {
		(access: boolean): FTPFile;
	}
	setHardLinkCount: {
		(links: int): FTPFile;
	}
	setLink: {
		(link: string): FTPFile;
	}
	setName: {
		(name: string): FTPFile;
	}
	setRawListing: {
		(rawListing: string): FTPFile;
	}
	setSize: {
		(size: long): FTPFile;
	}
	setTimestamp: {
		(date: java.util.Calendar): FTPFile;
	}
	setUser: {
		(user: string): FTPFile;
	}
	setUserExecutable: {
		(access: boolean): FTPFile;
	}
	setUserReadable: {
		(access: boolean): FTPFile;
	}
	setUserWritable: {
		(access: boolean): FTPFile;
	}
	setWorldExecutable: {
		(access: boolean): FTPFile;
	}
	setWorldReadable: {
		(access: boolean): FTPFile;
	}
	setWorldWritable: {
		(access: boolean): FTPFile;
	}
	toDirectory: {
		(): FTPFile;
	}
	toFile: {
		(): FTPFile;
	}
	toFormattedString: {
		(): string;
		(timezone: string): string;
	}
	toSymbolicLink: {
		(): FTPFile;
	}
	toUnknown: {
		(): FTPFile;
	}
}
export default FTPFile;