import {} from '../types';
import RelationLink from './RelationLink';
import Where from './Where';

interface Link {
	getForm: {
		(): string;
	}
	getRelationLink: {
		(): RelationLink;
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
		(relationLink: RelationLink): Link;
	}
	setWhere: {
		(where: Where): Link;
	}
}
export default Link;