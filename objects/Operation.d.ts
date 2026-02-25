import {java, org} from '../types';
import Values from './Values';
import Group from './Group';
import DataSchema from './DataSchema';
import Order from './Order';
import Where from './Where';
import Relationship from './Relationship';
import Link from './Link';

interface Operation {
	all: {
		(): Values[];
	}
	debug: {
		(enabled: boolean): Operation;
	}
	delete: {
		(): Values;
		(forms: string[]): Values;
	}
	distinct: {
		(enabled: boolean): Operation;
	}
	first: {
		(): Values;
	}
	get: {
		(column: string): Operation;
		(column: string, alias: string): Operation;
	}
	getFieldsToGet: {
		(): org.netuno.tritao.db.form.Field[];
	}
	getFieldsToSet: {
		(): org.netuno.tritao.db.form.Field[];
	}
	getFormName: {
		(): string;
	}
	getGroup: {
		(): Group;
	}
	getJoin: {
		(): Values | DataSchema | java.util.Map;
	}
	getLimit: {
		(): int;
	}
	getOrder: {
		(): Order;
	}
	getPagination: {
		(): org.netuno.tritao.db.form.pagination.Pagination;
	}
	getTablesToPopulate: {
		(): org.netuno.tritao.db.form.populate.Populate[];
	}
	getWhere: {
		(): Where;
	}
	group: {
		(order: string[]): Operation;
		(order: string): Operation;
	}
	insert: {
		(): Values;
	}
	isDebug: {
		(): boolean;
	}
	isDistinct: {
		(): boolean;
	}
	join: {
		(relation: Relationship): Operation;
	}
	leftJoin: {
		(relation: Relationship): Operation;
	}
	limit: {
		(limit: int): Operation;
	}
	link: {
		(formLink: string): Operation;
		(formLink: string, link: Link): Operation;
		(formLink: string, where: Where): Operation;
		(formLink: string, where: Where, link: Link): Operation;
		(formLink: Link): Operation;
	}
	order: {
		(column: string, order: string): Operation;
	}
	page: {
		(page: int, size: int): Values;
		(pagination: org.netuno.tritao.db.form.pagination.Pagination): Values;
	}
	populate: {
		(table: string, filter: org.netuno.tritao.db.form.Field): Operation;
		(table: string, filter: org.netuno.tritao.db.form.Field, fields: org.netuno.tritao.db.form.Field[]): Operation;
	}
	rightJoin: {
		(relation: Relationship): Operation;
	}
	set: {
		(column: string, value: java.lang.Object): Operation;
	}
	setDebug: {
		(enabled: boolean): Operation;
	}
	setDistinct: {
		(enabled: boolean): Operation;
	}
	setFieldsToGet: {
		(fields: org.netuno.tritao.db.form.Field[]): Operation;
	}
	setFieldsToSet: {
		(fieldsToSet: org.netuno.tritao.db.form.Field[]): Operation;
	}
	setFormName: {
		(tableName: string): Operation;
	}
	setGroup: {
		(order: Group): Operation;
	}
	setJoin: {
		(join: Values | DataSchema | java.util.Map): Operation;
	}
	setLimit: {
		(limit: int): Operation;
	}
	setOrder: {
		(order: Order): Operation;
	}
	setPagination: {
		(pagination: org.netuno.tritao.db.form.pagination.Pagination): Operation;
	}
	setTablesToPopulate: {
		(tablesToPopulate: org.netuno.tritao.db.form.populate.Populate[]): Operation;
	}
	setWhere: {
		(where: Where): Operation;
	}
	update: {
		(): Values;
	}
	where: {
		(where: Where): Operation;
	}
}
export default Operation;