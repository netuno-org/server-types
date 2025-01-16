import {} from '../types';
import OutputStream from '../objects/OutputStream';
import Values from '../objects/Values';
import _storage from './storage';

interface Jasper {
	exportToHtmlFile: {
		(storage: typeof _storage): boolean;
	}
	exportToPdf: {
		(): number[];
	}
	exportToPdfFile: {
		(storage: typeof _storage): boolean;
	}
	exportToPdfStream: {
		(output: OutputStream): boolean;
	}
	init: {
		(): Jasper;
	}
	loadPrinter: {
		(parameters: Values, dataSource: Values[]): boolean;
	}
	setReportFile: {
		(storage: typeof _storage): boolean;
	}
}
declare const _jasper: Jasper;
export default _jasper;