import {java, org} from '../types';
import Values from './Values';
import Field from './Field';
import Group from './Group';
import DataSchema from './DataSchema';
import Order from './Order';
import Where from './Where';
import Relation from './Relation';
import Link from './Link';

interface Query {
	all: {
		(): java.util.List;
	}
	cascadeDelete: {
		(forms: java.lang.String[]): Values;
	}
	cascadeInsert: {
		(data: Values): Values;
	}
	cascadeUpdate: {
		(data: Values): Values;
	}
	debug: {
		(enabled: boolean): Query;
	}
	deleteAll: {
		(): int;
	}
	deleteFirst: {
		(): int;
	}
	distinct: {
		(enabled: boolean): Query;
	}
	fields: {
		(fields: Field[]): Query;
	}
	first: {
		(): Values;
	}
	getFields: {
		(): java.util.List;
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
		(): org.netuno.tritao.query.pagination.Pagination;
	}
	getTableName: {
		(): string;
	}
	getTablesToPopulate: {
		(): java.util.List;
	}
	getWhere: {
		(): Where;
	}
	group: {
		(order: string): Query;
	}
	insert: {
		(data: Values): string;
	}
	isDebug: {
		(): boolean;
	}
	isDistinct: {
		(): boolean;
	}
	join: {
		(relation: Relation): Query;
	}
	leftJoin: {
		(relation: Relation): Query;
	}
	limit: {
		(limit: int): Query;
	}
	link: {
		(formLink: string): Query;
		(formLink: string, link: Link): Query;
		(formLink: string, where: Where): Query;
		(formLink: string, where: Where, link: Link): Query;
	}
	order: {
		(column: string, order: string): Query;
	}
	page: {
		(pagination: org.netuno.tritao.query.pagination.Pagination): Values;
	}
	populate: {
		(table: string, filter: Field): Query;
		(table: string, filter: Field, fields: java.util.List): Query;
	}
	rightJoin: {
		(relation: Relation): Query;
	}
	setDebug: {
		(enabled: boolean): Query;
	}
	setDistinct: {
		(enabled: boolean): Query;
	}
	setFields: {
		(fields: java.util.List): Query;
	}
	setGroup: {
		(order: Group): Query;
	}
	setJoin: {
		(join: Values | DataSchema | java.util.Map): Query;
	}
	setLimit: {
		(limit: int): Query;
	}
	setOrder: {
		(order: Order): Query;
	}
	setPagination: {
		(pagination: org.netuno.tritao.query.pagination.Pagination): Query;
	}
	setTableName: {
		(tableName: string): Query;
	}
	setTablesToPopulate: {
		(tablesToPopulate: java.util.List): Query;
	}
	setWhere: {
		(where: Where): Query;
	}
	updateAll: {
		(data: Values): int;
	}
	updateFirst: {
		(data: Values): int;
	}
}
export default Query;