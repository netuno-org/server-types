import {org} from '../types';
import InputStream from '../objects/InputStream';
import File from '../objects/File';
import _storage from './storage';

interface HTML {
	clean: {
		(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist): string;
		(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist, outputSettings: org.jsoup.nodes.Document$OutputSettings): string;
		(bodyHtml: string, safelist: org.jsoup.safety.Safelist): string;
	}
	connect: {
		(url: string): org.jsoup.Connection;
	}
	documentOutputSettings: {
		(): org.jsoup.nodes.Document$OutputSettings;
	}
	isValid: {
		(bodyHtml: string, safelist: org.jsoup.safety.Safelist): boolean;
	}
	newSession: {
		(): org.jsoup.Connection;
	}
	parse: {
		(input: InputStream, baseUri: string, charset: string): org.jsoup.nodes.Document;
		(content: string): org.jsoup.nodes.Document;
		(file: File, baseUri: string, charset: string): org.jsoup.nodes.Document;
		(storage: typeof _storage, baseUri: string, charset: string): org.jsoup.nodes.Document;
	}
	parseBodyFragment: {
		(bodyHtml: string): org.jsoup.nodes.Document;
		(bodyHtml: string, baseUri: string): org.jsoup.nodes.Document;
	}
	parseURL: {
		(url: string): org.jsoup.nodes.Document;
		(url: string, timeoutMillis: int): org.jsoup.nodes.Document;
	}
	safelist: {
		(): org.jsoup.safety.Safelist;
		(type: string): org.jsoup.safety.Safelist;
		(copy: org.jsoup.safety.Safelist): org.jsoup.safety.Safelist;
	}
}
declare const _html: HTML;
export default _html;