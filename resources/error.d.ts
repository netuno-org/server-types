import {java} from '../types';
import ErrorException from '../objects/ErrorException';
import Values from '../objects/Values';

interface Error {
	create: {
		(message: string): ErrorException;
	}
	createError: {
		(message: string): java.lang.Error;
	}
	createException: {
		(message: string): java.lang.Exception;
	}
	createThrowable: {
		(message: string): java.lang.Throwable;
	}
	data: {
		(): Values;
		(retorno: Values): Error;
	}
	debug: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
		(message: string, cause: java.lang.Throwable): void;
	}
	error: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
		(message: string, throwable: java.lang.Throwable): void;
	}
	fatal: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
		(message: string, throwable: java.lang.Throwable): void;
	}
	info: {
		(message: string): void;
		(message: string, throwable: java.lang.Object): void;
		(message: string, cause: java.lang.Throwable): void;
	}
	is: {
		(object: java.lang.Object): boolean;
	}
	isError: {
		(object: java.lang.Object): boolean;
	}
	isException: {
		(object: java.lang.Object): boolean;
	}
	isThrowable: {
		(object: java.lang.Object): boolean;
	}
	raise: {
		(object: java.lang.Object): void;
	}
	trace: {
		(message: string): void;
		(message: string, object: java.lang.Object): void;
		(message: string, throwable: java.lang.Throwable): void;
	}
	warn: {
		(message: string): void;
		(message: string, object: java.lang.Object): void;
		(message: string, throwable: java.lang.Throwable): void;
	}
}
declare const _error: Error;
export default _error;