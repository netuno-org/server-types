import {org} from '../types';
import RelationalOperator from './RelationalOperator';
import Where from './Where';

interface ConditionalOperator {
	getColumn: {
		(): string;
	}
	getOperator: {
		(): org.netuno.tritao.db.form.where.ConditionalOperatorType;
	}
	getRelationOperator: {
		(): RelationalOperator;
	}
	getSubCondition: {
		(): Where;
	}
	hasSubCondition: {
		(): boolean;
	}
	setColumn: {
		(column: string): ConditionalOperator;
	}
	setOperator: {
		(column: org.netuno.tritao.db.form.where.ConditionalOperatorType): ConditionalOperator;
	}
	setRelationOperator: {
		(relationOperator: RelationalOperator): ConditionalOperator;
	}
	setSubCondition: {
		(subcondition: Where): ConditionalOperator;
	}
}
export default ConditionalOperator;