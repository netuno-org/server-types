import {java, org} from '../types';
import _storage from './storage';

interface CSV {
	format: {
		(formatName: string): org.apache.commons.csv.CSVFormat;
	}
	parser: {
		(reader: java.io.Reader): org.apache.commons.csv.CSVParser;
		(reader: java.io.Reader, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVParser;
		(content: string, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVParser;
		(storage: typeof _storage): org.apache.commons.csv.CSVParser;
		(storage: typeof _storage, charset: string): org.apache.commons.csv.CSVParser;
		(storage: typeof _storage, charset: string, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVParser;
		(reader: typeof _storage, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVParser;
		(storage: typeof _storage, format: org.apache.commons.csv.CSVFormat, characterOffset: long, recordNumber: long): org.apache.commons.csv.CSVParser;
	}
	printer: {
		(writer: java.io.Writer): org.apache.commons.csv.CSVPrinter;
		(writer: java.io.Writer, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVPrinter;
		(writer: typeof _storage): org.apache.commons.csv.CSVPrinter;
		(writer: typeof _storage, format: org.apache.commons.csv.CSVFormat): org.apache.commons.csv.CSVPrinter;
	}
}
declare const _csv: CSV;
export default _csv;