import {org} from '../types';
import Relationship from './Relationship';
import Where from './Where';

interface Join {
	getJoinType: {
		(): org.netuno.tritao.db.form.join.JoinType;
	}
	getRelation: {
		(): Relationship;
	}
	getTable: {
		(): string;
	}
	getWhere: {
		(): Where;
	}
	setJoinType: {
		(joinType: org.netuno.tritao.db.form.join.JoinType): Join;
	}
	setRelation: {
		(ralation: Relationship): Join;
	}
	setTable: {
		(tableName: string): Join;
	}
	setWhere: {
		(where: Where): Join;
	}
}
export default Join;