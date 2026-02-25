import {java} from '../types';
import ConditionalOperator from './ConditionalOperator';

interface Where {
	and: {
		(column: string): Where;
		(where: Where): Where;
	}
	contains: {
		(value: java.lang.Object): Where;
	}
	different: {
		(value: java.lang.Object): Where;
	}
	endsWith: {
		(value: java.lang.Object): Where;
	}
	equal: {
		(value: java.lang.Object): Where;
	}
	getConditions: {
		(): ConditionalOperator[];
	}
	getTable: {
		(): string;
	}
	greaterOrEqualsThan: {
		(value: java.lang.Object): Where;
	}
	greaterThan: {
		(value: java.lang.Object): Where;
	}
	in: {
		(values: java.lang.Object[]): Where;
		(values: java.lang.Object): Where;
	}
	inRaw: {
		(value: java.lang.Object): Where;
	}
	lessOrEqualsThan: {
		(value: java.lang.Object): Where;
	}
	lessThan: {
		(value: java.lang.Object): Where;
	}
	notEquals: {
		(value: java.lang.Object): Where;
	}
	notIn: {
		(values: java.lang.Object[]): Where;
		(values: java.lang.Object): Where;
	}
	or: {
		(column: string): Where;
		(where: Where): Where;
	}
	setConditions: {
		(conditions: ConditionalOperator[]): Where;
	}
	setTable: {
		(tableName: string): Where;
	}
	startsWith: {
		(value: java.lang.Object): Where;
	}
}
export default Where;