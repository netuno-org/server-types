import {java, org} from '../types';

interface ErrorException {
	addSuppressed: {
		(arg0: java.lang.Throwable): void;
	}
	fillInStackTrace: {
		(): java.lang.Throwable;
	}
	getCause: {
		(): java.lang.Throwable;
	}
	getLocalizedMessage: {
		(): string;
	}
	getLogDebug: {
		(): string;
	}
	getLogError: {
		(): string;
	}
	getLogFatal: {
		(): string;
	}
	getLogInfo: {
		(): string;
	}
	getLogMessage: {
		(): string;
	}
	getLogTrace: {
		(): string;
	}
	getLogWarn: {
		(): string;
	}
	getMessage: {
		(): string;
	}
	getStackTrace: {
		(): java.lang.StackTraceElement[];
	}
	getSuppressed: {
		(): java.lang.Throwable[];
	}
	initCause: {
		(arg0: java.lang.Throwable): java.lang.Throwable;
	}
	isAppendError: {
		(): boolean;
	}
	isLogDebug: {
		(): boolean;
	}
	isLogError: {
		(): boolean;
	}
	isLogFatal: {
		(): boolean;
	}
	isLogInfo: {
		(): boolean;
	}
	isLogTrace: {
		(): boolean;
	}
	isLogWarn: {
		(): boolean;
	}
	printStackTrace: {
		(): void;
		(arg0: java.io.PrintStream): void;
		(arg0: java.io.PrintWriter): void;
	}
	setAppendError: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
	}
	setLogDebug: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setLogError: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setLogFatal: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setLogInfo: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setLogTrace: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setLogWarn: {
		(arg0: boolean): org.netuno.proteu.ProteuError;
		(arg0: string): org.netuno.proteu.ProteuError;
	}
	setStackTrace: {
		(arg0: java.lang.StackTraceElement[]): void;
	}
}
export default ErrorException;