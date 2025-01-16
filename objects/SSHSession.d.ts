import {} from '../types';
import SSHExecResult from './SSHExecResult';

interface SSHSession {
	close: {
		(): void;
	}
	closed: {
		(): boolean;
	}
	exec: {
		(command: string): SSHExecResult;
		(command: string, timeout: int): SSHExecResult;
	}
	isClosed: {
		(): boolean;
	}
}
export default SSHSession;