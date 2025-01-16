import {java, org} from '../types';
import Values from './Values';
import DataSchema from './DataSchema';
import Where from './Where';

interface Relation {
	getColumn: {
		(): string;
	}
	getSubRelations: {
		(): Values | DataSchema | java.util.Map;
	}
	getTableName: {
		(): string;
	}
	getType: {
		(): org.netuno.tritao.query.join.RelationType;
	}
	getWhere: {
		(): Where;
	}
	join: {
		(relation: Relation): Relation;
	}
	leftJoin: {
		(relation: Relation): Relation;
	}
	rightJoin: {
		(relation: Relation): Relation;
	}
	setColumn: {
		(column: string): Relation;
	}
	setSubRelations: {
		(subRelations: Values | DataSchema | java.util.Map): Relation;
	}
	setTableName: {
		(tableName: string): Relation;
	}
	setType: {
		(type: org.netuno.tritao.query.join.RelationType): Relation;
	}
	setWhere: {
		(where: Where): Relation;
	}
}
export default Relation;