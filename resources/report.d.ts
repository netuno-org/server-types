import {java} from '../types';
import Values from '../objects/Values';

interface Report {
	all: {
		(): java.util.List;
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
		(formId: int): java.util.List;
		(formNameOrUid: string): java.util.List;
	}
	getComponent: {
		(formId: int, id: int): Values;
		(formId: int, nameOrUid: string): Values;
		(formId: int, data: Values): Values;
		(formNameOrUid: string, id: int): Values;
		(formNameOrUid: string, nameOrUid: string): Values;
		(formNameOrUid: string, data: Values): Values;
	}
	notNulls: {
		(formId: int): java.util.List;
		(formNameOrUid: string): java.util.List;
	}
}
declare const _report: Report;
export default _report;