import {java, org} from '../types';

interface ScriptResult {
	error: {
		(): java.lang.Throwable;
	}
	get: {
		(): java.lang.Object;
	}
	isError: {
		(): boolean;
	}
	isSuccess: {
		(): boolean;
	}
	onError: {
		(func: java.util.function.Consumer): ScriptResult;
		(func: org.graalvm.polyglot.Value): ScriptResult;
	}
	onSuccess: {
		(func: java.util.function.Consumer): ScriptResult;
		(func: org.graalvm.polyglot.Value): ScriptResult;
	}
}
export default ScriptResult;