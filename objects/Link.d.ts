import {} from '../types';
import RelationshipLink from './RelationshipLink';
import Where from './Where';

interface Link {
	getForm: {
		(): string;
	}
	getRelationLink: {
		(): RelationshipLink;
	}
	getWhere: {
		(): Where;
	}
	link: {
		(formLink: string): Link;
	}
	setForm: {
		(form: string): Link;
	}
	setRelationLink: {
		(relationLink: RelationshipLink): Link;
	}
	setWhere: {
		(where: Where): Link;
	}
}
export default Link;