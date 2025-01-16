import {java} from '../types';

interface Functions {
	add: {
		(func: java.util.function.Function): Functions;
	}
	atEnd: {
		(end: java.util.function.Function): Functions;
	}
	data: {
		(): java.lang.Object;
		(data: java.lang.Object): Functions;
	}
	getData: {
		(): java.lang.Object;
	}
	getMetrics: {
		(): java.util.List;
	}
	metrics: {
		(): java.util.List;
	}
	setAtEnd: {
		(end: java.util.function.Function): Functions;
	}
	setData: {
		(data: java.lang.Object): Functions;
	}
	start: {
		(): Functions;
	}
}
export default Functions;