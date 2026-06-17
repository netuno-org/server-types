import {java, org} from '../types';

interface MongoUpdates {
	push: {
		(name: string, o: java.lang.Object): org.bson.conversions.Bson;
	}
	rename: {
		(name: string, newName: string): org.bson.conversions.Bson;
	}
	set: {
		(name: string, o: java.lang.Object): org.bson.conversions.Bson;
	}
	unset: {
		(name: string): org.bson.conversions.Bson;
	}
}
export default MongoUpdates;