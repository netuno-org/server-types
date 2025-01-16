import {java} from '../types';
import Values from './Values';
import DataSchema from './DataSchema';

interface RelationLink {
	getFormLink: {
		(): string;
	}
	getSubLinks: {
		(): Values | DataSchema | java.util.Map;
	}
	hasSubLinks: {
		(): boolean;
	}
	setFormLink: {
		(form: string): RelationLink;
	}
	setSubLinks: {
		(subLinks: Values | DataSchema | java.util.Map): RelationLink;
	}
}
export default RelationLink;