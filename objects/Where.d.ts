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
	equals: {
		(value: boolean): Where;
		(value: java.lang.Number): Where;
		(arg0: java.lang.Object): boolean;
		(value: string): Where;
		(value: java.sql.Date): Where;
		(value: java.sql.Time): Where;
		(value: java.sql.Timestamp): Where;
		(value: java.time.LocalDate): Where;
		(value: java.time.LocalDateTime): Where;
		(value: java.time.LocalTime): Where;
		(value: java.util.UUID): Where;
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
	notContains: {
		(value: java.lang.Object): Where;
	}
	notEndsWith: {
		(value: java.lang.Object): Where;
	}
	notEqual: {
		(value: java.lang.Object): Where;
	}
	notEquals: {
		(value: java.lang.Object): Where;
	}
	notIn: {
		(values: java.lang.Object[]): Where;
		(values: java.lang.Object): Where;
	}
	notStartsWith: {
		(value: java.lang.Object): Where;
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