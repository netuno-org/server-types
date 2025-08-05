import {java, org} from '../types';
import File from './File';
import Values from './Values';
import OutputStream from './OutputStream';
import ProcessResult from './ProcessResult';
import _storage from '../resources/storage';

interface ProcessLauncher {
	autoCloseOutputStreams: {
		(): boolean;
		(autoCloseOutputStreams: boolean): ProcessLauncher;
	}
	await: {
		(): boolean;
		(wait: boolean): ProcessLauncher;
	}
	directory: {
		(): string;
		(file: java.io.File): org.netuno.psamata.os.ProcessLauncher;
		(directory: string): ProcessLauncher;
		(directory: File): ProcessLauncher;
		(directory: typeof _storage): ProcessLauncher;
	}
	env: {
		(): Values;
		(env: Values): ProcessLauncher;
	}
	errorOutput: {
		(err: OutputStream): org.netuno.psamata.os.ProcessLauncher;
	}
	errorOutputLineConsumer: {
		(): java.util.function.Consumer;
		(consumer: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	errorOutputStream: {
		(): OutputStream;
		(err: OutputStream): ProcessLauncher;
		(err: OutputStream): ProcessLauncher;
	}
	execute: {
		(command: java.lang.String[]): ProcessResult;
		(command: java.util.List): ProcessResult;
		(command: Values): ProcessResult;
	}
	executeAsync: {
		(command: java.lang.String[]): ProcessResult;
		(command: java.util.List): ProcessResult;
		(command: Values): ProcessResult;
	}
	getAwait: {
		(): boolean;
	}
	getDirectory: {
		(): string;
	}
	getEnv: {
		(): Values;
	}
	getErrorOutputLineConsumer: {
		(): java.util.function.Consumer;
	}
	getErrorOutputStream: {
		(): OutputStream;
	}
	getOnFinish: {
		(): java.util.function.Consumer;
	}
	getOnParallel: {
		(): java.util.function.Consumer;
	}
	getOutputLineConsumer: {
		(): java.util.function.Consumer;
	}
	getOutputStream: {
		(): OutputStream;
	}
	getShell: {
		(): boolean;
	}
	getShellCommand: {
		(): string;
	}
	getShellParameter: {
		(): string;
	}
	getTimeLimit: {
		(): long;
	}
	getWaitFor: {
		(): long;
	}
	inheritErrorOutput: {
		(): boolean;
		(inheritErrorOutput: boolean): ProcessLauncher;
	}
	inheritOutput: {
		(): boolean;
		(inheritOutput: boolean): ProcessLauncher;
	}
	isAutoCloseOutputStreams: {
		(): boolean;
	}
	isInheritErrorOutput: {
		(): boolean;
	}
	isInheritOutput: {
		(): boolean;
	}
	isReadErrorOutput: {
		(): boolean;
	}
	isReadOutput: {
		(): boolean;
	}
	isRedirectErrorStream: {
		(): boolean;
	}
	onFinish: {
		(): java.util.function.Consumer;
		(onFinish: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	onParallel: {
		(): java.util.function.Consumer;
		(onParallel: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	output: {
		(output: OutputStream): ProcessLauncher;
	}
	outputLineConsumer: {
		(): java.util.function.Consumer;
		(consumer: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	outputStream: {
		(): OutputStream;
		(output: OutputStream): ProcessLauncher;
	}
	readErrorOutput: {
		(): boolean;
		(readErrorOutput: boolean): ProcessLauncher;
	}
	readOutput: {
		(): boolean;
		(readOutput: boolean): ProcessLauncher;
	}
	redirectErrorStream: {
		(): boolean;
		(redirectErrorStream: boolean): ProcessLauncher;
	}
	setAutoCloseOutputStreams: {
		(autoCloseOutputStreams: boolean): ProcessLauncher;
	}
	setAwait: {
		(wait: boolean): ProcessLauncher;
	}
	setDirectory: {
		(file: java.io.File): org.netuno.psamata.os.ProcessLauncher;
		(directory: string): ProcessLauncher;
		(directory: File): ProcessLauncher;
		(directory: typeof _storage): ProcessLauncher;
	}
	setEnv: {
		(env: Values): ProcessLauncher;
	}
	setErrorOutput: {
		(err: OutputStream): org.netuno.psamata.os.ProcessLauncher;
	}
	setErrorOutputLineConsumer: {
		(consumer: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	setErrorOutputStream: {
		(err: OutputStream): org.netuno.psamata.os.ProcessLauncher;
		(err: OutputStream): ProcessLauncher;
	}
	setErrorStream: {
		(err: OutputStream): ProcessLauncher;
	}
	setExitDelay: {
		(timeLimit: long): ProcessLauncher;
	}
	setInheritErrorOutput: {
		(inheritErrorOutput: boolean): ProcessLauncher;
	}
	setInheritOutput: {
		(inheritOutput: boolean): ProcessLauncher;
	}
	setOnFinish: {
		(onFinish: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	setOnParallel: {
		(onParallel: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	setOutput: {
		(output: OutputStream): ProcessLauncher;
	}
	setOutputLineConsumer: {
		(consumer: java.util.function.Consumer): org.netuno.psamata.os.ProcessLauncher;
	}
	setOutputStream: {
		(output: OutputStream): ProcessLauncher;
	}
	setReadErrorOutput: {
		(readErrorOutput: boolean): ProcessLauncher;
	}
	setReadOutput: {
		(readOutput: boolean): ProcessLauncher;
	}
	setRedirectErrorStream: {
		(redirectErrorStream: boolean): ProcessLauncher;
	}
	setShell: {
		(shell: boolean): ProcessLauncher;
	}
	setShellCommand: {
		(shellCommand: string): ProcessLauncher;
	}
	setShellParameter: {
		(shellParameter: string): ProcessLauncher;
	}
	setTimeLimit: {
		(timeLimit: long): org.netuno.psamata.os.ProcessLauncher;
	}
	setWaitFor: {
		(waitFor: long): ProcessLauncher;
	}
	shell: {
		(): boolean;
		(shell: boolean): ProcessLauncher;
	}
	shellCommand: {
		(): string;
		(shellCommand: string): ProcessLauncher;
	}
	shellParameter: {
		(): string;
		(shellParameter: string): ProcessLauncher;
	}
	timeLimit: {
		(): long;
		(timeLimit: long): ProcessLauncher;
	}
	waitFor: {
		(): long;
		(waitFor: long): ProcessLauncher;
	}
}
export default ProcessLauncher;