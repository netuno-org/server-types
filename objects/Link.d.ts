import {org} from '../types';
import RelationshipLink from './RelationshipLink';
import Where from './Where';

interface Link {
	getForm: {
		(): string;
	}
	getJoinType: {
		(): org.netuno.tritao.db.form.join.JoinType;
	}
	getRelationLink: {
		(): RelationshipLink;
	}
	getWhere: {
		(): Where;
	}
	link: {
		(formLink: string): Link;
		(formLink: Link): Link;
	}
	setForm: {
		(form: string): Link;
	}
	setJoinType: {
		(joinType: org.netuno.tritao.db.form.join.JoinType): Link;
	}
	setRelationLink: {
		(relationLink: RelationshipLink): Link;
	}
	setWhere: {
		(where: Where): Link;
	}
	where: {
		(where: Where): Link;
	}
	withInner: {
		(): Link;
	}
	withLeft: {
		(): Link;
	}
	withRight: {
		(): Link;
	}
}
export default Link;