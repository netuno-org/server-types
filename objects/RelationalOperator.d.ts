import {java, org} from '../types';
import Values from './Values';

interface RelationalOperator {
	getInValues: {
		(): Values;
	}
	getOperatorType: {
		(): org.netuno.tritao.db.form.where.RelationalOperatorType;
	}
	getValue: {
		(): java.lang.Object;
	}
	setInValues: {
		(values: Values): RelationalOperator;
	}
	setOperatorType: {
		(operatorType: org.netuno.tritao.db.form.where.RelationalOperatorType): RelationalOperator;
	}
	setValue: {
		(value: java.lang.Object): RelationalOperator;
	}
}
export default RelationalOperator;