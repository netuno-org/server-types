import {} from '../types';

interface OSCommand {
	error: {
		(): string;
	}
	exitCode: {
		(): int;
	}
	getError: {
		(): string;
	}
	getExitCode: {
		(): int;
	}
	getOutput: {
		(): string;
	}
	output: {
		(): string;
	}
	toString: {
		(): string;
	}
}
export default OSCommand;