import {java} from '../types';
import Values from './Values';
import DataSchema from './DataSchema';

interface RelationshipLink {
	getAlias: {
		(): string;
	}
	getFormLink: {
		(): string;
	}
	getSubLinks: {
		(): Values | DataSchema | java.util.Map;
	}
	hasSubLinks: {
		(): boolean;
	}
	setAlias: {
		(alias: string): RelationshipLink;
	}
	setFormLink: {
		(form: string): RelationshipLink;
	}
	setSubLinks: {
		(subLinks: Values | DataSchema | java.util.Map): RelationshipLink;
	}
}
export default RelationshipLink;