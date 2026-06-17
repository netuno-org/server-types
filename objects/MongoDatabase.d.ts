import {java} from '../types';
import MongoCollection from './MongoCollection';

interface MongoDatabase {
	collection: {
		(name: string): MongoCollection;
	}
	collectionNames: {
		(): java.lang.String[];
	}
	createCollection: {
		(name: string): MongoDatabase;
	}
	getCollection: {
		(name: string): MongoCollection;
	}
	ping: {
		(): MongoDatabase;
	}
}
export default MongoDatabase;