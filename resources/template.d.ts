import {java} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Template {
	get: {
		(name: string): string;
		(name: string, data: Values | DataSchema | java.util.Map): string;
		(name: string, data: Values): string;
	}
	getOutput: {
		(name: string): string;
		(name: string, data: Values | DataSchema | java.util.Map): string;
		(name: string, data: Values): string;
	}
	init: {
		(): Template;
	}
	initCore: {
		(): Template;
	}
	out: {
		(name: string): void;
		(name: string, data: Values | DataSchema | java.util.Map): void;
		(name: string, data: Values): void;
	}
	output: {
		(name: string): void;
		(name: string, data: Values | DataSchema | java.util.Map): void;
		(name: string, data: Values): void;
	}
}
declare const _template: Template;
export default _template;