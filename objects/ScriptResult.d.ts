import {java, org} from '../types';

interface ScriptResult {
	isError: {
		(): boolean;
	}
	isSuccess: {
		(): boolean;
	}
	whenError: {
		(func: java.util.function.Consumer): ScriptResult;
		(func: org.graalvm.polyglot.Value): ScriptResult;
	}
	whenSucceed: {
		(func: java.lang.Runnable): ScriptResult;
		(func: org.graalvm.polyglot.Value): ScriptResult;
	}
}
export default ScriptResult;