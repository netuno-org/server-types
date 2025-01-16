import {} from '../types';

interface SSHExecResult {
	error: {
		(): string;
		(error: string): SSHExecResult;
	}
	exitErrorMessage: {
		(): string;
		(errorMessage: string): SSHExecResult;
	}
	exitStatus: {
		(): int;
		(exitStatus: int): SSHExecResult;
	}
	id: {
		(): int;
		(id: int): SSHExecResult;
	}
	output: {
		(): string;
		(output: string): SSHExecResult;
	}
}
export default SSHExecResult;