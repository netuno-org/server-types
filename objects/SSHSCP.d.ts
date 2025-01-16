import {} from '../types';
import OutputStream from './OutputStream';
import File from './File';
import InputStream from './InputStream';

interface SSHSCP {
	close: {
		(): void;
	}
	closed: {
		(): boolean;
	}
	download: {
		(remotePath: string, destination: OutputStream): SSHSCP;
		(remotePath: string, destination: File): SSHSCP;
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
	upload: {
		(remotePath: string, source: InputStream): SSHSCP;
		(remotePath: string, source: File): SSHSCP;
	}
	uploadBytes: {
		(remotePath: string, bytes: number[]): SSHSCP;
	}
	uploadText: {
		(remotePath: string, text: string): SSHSCP;
		(remotePath: string, text: string, charset: string): SSHSCP;
	}
}
export default SSHSCP;