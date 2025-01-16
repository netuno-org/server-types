import {java, org} from '../types';

interface Service {
	allow: {
		(): void;
	}
	cancel: {
		(): void;
	}
	core: {
		(file: string): boolean;
	}
	defaultEmptyOutput: {
		(): void;
	}
	deny: {
		(): void;
	}
	execute: {
		(file: string): boolean;
	}
	getInstance: {
		(proteu: org.netuno.proteu.Proteu): Service;
	}
	getMethod: {
		(): string;
	}
	getMethods: {
		(): java.util.List;
	}
	getPath: {
		(): string;
	}
	isAllowed: {
		(): boolean;
	}
	isDenied: {
		(): boolean;
	}
	isGeneratingOpenAPIDefinition: {
		(): boolean;
	}
	isMethod: {
		(): boolean;
	}
	isNotFoundDefaultError: {
		(): boolean;
	}
	method: {
		(): string;
	}
	notFoundDefaultError: {
		(): boolean;
		(value: boolean): void;
	}
	path: {
		(): string;
	}
	setNotFoundDefaultError: {
		(value: boolean): void;
	}
	wasCancelled: {
		(): java.lang.Boolean;
	}
}
export default Service;