import {org} from '../types';
import RelationOperator from './RelationOperator';
import Where from './Where';

interface Condition {
	getColumn: {
		(): string;
	}
	getOperator: {
		(): org.netuno.tritao.query.where.ConditionOperator;
	}
	getRelationOperator: {
		(): RelationOperator;
	}
	getSubCondition: {
		(): Where;
	}
	hasSubCondition: {
		(): boolean;
	}
	setColumn: {
		(column: string): Condition;
	}
	setOperator: {
		(column: org.netuno.tritao.query.where.ConditionOperator): Condition;
	}
	setRelationOperator: {
		(relationOperator: RelationOperator): Condition;
	}
	setSubCondition: {
		(subcondition: Where): Condition;
	}
}
export default Condition;