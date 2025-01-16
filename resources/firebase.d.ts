import {com, java} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Firebase {
	active: {
		(): boolean;
	}
	app: {
		(): com.google.firebase.FirebaseApp;
	}
	auth: {
		(): com.google.firebase.auth.FirebaseAuth;
	}
	config: {
		(): void;
	}
	database: {
		(): com.google.firebase.database.FirebaseDatabase;
	}
	databaseReference: {
		(path: string): com.google.firebase.database.DatabaseReference;
		(path: string, uid: string): com.google.firebase.database.DatabaseReference;
	}
	listener: {
		(ref: com.google.firebase.database.DatabaseReference, url: string): void;
		(path: string, url: string): void;
	}
	removeValue: {
		(ref: com.google.firebase.database.DatabaseReference): void;
		(path: string): void;
		(path: string, uid: string): void;
	}
	setValue: {
		(ref: com.google.firebase.database.DatabaseReference, data: java.util.List): void;
		(ref: com.google.firebase.database.DatabaseReference, data: Values): void;
		(path: string, uid: string, data: java.util.List): void;
		(path: string, uid: string, data: Values | DataSchema | java.util.Map): void;
		(path: string, uid: string, data: Values): void;
		(path: string, data: java.util.List): void;
		(path: string, data: Values | DataSchema | java.util.Map): void;
		(path: string, data: Values): void;
	}
}
declare const _firebase: Firebase;
export default _firebase;