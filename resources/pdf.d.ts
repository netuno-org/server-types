import {com, java, org} from '../types';
import InputStream from '../objects/InputStream';
import Values from '../objects/Values';
import File from '../objects/File';
import OutputStream from '../objects/OutputStream';
import _storage from './storage';

interface PDF {
	areaBreak: {
		(): com.itextpdf.layout.element.AreaBreak;
		(pageSize: com.itextpdf.kernel.geom.PageSize): com.itextpdf.layout.element.AreaBreak;
		(type: string): com.itextpdf.layout.element.AreaBreak;
	}
	border: {
		(border: string): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: int): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: int): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: int): com.itextpdf.layout.borders.Border;
		(border: string, width: double): com.itextpdf.layout.borders.Border;
		(border: string, width: double, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, width: double, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, color: double, width: int): com.itextpdf.layout.borders.Border;
		(border: string, width: float): com.itextpdf.layout.borders.Border;
		(border: string, width: float, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, width: float, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, width: float, opacity: int): com.itextpdf.layout.borders.Border;
		(border: string, width: int): com.itextpdf.layout.borders.Border;
		(border: string, width: int, opacity: double): com.itextpdf.layout.borders.Border;
		(border: string, width: int, opacity: float): com.itextpdf.layout.borders.Border;
		(border: string, width: int, opacity: int): com.itextpdf.layout.borders.Border;
	}
	border3D: {
		(border: string): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: int): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: int): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: int): com.itextpdf.layout.borders.Border3D;
		(border: string, width: double): com.itextpdf.layout.borders.Border3D;
		(border: string, width: double, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, width: double, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, width: double, opacity: int): com.itextpdf.layout.borders.Border3D;
		(border: string, width: float): com.itextpdf.layout.borders.Border3D;
		(border: string, width: float, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, width: float, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, width: float, opacity: int): com.itextpdf.layout.borders.Border3D;
		(border: string, width: int): com.itextpdf.layout.borders.Border3D;
		(border: string, width: int, opacity: double): com.itextpdf.layout.borders.Border3D;
		(border: string, width: int, opacity: float): com.itextpdf.layout.borders.Border3D;
		(border: string, width: int, opacity: int): com.itextpdf.layout.borders.Border3D;
	}
	canvas: {
		(doc: com.itextpdf.kernel.pdf.PdfDocument, pageNum: int): com.itextpdf.kernel.pdf.canvas.PdfCanvas;
		(page: com.itextpdf.kernel.pdf.PdfPage): com.itextpdf.kernel.pdf.canvas.PdfCanvas;
	}
	cell: {
		(): com.itextpdf.layout.element.Cell;
		(rowspan: int, colspan: int): com.itextpdf.layout.element.Cell;
	}
	color: {
		(color: string): com.itextpdf.kernel.colors.Color;
	}
	colorCMYK: {
		(cyan: double, magenta: double, yellow: double, black: double): com.itextpdf.kernel.colors.DeviceCmyk;
		(cyan: float, magenta: float, yellow: float, black: float): com.itextpdf.kernel.colors.DeviceCmyk;
		(cyan: int, magenta: int, yellow: int, black: int): com.itextpdf.kernel.colors.DeviceCmyk;
	}
	colorGray: {
		(value: double): com.itextpdf.kernel.colors.DeviceGray;
		(value: float): com.itextpdf.kernel.colors.DeviceGray;
		(value: int): com.itextpdf.kernel.colors.DeviceGray;
	}
	colorRGB: {
		(red: double, green: double, blue: double): com.itextpdf.kernel.colors.DeviceRgb;
		(red: float, green: float, blue: float): com.itextpdf.kernel.colors.DeviceRgb;
		(red: int, green: int, blue: int): com.itextpdf.kernel.colors.DeviceRgb;
	}
	extract: {
		(content: InputStream): Values;
		(storage: typeof _storage | File | org.netuno.psamata.io.IO): Values;
		(content: InputStream): Values;
	}
	font: {
		(storage: string): com.itextpdf.kernel.font.PdfFont;
		(storage: File): com.itextpdf.kernel.font.PdfFont;
		(storage: File, encoding: boolean): com.itextpdf.kernel.font.PdfFont;
		(storage: File, encoding: string): com.itextpdf.kernel.font.PdfFont;
		(storage: File, encoding: string, embedded: boolean): com.itextpdf.kernel.font.PdfFont;
		(storage: typeof _storage): com.itextpdf.kernel.font.PdfFont;
		(storage: typeof _storage, encoding: boolean): com.itextpdf.kernel.font.PdfFont;
		(storage: typeof _storage, encoding: string): com.itextpdf.kernel.font.PdfFont;
		(storage: typeof _storage, encoding: string, embedded: boolean): com.itextpdf.kernel.font.PdfFont;
	}
	getDocument: {
		(): com.itextpdf.layout.Document;
	}
	getPdfDocument: {
		(): com.itextpdf.kernel.pdf.PdfDocument;
	}
	getPdfReader: {
		(): com.itextpdf.kernel.pdf.PdfReader;
	}
	getPdfWriter: {
		(): com.itextpdf.kernel.pdf.PdfWriter;
	}
	horizontalAlignment: {
		(type: string): com.itextpdf.layout.properties.HorizontalAlignment;
	}
	image: {
		(file: File): com.itextpdf.layout.element.Image;
		(storage: typeof _storage): com.itextpdf.layout.element.Image;
	}
	init: {
		(): PDF;
	}
	line: {
		(type: string, color: com.itextpdf.kernel.colors.Color, width: double): com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer;
		(type: string, color: com.itextpdf.kernel.colors.Color, width: float): com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer;
		(line: string, color: com.itextpdf.kernel.colors.Color, width: int): com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer;
	}
	newDocument: {
		(): com.itextpdf.layout.Document;
		(pageSize: com.itextpdf.kernel.geom.PageSize): com.itextpdf.layout.Document;
		(output: OutputStream): com.itextpdf.layout.Document;
		(output: OutputStream, pageSize: com.itextpdf.kernel.geom.PageSize): com.itextpdf.layout.Document;
		(output: typeof _storage | File | org.netuno.psamata.io.IO, pageSize: com.itextpdf.kernel.geom.PageSize): com.itextpdf.layout.Document;
	}
	openDocument: {
		(path: InputStream): com.itextpdf.layout.Document;
		(input: InputStream, output: OutputStream): com.itextpdf.layout.Document;
		(input: InputStream, output: typeof _storage | File | org.netuno.psamata.io.IO): com.itextpdf.layout.Document;
		(path: typeof _storage | File | org.netuno.psamata.io.IO): com.itextpdf.layout.Document;
		(input: typeof _storage | File | org.netuno.psamata.io.IO, output: OutputStream): com.itextpdf.layout.Document;
		(input: typeof _storage | File | org.netuno.psamata.io.IO, output: typeof _storage | File | org.netuno.psamata.io.IO): com.itextpdf.layout.Document;
	}
	pageSize: {
		(width: float, height: float): com.itextpdf.kernel.geom.PageSize;
		(page: string): com.itextpdf.kernel.geom.PageSize;
	}
	paragraph: {
		(): com.itextpdf.layout.element.Paragraph;
		(text: com.itextpdf.layout.element.Text): com.itextpdf.layout.element.Paragraph;
		(text: string): com.itextpdf.layout.element.Paragraph;
	}
	paragraphArea: {
		(paragraph: com.itextpdf.layout.element.Paragraph): com.itextpdf.kernel.geom.Rectangle;
	}
	setDocument: {
		(document: com.itextpdf.layout.Document): PDF;
	}
	string: {
		(text: number[]): com.itextpdf.kernel.pdf.PdfString;
		(text: string): com.itextpdf.kernel.pdf.PdfString;
		(text: string, encoding: string): com.itextpdf.kernel.pdf.PdfString;
	}
	style: {
		(): com.itextpdf.layout.Style;
	}
	table: {
		(columns: number[]): com.itextpdf.layout.element.Table;
		(columnWidth: number[], largeTable: boolean): com.itextpdf.layout.element.Table;
		(columns: number[]): com.itextpdf.layout.element.Table;
		(columnWidth: number[], largeTable: boolean): com.itextpdf.layout.element.Table;
		(columns: number[]): com.itextpdf.layout.element.Table;
		(columnWidth: number[], largeTable: boolean): com.itextpdf.layout.element.Table;
		(columns: int): com.itextpdf.layout.element.Table;
		(columnWidth: java.util.List): com.itextpdf.layout.element.Table;
		(columnWidth: java.util.List, largeTable: boolean): com.itextpdf.layout.element.Table;
		(columnWidth: Values): com.itextpdf.layout.element.Table;
		(columnWidth: Values, largeTable: boolean): com.itextpdf.layout.element.Table;
	}
	text: {
		(content: string): com.itextpdf.layout.element.Text;
	}
	textAlignment: {
		(type: string): com.itextpdf.layout.properties.TextAlignment;
	}
	toHTML: {
		(content: InputStream): string;
		(content: File): string;
		(content: InputStream): string;
		(content: typeof _storage): string;
	}
	toImage: {
		(input: InputStream, startPage: int, endPage: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(input: InputStream, startPage: int, endPage: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(input: InputStream, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(input: InputStream, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(input: InputStream, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(input: InputStream, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(input: InputStream, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(input: InputStream, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(input: InputStream, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(input: InputStream, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, startPage: int, endPage: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, startPage: int, endPage: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(source: File, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(source: File, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(source: File, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: File, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(source: File, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, startPage: int, endPage: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, startPage: int, endPage: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(source: typeof _storage, pageNumber: int, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(source: typeof _storage, pageNumber: int, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, destinationPath: File, filePrefixName: string, fileExtension: string): void;
		(source: typeof _storage, destinationPath: File, filePrefixName: string, fileExtension: string, dpi: int): void;
		(source: typeof _storage, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string): void;
		(source: typeof _storage, destinationPath: typeof _storage, filePrefixName: string, fileExtension: string, dpi: int): void;
	}
	toImageAsByteArray: {
		(input: InputStream, startPage: int, endPage: int, fileExtension: string, dpi: int): [[B;
		(input: InputStream, pageNumber: int, fileExtension: string): [[B;
		(input: InputStream, pageNumber: int, fileExtension: string, dpi: int): [[B;
		(input: InputStream, fileExtension: string): [[B;
		(input: InputStream, fileExtension: string, dpi: int): [[B;
	}
	toText: {
		(content: InputStream): string;
		(content: File): string;
		(content: InputStream): string;
		(content: typeof _storage): string;
	}
	verticalAlignment: {
		(type: string): com.itextpdf.layout.properties.VerticalAlignment;
	}
}
declare const _pdf: PDF;
export default _pdf;