import {org} from '../types';
import Relation from './Relation';
import Where from './Where';

interface Join {
	getJoinType: {
		(): org.netuno.tritao.query.join.JoinType;
	}
	getRelation: {
		(): Relation;
	}
	getTable: {
		(): string;
	}
	getWhere: {
		(): Where;
	}
	setJoinType: {
		(joinType: org.netuno.tritao.query.join.JoinType): Join;
	}
	setRelation: {
		(ralation: Relation): Join;
	}
	setTable: {
		(tableName: string): Join;
	}
	setWhere: {
		(where: Where): Join;
	}
}
export default Join;