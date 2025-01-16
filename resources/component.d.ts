import {java, org} from '../types';
import Values from '../objects/Values';

interface Component {
	addDataStructure: {
		(name: string, type: string, size: int): void;
		(name: string, type: string, size: int, readonly: boolean): void;
		(name: string, type: string, size: int, readonly: boolean, index: boolean): void;
		(name: string, type: string, filter: string, size: int): void;
		(name: string, type: string, filter: string, size: int, readonly: boolean): void;
		(name: string, type: string, filter: string, size: int, readonly: boolean, index: boolean): void;
	}
	getConfiguration: {
		(): org.netuno.tritao.com.Configuration;
	}
	getDataStructure: {
		(): java.util.List;
	}
	getDesignData: {
		(): Values;
	}
	getMode: {
		(): string;
	}
	getProperties: {
		(): Values;
	}
	getTableData: {
		(): Values;
	}
	getType: {
		(): string;
	}
	getValues: {
		(): Values;
	}
	isModeEdit: {
		(): boolean;
	}
	isModeEditRestore: {
		(): boolean;
	}
	isRenderEdit: {
		(): boolean;
	}
	isRenderReportForm: {
		(): boolean;
	}
	isRenderSearchForm: {
		(): boolean;
	}
	isRenderSearchResults: {
		(): boolean;
	}
	isRenderView: {
		(): boolean;
	}
	renderDisplayName: {
		(): void;
	}
}
declare const _component: Component;
export default _component;