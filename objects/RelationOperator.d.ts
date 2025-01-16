import {java, org} from '../types';
import Values from './Values';

interface RelationOperator {
	getInValues: {
		(): Values;
	}
	getOperatorType: {
		(): org.netuno.tritao.query.where.RelationOperatorType;
	}
	getValue: {
		(): java.lang.Object;
	}
	setInValues: {
		(values: Values): RelationOperator;
	}
	setOperatorType: {
		(operatorType: org.netuno.tritao.query.where.RelationOperatorType): RelationOperator;
	}
	setValue: {
		(value: java.lang.Object): RelationOperator;
	}
}
export default RelationOperator;