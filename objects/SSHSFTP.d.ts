import {java} from '../types';
import OutputStream from './OutputStream';
import File from './File';
import InputStream from './InputStream';

interface SSHSFTP {
	close: {
		(): void;
	}
	closed: {
		(): boolean;
	}
	createDirectories: {
		(remotePath: string): SSHSFTP;
	}
	createDirectory: {
		(remotePath: string): SSHSFTP;
	}
	deleteDirectory: {
		(remotePath: string): SSHSFTP;
	}
	deleteFile: {
		(remotePath: string): SSHSFTP;
	}
	download: {
		(remotePath: string, destination: OutputStream): SSHSFTP;
		(remotePath: string, destination: File): SSHSFTP;
	}
	downloadBytes: {
		(remotePath: string): number[];
	}
	downloadText: {
		(remotePath: string): string;
		(remotePath: string, charset: string): string;
	}
	isClosed: {
		(): boolean;
	}
	list: {
		(remotePath: string): java.util.List;
	}
	size: {
		(remotePath: string): long;
	}
	upload: {
		(remotePath: string, source: InputStream): SSHSFTP;
		(remotePath: string, source: File): SSHSFTP;
	}
	uploadBytes: {
		(remotePath: string, bytes: number[]): SSHSFTP;
	}
	uploadText: {
		(remotePath: string, text: string): SSHSFTP;
		(remotePath: string, text: string, charset: string): SSHSFTP;
	}
}
export default SSHSFTP;