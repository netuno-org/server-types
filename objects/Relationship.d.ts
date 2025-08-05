import {java, org} from '../types';
import Values from './Values';
import DataSchema from './DataSchema';
import Where from './Where';

interface Relationship {
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
		(): org.netuno.tritao.db.form.join.RelationshipType;
	}
	getWhere: {
		(): Where;
	}
	join: {
		(relation: Relationship): Relationship;
	}
	leftJoin: {
		(relation: Relationship): Relationship;
	}
	rightJoin: {
		(relation: Relationship): Relationship;
	}
	setColumn: {
		(column: string): Relationship;
	}
	setSubRelations: {
		(subRelations: Values | DataSchema | java.util.Map): Relationship;
	}
	setTableName: {
		(tableName: string): Relationship;
	}
	setType: {
		(type: org.netuno.tritao.db.form.join.RelationshipType): Relationship;
	}
	setWhere: {
		(where: Where): Relationship;
	}
	where: {
		(where: Where): Relationship;
	}
}
export default Relationship;