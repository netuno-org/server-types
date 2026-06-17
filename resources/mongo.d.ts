import {com, org} from '../types';
import MongoDatabase from '../objects/MongoDatabase';
import Values from '../objects/Values';
import MongoFilters from '../objects/MongoFilters';
import MongoUpdates from '../objects/MongoUpdates';

interface Mongo {
	close: {
		(): void;
	}
	database: {
		(name: string): MongoDatabase;
	}
	deleteOptions: {
		(): com.mongodb.client.model.DeleteOptions;
	}
	docToVal: {
		(doc: org.bson.Document): Values;
	}
	document: {
		(): org.bson.Document;
	}
	filters: {
		(): MongoFilters;
	}
	findOneAndReplaceOptions: {
		(): com.mongodb.client.model.FindOneAndReplaceOptions;
	}
	findOneAndUpdateOptions: {
		(): com.mongodb.client.model.FindOneAndUpdateOptions;
	}
	init: {
		(): Mongo;
		(configKeyOrUrl: string): Mongo;
	}
	insertManyOptions: {
		(): com.mongodb.client.model.InsertManyOptions;
	}
	insertOneOptions: {
		(): com.mongodb.client.model.InsertOneOptions;
	}
	replaceOptions: {
		(): com.mongodb.client.model.ReplaceOptions;
	}
	updateOptions: {
		(): com.mongodb.client.model.UpdateOptions;
	}
	updates: {
		(): MongoUpdates;
	}
	valToDoc: {
		(values: Values): org.bson.Document;
	}
}
declare const _mongo: Mongo;
export default _mongo;