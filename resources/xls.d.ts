import {java, org} from '../types';
import XLSPosition from '../objects/XLSPosition';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';
import File from '../objects/File';
import InputStream from '../objects/InputStream';
import OutputStream from '../objects/OutputStream';
import _storage from './storage';

interface XLS {
	activeSheet: {
		(index: int): XLS;
		(sheet: org.apache.poi.ss.usermodel.Sheet): XLS;
	}
	addDataTable: {
		(rowIndex: int, colIndex: int, data: java.util.List): XLSPosition;
		(rowIndex: int, colIndex: int, data: java.util.List, vertical: boolean): XLSPosition;
		(rowIndex: int, colIndex: int, data: Values): XLSPosition;
		(rowIndex: int, colIndex: int, data: Values, vertical: boolean): XLSPosition;
		(config: Values | DataSchema | java.util.Map, data: java.util.List): XLSPosition;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: java.util.List): XLSPosition;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: java.util.List, vertical: boolean): XLSPosition;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: Values): XLSPosition;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: Values, vertical: boolean): XLSPosition;
	}
	anchorType: {
		(type: string): org.apache.poi.ss.usermodel.ClientAnchor$AnchorType;
	}
	borderStyle: {
		(type: string): org.apache.poi.ss.usermodel.BorderStyle;
	}
	cell: {
		(rowIndex: int, colIndex: int): org.apache.poi.ss.usermodel.Cell;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int): org.apache.poi.ss.usermodel.Cell;
	}
	cellRangeAddress: {
		(firstRow: int, lastRow: int, firstCol: int, lastCol: int): org.apache.poi.ss.util.CellRangeAddress;
	}
	cellStyle: {
		(): org.apache.poi.ss.usermodel.CellStyle;
	}
	cellStyleFormat: {
		(format: string): org.apache.poi.ss.usermodel.CellStyle;
	}
	color: {
		(color: string): java.lang.Object;
	}
	columnReference: {
		(index: int): string;
		(index: string): int;
	}
	create: {
		(): XLS;
	}
	create2007: {
		(): XLS;
	}
	createSheet: {
		(): org.apache.poi.ss.usermodel.Sheet;
		(name: string): org.apache.poi.ss.usermodel.Sheet;
	}
	fillPattern: {
		(type: string): org.apache.poi.ss.usermodel.FillPatternType;
	}
	font: {
		(): org.apache.poi.ss.usermodel.Font;
	}
	format: {
		(format: string): short;
	}
	getAllSheets: {
		(): java.util.List;
	}
	getCellData: {
		(rowIndex: int, colIndex: int): Values;
		(cell: org.apache.poi.ss.usermodel.Cell): Values;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int): Values;
	}
	getNumberOfSheets: {
		(): int;
	}
	getSheet: {
		(index: int): org.apache.poi.ss.usermodel.Sheet;
		(name: string): org.apache.poi.ss.usermodel.Sheet;
	}
	horizontalAlignment: {
		(type: string): org.apache.poi.ss.usermodel.HorizontalAlignment;
	}
	insertPicture: {
		(sheet: org.apache.poi.ss.usermodel.Sheet, file: File, anchor: org.apache.poi.ss.usermodel.ClientAnchor): org.apache.poi.ss.usermodel.Picture;
		(sheet: org.apache.poi.ss.usermodel.Sheet, storage: typeof _storage, anchor: org.apache.poi.ss.usermodel.ClientAnchor): org.apache.poi.ss.usermodel.Picture;
		(file: File, linha: int, coluna: int): org.apache.poi.ss.usermodel.Picture;
		(file: File, anchor: org.apache.poi.ss.usermodel.ClientAnchor): org.apache.poi.ss.usermodel.Picture;
		(storage: typeof _storage, linha: int, coluna: int): org.apache.poi.ss.usermodel.Picture;
		(storage: typeof _storage, anchor: org.apache.poi.ss.usermodel.ClientAnchor): org.apache.poi.ss.usermodel.Picture;
	}
	mergedRegion: {
		(firstRow: int, lastRow: int, firstCol: int, lastCol: int): int;
		(sheet: org.apache.poi.ss.usermodel.Sheet, firstRow: int, lastRow: int, firstCol: int, lastCol: int): int;
	}
	open: {
		(input: InputStream): XLS;
		(input: InputStream, password: string): XLS;
		(file: File): XLS;
		(file: File, password: string): XLS;
		(input: InputStream): XLS;
		(input: InputStream, password: string): XLS;
		(storage: typeof _storage): XLS;
		(storage: typeof _storage, password: string): XLS;
	}
	output: {
		(fileName: string): void;
	}
	position: {
		(rowIndex: int, colIndex: int): XLSPosition;
	}
	read: {
		(input: InputStream): Values;
		(input: InputStream, hiddenSheets: boolean): Values;
		(input: InputStream, sheetNumber: int): Values;
		(input: InputStream, hiddenSheets: string): Values;
		(input: InputStream, sheetNumber: string, hiddenSheets: boolean): Values;
		(input: InputStream, sheetNumber: string, hiddenSheets: int): Values;
		(input: InputStream, password: string, sheetNumber: int, hiddenSheets: boolean): Values;
		(input: File): Values;
		(input: File, hiddenSheets: boolean): Values;
		(input: File, sheetNumber: int): Values;
		(input: File, sheetNumber: int, hiddenSheets: boolean): Values;
		(input: File, hiddenSheets: string): Values;
		(input: File, sheetNumber: string, hiddenSheets: boolean): Values;
		(input: File, sheetNumber: string, hiddenSheets: int): Values;
		(file: File, password: string, sheetNumber: int, hiddenSheets: boolean): Values;
		(input: typeof _storage): Values;
		(input: typeof _storage, hiddenSheets: boolean): Values;
		(input: typeof _storage, sheetNumber: int): Values;
		(input: typeof _storage, sheetNumber: int, hiddenSheets: boolean): Values;
		(input: typeof _storage, hiddenSheets: string): Values;
		(input: typeof _storage, sheetNumber: string, hiddenSheets: boolean): Values;
		(input: typeof _storage, sheetNumber: string, hiddenSheets: int): Values;
		(storage: typeof _storage, password: string, sheetNumber: int, hiddenSheets: boolean): Values;
	}
	row: {
		(rowIndex: int): org.apache.poi.ss.usermodel.Row;
		(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int): org.apache.poi.ss.usermodel.Row;
	}
	safeSheetName: {
		(nameProposal: string): string;
		(nameProposal: string, replaceChar: char): string;
	}
	save: {
		(output: OutputStream): void;
		(file: File): void;
		(output: OutputStream): void;
		(storage: typeof _storage): void;
	}
	setCellData: {
		(row: int, col: int, data: Values | DataSchema | java.util.Map): XLS;
		(row: int, col: int, data: Values): XLS;
		(cell: org.apache.poi.ss.usermodel.Cell, data: Values | DataSchema | java.util.Map): XLS;
		(cell: org.apache.poi.ss.usermodel.Cell, data: Values): XLS;
		(sheet: org.apache.poi.ss.usermodel.Sheet, row: int, col: int, data: Values | DataSchema | java.util.Map): XLS;
		(sheet: org.apache.poi.ss.usermodel.Sheet, row: int, col: int, data: Values): XLS;
	}
	sheet: {
		(): org.apache.poi.ss.usermodel.Sheet;
	}
	units: {
		(): java.lang.Class;
	}
	validSheetName: {
		(nameProposal: string): boolean;
	}
	verticalAlignment: {
		(type: string): org.apache.poi.ss.usermodel.VerticalAlignment;
	}
	workbook: {
		(): org.apache.poi.ss.usermodel.Workbook;
	}
}
declare const _xls: XLS;
export default _xls;