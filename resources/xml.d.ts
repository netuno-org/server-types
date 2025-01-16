import {javax, org} from '../types';
import InputStream from '../objects/InputStream';
import File from '../objects/File';
import OutputStream from '../objects/OutputStream';
import _storage from './storage';

interface XML {
	builder: {
		(): javax.xml.parsers.DocumentBuilder;
	}
	create: {
		(): XML;
	}
	factory: {
		(): javax.xml.parsers.DocumentBuilderFactory;
	}
	nodeType: {
		(tipo: string): short;
	}
	output: {
		(documento: org.w3c.dom.Document): void;
		(documento: org.w3c.dom.Document, ficheiroNome: string): void;
	}
	parse: {
		(fluxoEntrada: InputStream): org.w3c.dom.Document;
		(conteudo: string): org.w3c.dom.Document;
		(conteudo: string, charset: string): org.w3c.dom.Document;
		(ficheiro: File): org.w3c.dom.Document;
	}
	save: {
		(documento: org.w3c.dom.Document, fluxoSaida: OutputStream): void;
		(documento: org.w3c.dom.Document, ficheiro: File): void;
		(documento: org.w3c.dom.Document, storage: typeof _storage): void;
	}
	toString: {
		(): string;
		(documento: org.w3c.dom.Document): string;
	}
}
declare const _xml: XML;
export default _xml;