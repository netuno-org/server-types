import {org} from '../types';
import Values from './Values';

interface DataItem {
	getCounter: {
		(): int;
	}
	getErrorMessage: {
		(): string;
	}
	getErrorTitle: {
		(): string;
	}
	getField: {
		(): string;
	}
	getFirebaseValues: {
		(): Values;
	}
	getId: {
		(): string;
	}
	getOldRecord: {
		(): Values;
	}
	getRecord: {
		(): Values;
	}
	getRelationItem: {
		(): Values;
	}
	getRelationTable: {
		(): Values;
	}
	getStatus: {
		(): org.netuno.tritao.db.DataItem$Status;
	}
	getStatusType: {
		(): org.netuno.tritao.db.DataItem$StatusType;
	}
	getTable: {
		(): string;
	}
	getUid: {
		(): string;
	}
	getValues: {
		(): Values;
	}
	isDelete: {
		(): boolean;
	}
	isError: {
		(): boolean;
	}
	isFirebase: {
		(): boolean;
	}
	isInsert: {
		(): boolean;
	}
	isNone: {
		(): boolean;
	}
	isOk: {
		(): boolean;
	}
	isProgrammatically: {
		(): boolean;
	}
	isStatusAsDelete: {
		(): boolean;
	}
	isStatusAsDeleted: {
		(): boolean;
	}
	isStatusAsError: {
		(): boolean;
	}
	isStatusAsExists: {
		(): boolean;
	}
	isStatusAsInsert: {
		(): boolean;
	}
	isStatusAsInserted: {
		(): boolean;
	}
	isStatusAsNone: {
		(): boolean;
	}
	isStatusAsNotFound: {
		(): boolean;
	}
	isStatusAsRelations: {
		(): boolean;
	}
	isStatusAsUpdate: {
		(): boolean;
	}
	isStatusAsUpdated: {
		(): boolean;
	}
	isStatusTypeAsError: {
		(): boolean;
	}
	isStatusTypeAsNone: {
		(): boolean;
	}
	isStatusTypeAsOk: {
		(): boolean;
	}
	isUpdate: {
		(): boolean;
	}
	setCounter: {
		(counter: int): DataItem;
	}
	setErrorMessage: {
		(errorMessage: string): DataItem;
	}
	setErrorTitle: {
		(errorTitle: string): DataItem;
	}
	setField: {
		(field: string): DataItem;
	}
	setFirebase: {
		(firebase: boolean): DataItem;
	}
	setFirebaseValues: {
		(firebaseValues: Values): DataItem;
	}
	setId: {
		(id: string): DataItem;
	}
	setProgrammatically: {
		(programmatically: boolean): DataItem;
	}
	setRecord: {
		(record: Values): void;
	}
	setRelationItem: {
		(relationItem: Values): DataItem;
	}
	setRelationTable: {
		(relationTable: Values): DataItem;
	}
	setStatus: {
		(status: org.netuno.tritao.db.DataItem$Status): DataItem;
	}
	setStatusWithError: {
		(): DataItem;
	}
	setTable: {
		(table: string): DataItem;
	}
	setUid: {
		(uid: string): DataItem;
	}
	setValues: {
		(values: Values): DataItem;
	}
}
export default DataItem;