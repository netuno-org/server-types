import {java, org} from '../types';

interface Service {
	allow: {
		(): void;
	}
	cancel: {
		(): void;
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
		(): java.lang.String[];
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
	runCoreScript: {
		(proteu: org.netuno.proteu.Proteu, hili: org.netuno.tritao.hili.Hili, file: string): boolean;
	}
	setNotFoundDefaultError: {
		(value: boolean): void;
	}
	wasCancelled: {
		(): boolean;
	}
}
export default Service;