import {java, org} from '../types';
import Values from './Values';
import DataSchema from './DataSchema';

interface MongoFilters {
	and: {
		(filters: org.bson.conversions.Bson[]): org.bson.conversions.Bson;
		(filters: Values | DataSchema | java.lang.Iterable): org.bson.conversions.Bson;
	}
	eq: {
		(value: java.lang.Object): org.bson.conversions.Bson;
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	exists: {
		(fieldName: string): org.bson.conversions.Bson;
		(fieldName: string, exists: boolean): org.bson.conversions.Bson;
	}
	gt: {
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	gte: {
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	in: {
		(fieldName: string, values: java.lang.Object[]): org.bson.conversions.Bson;
		(fieldName: string, values: Values | DataSchema | java.lang.Iterable): org.bson.conversions.Bson;
	}
	lt: {
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	lte: {
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	ne: {
		(fieldName: string, value: java.lang.Object): org.bson.conversions.Bson;
	}
	nin: {
		(fieldName: string, values: java.lang.Object[]): org.bson.conversions.Bson;
		(fieldName: string, values: Values | DataSchema | java.lang.Iterable): org.bson.conversions.Bson;
	}
	nor: {
		(filters: org.bson.conversions.Bson[]): org.bson.conversions.Bson;
		(filters: Values | DataSchema | java.lang.Iterable): org.bson.conversions.Bson;
	}
	not: {
		(filter: org.bson.conversions.Bson): org.bson.conversions.Bson;
	}
	or: {
		(filters: org.bson.conversions.Bson[]): org.bson.conversions.Bson;
		(filters: Values | DataSchema | java.lang.Iterable): org.bson.conversions.Bson;
	}
	type: {
		(fieldName: string, type: string): org.bson.conversions.Bson;
		(fieldName: string, type: org.bson.BsonType): org.bson.conversions.Bson;
	}
}
export default MongoFilters;