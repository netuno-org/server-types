import {java, org} from '../types';
import Values from './Values';

interface MongoFindIterable {
	all: {
		(): Values[];
	}
	first: {
		(): Values;
	}
	forEach: {
		(consumer: java.util.function.Consumer): MongoFindIterable;
		(func: org.graalvm.polyglot.Value): MongoFindIterable;
	}
	limit: {
		(limit: int): MongoFindIterable;
	}
	projection: {
		(sort: org.bson.conversions.Bson): MongoFindIterable;
	}
	skip: {
		(skip: int): MongoFindIterable;
	}
	sort: {
		(sort: org.bson.conversions.Bson): MongoFindIterable;
	}
}
export default MongoFindIterable;