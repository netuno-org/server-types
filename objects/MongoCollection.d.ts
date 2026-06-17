import {com, java, org} from '../types';
import MongoFindIterable from './MongoFindIterable';
import Values from './Values';

interface MongoCollection {
	countDocuments: {
		(filter: org.bson.conversions.Bson): long;
	}
	deleteMany: {
		(filter: org.bson.conversions.Bson): void;
		(filter: org.bson.conversions.Bson, options: com.mongodb.client.model.DeleteOptions): void;
	}
	deleteOne: {
		(filter: org.bson.conversions.Bson): void;
		(filter: org.bson.conversions.Bson, options: com.mongodb.client.model.DeleteOptions): void;
	}
	drop: {
		(): void;
	}
	estimatedDocumentCount: {
		(): long;
	}
	find: {
		(filter: org.bson.conversions.Bson): MongoFindIterable;
	}
	findOneAndReplace: {
		(filter: org.bson.conversions.Bson, data: Values): Values;
		(filter: org.bson.conversions.Bson, data: Values, options: com.mongodb.client.model.FindOneAndReplaceOptions): Values;
	}
	findOneAndUpdate: {
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson): Values;
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson, options: com.mongodb.client.model.FindOneAndUpdateOptions): Values;
	}
	insertMany: {
		(data: Values): java.lang.String[];
		(data: Values, options: com.mongodb.client.model.InsertManyOptions): java.lang.String[];
	}
	insertOne: {
		(data: Values): string;
		(data: Values, options: com.mongodb.client.model.InsertOneOptions): string;
	}
	replaceOne: {
		(filter: org.bson.conversions.Bson, data: Values): long;
		(filter: org.bson.conversions.Bson, data: Values, options: com.mongodb.client.model.ReplaceOptions): long;
	}
	updateMany: {
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson): long;
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson, options: com.mongodb.client.model.UpdateOptions): long;
	}
	updateOne: {
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson): long;
		(filter: org.bson.conversions.Bson, update: org.bson.conversions.Bson, options: com.mongodb.client.model.UpdateOptions): long;
	}
}
export default MongoCollection;