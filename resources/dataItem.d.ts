import {org} from '../types';
import Values from '../objects/Values';

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
	getFieldName: {
		(): string;
	}
	getFieldTitle: {
		(): string;
	}
	getFirebaseValues: {
		(): Values;
	}
	getFormName: {
		(): string;
	}
	getFormTitle: {
		(): string;
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
	getRelationForm: {
		(): Values;
	}
	getRelationItem: {
		(): Values;
	}
	getStatus: {
		(): org.netuno.tritao.db.DataItem$Status;
	}
	getStatusType: {
		(): org.netuno.tritao.db.DataItem$StatusType;
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
	isStatusAsMandatory: {
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
	setFieldName: {
		(fieldName: string): DataItem;
	}
	setFieldTitle: {
		(fieldTitle: string): DataItem;
	}
	setFirebase: {
		(firebase: boolean): DataItem;
	}
	setFirebaseValues: {
		(firebaseValues: Values): DataItem;
	}
	setFormName: {
		(formName: string): DataItem;
	}
	setFormTitle: {
		(formTitle: string): DataItem;
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
	setRelationForm: {
		(relationForm: Values): DataItem;
	}
	setRelationItem: {
		(relationItem: Values): DataItem;
	}
	setStatus: {
		(status: org.netuno.tritao.db.DataItem$Status): DataItem;
	}
	setStatusWithError: {
		(): DataItem;
	}
	setUid: {
		(uid: string): DataItem;
	}
	setValues: {
		(values: Values): DataItem;
	}
}
declare const _dataItem: DataItem;
export default _dataItem;