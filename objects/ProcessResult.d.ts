import {} from '../types';

interface ProcessResult {
	exitCode: {
		(): int;
	}
	getExitCode: {
		(): int;
	}
	getOutput: {
		(): string;
	}
	getOutputError: {
		(): string;
	}
	output: {
		(): string;
	}
	outputError: {
		(): string;
	}
	toString: {
		(): string;
	}
}
export default ProcessResult;