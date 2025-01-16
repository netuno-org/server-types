import {java} from '../types';
import RelationOperator from './RelationOperator';
import Values from './Values';
import DataSchema from './DataSchema';
import Condition from './Condition';

interface Where {
	and: {
		(column: string, value: java.lang.Object): Where;
		(column: string, relationOperator: RelationOperator): Where;
		(where: Where): Where;
	}
	getConditions: {
		(): Values | DataSchema | java.util.Map;
	}
	getFirstCondition: {
		(): Condition;
	}
	getTable: {
		(): string;
	}
	or: {
		(column: string, value: java.lang.Object): Where;
		(column: string, relationOperator: RelationOperator): Where;
		(where: Where): Where;
	}
	setConditions: {
		(conditions: Values | DataSchema | java.util.Map): Where;
	}
	setFirstCondition: {
		(firstCondition: Condition): Where;
	}
	setTable: {
		(tableName: string): Where;
	}
}
export default Where;