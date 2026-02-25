import {java, org} from '../types';

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
		(): org.netuno.tritao.resource.Exec$Functions$Metric[];
	}
	metrics: {
		(): org.netuno.tritao.resource.Exec$Functions$Metric[];
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