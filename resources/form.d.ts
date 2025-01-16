import {java, org} from '../types';
import RelationOperator from '../objects/RelationOperator';
import Values from '../objects/Values';
import Field from '../objects/Field';
import Link from '../objects/Link';
import Where from '../objects/Where';
import Relation from '../objects/Relation';
import Query from '../objects/Query';

interface Form {
	AND: {
		(): org.netuno.tritao.query.where.ConditionOperator;
	}
	OR: {
		(): org.netuno.tritao.query.where.ConditionOperator;
	}
	all: {
		(): java.util.List;
	}
	contains: {
		(value: java.lang.Object): RelationOperator;
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
	different: {
		(value: java.lang.Object): RelationOperator;
	}
	endsWith: {
		(value: java.lang.Object): RelationOperator;
	}
	field: {
		(column: string): Field;
		(column: string, elias: string): Field;
	}
	fields: {
		(fields: Field[]): java.util.List;
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
	greaterOrEqualsThan: {
		(value: java.lang.Object): RelationOperator;
	}
	greaterThan: {
		(value: java.lang.Object): RelationOperator;
	}
	in: {
		(values: Values): RelationOperator;
	}
	inRaw: {
		(value: java.lang.Object): RelationOperator;
	}
	lessOrEqualsThan: {
		(value: java.lang.Object): RelationOperator;
	}
	lessThan: {
		(value: java.lang.Object): RelationOperator;
	}
	link: {
		(formLink: string): Link;
		(formLink: string, where: Where): Link;
		(formLink: string, where: Where, link: Link): Link;
	}
	manyToOne: {
		(tableName: string, column: string): Relation;
		(tableName: string, column: string, where: Where): Relation;
	}
	notNulls: {
		(formId: int): java.util.List;
		(formNameOrUid: string): java.util.List;
	}
	oneToMany: {
		(tableName: string, column: string): Relation;
		(tableName: string, column: string, where: Where): Relation;
	}
	pagination: {
		(page: int, pageSize: int): org.netuno.tritao.query.pagination.Pagination;
	}
	primaryKeys: {
		(formId: int): java.util.List;
		(formNameOrUid: string): java.util.List;
	}
	query: {
		(tableName: string): Query;
		(tableName: string, where: Where): Query;
	}
	startsWith: {
		(value: java.lang.Object): RelationOperator;
	}
	where: {
		(column: string, value: java.lang.Object): Where;
		(column: string, value: RelationOperator): Where;
		(operator: org.netuno.tritao.query.where.ConditionOperator, column: string, value: java.lang.Object): Where;
		(operator: org.netuno.tritao.query.where.ConditionOperator, column: string, relationOperator: RelationOperator): Where;
	}
}
declare const _form: Form;
export default _form;