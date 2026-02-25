import {java} from '../types';
import Values from '../objects/Values';

interface Form {
	all: {
		(): Values[];
	}
	create: {
		(data: Values): boolean;
	}
	createComponent: {
		(formId: int, data: Values): boolean;
		(formNameOrUid: string, data: Values): boolean;
	}
	createComponentIfNotExists: {
		(formId: int, data: Values): boolean;
		(formNameOrUid: string, data: Values): boolean;
	}
	createIfNotExists: {
		(data: Values): boolean;
	}
	get: {
		(id: int): Values;
		(nameOrUid: string): Values;
		(data: Values): Values;
	}
	getAllComponents: {
		(formId: int): Values[];
		(formNameOrUid: string): Values[];
	}
	getComponent: {
		(formId: int, id: int): Values;
		(formId: int, nameOrUid: string): Values;
		(formId: int, data: Values): Values;
		(formNameOrUid: string, id: int): Values;
		(formNameOrUid: string, nameOrUid: string): Values;
		(formNameOrUid: string, data: Values): Values;
	}
	mandatoryFields: {
		(formId: int): java.lang.String[];
		(formNameOrUid: string): java.lang.String[];
	}
	uniqueFields: {
		(formId: int): java.lang.String[];
		(formNameOrUid: string): java.lang.String[];
	}
}
declare const _form: Form;
export default _form;