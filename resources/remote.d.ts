import {java} from '../types';
import RemoteResponse from '../objects/RemoteResponse';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Remote {
	acceptJSON: {
		(): Remote;
	}
	alwaysBodyData: {
		(): Remote;
	}
	asBinary: {
		(): Remote;
	}
	asForm: {
		(): Remote;
	}
	asJSON: {
		(): Remote;
	}
	asMultipartFormData: {
		(): Remote;
	}
	asText: {
		(): Remote;
	}
	delete: {
		(): RemoteResponse;
		(url: string): RemoteResponse;
		(url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(url: string, data: Values): RemoteResponse;
		(data: Values | DataSchema | java.util.Map): RemoteResponse;
		(data: Values): RemoteResponse;
	}
	get: {
		(): RemoteResponse;
		(url: string): RemoteResponse;
		(url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(url: string, data: Values): RemoteResponse;
		(data: Values | DataSchema | java.util.Map): RemoteResponse;
		(data: Values): RemoteResponse;
	}
	getAuthorization: {
		(): string;
	}
	getCharset: {
		(): string;
	}
	getConnectTimeout: {
		(): int;
	}
	getContentType: {
		(): string;
	}
	getData: {
		(): Values;
	}
	getDefaultSubmitData: {
		(): string;
	}
	getFormData: {
		(): Values;
	}
	getHeader: {
		(): Values;
	}
	getHostAddress: {
		(host: string): string;
	}
	getQS: {
		(): Values;
	}
	getQueryString: {
		(): Values;
	}
	getReadTimeout: {
		(): int;
	}
	getSOAPAction: {
		(): string;
	}
	getSOAPNS: {
		(): string;
	}
	getSOAPURL: {
		(): string;
	}
	getStatusCode: {
		(): int;
	}
	getURL: {
		(): string;
	}
	getURLPrefix: {
		(): string;
	}
	hostAddress: {
		(host: string): string;
	}
	init: {
		(): Remote;
		(configName: string): Remote;
		(configName: Values): Remote;
	}
	isAlwaysDataBody: {
		(): boolean;
	}
	isBinary: {
		(): boolean;
	}
	isFollowRedirects: {
		(): boolean;
	}
	isForm: {
		(): boolean;
	}
	isJSON: {
		(): boolean;
	}
	isMultipartFormData: {
		(): boolean;
	}
	isText: {
		(): boolean;
	}
	json: {
		(method: string, url: string): RemoteResponse;
		(method: string, url: string, data: string): RemoteResponse;
		(method: string, url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, url: string, data: Values): RemoteResponse;
	}
	patch: {
		(): RemoteResponse;
		(url: string): RemoteResponse;
		(url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(url: string, data: Values): RemoteResponse;
		(data: Values | DataSchema | java.util.Map): RemoteResponse;
		(data: Values): RemoteResponse;
	}
	ping: {
		(host: string): boolean;
		(host: string, timeout: int): boolean;
	}
	portListening: {
		(host: string, port: int): boolean;
	}
	post: {
		(): RemoteResponse;
		(url: string): RemoteResponse;
		(url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(url: string, data: Values): RemoteResponse;
		(data: Values | DataSchema | java.util.Map): RemoteResponse;
		(data: Values): RemoteResponse;
	}
	put: {
		(): RemoteResponse;
		(url: string): RemoteResponse;
		(url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(url: string, data: Values): RemoteResponse;
		(data: Values | DataSchema | java.util.Map): RemoteResponse;
		(data: Values): RemoteResponse;
	}
	setAlwaysBodyData: {
		(alwaysDataBody: boolean): Remote;
	}
	setAuthorization: {
		(authorization: string): Remote;
		(username: string, password: string): Remote;
	}
	setBinary: {
		(binary: boolean): Remote;
	}
	setCharset: {
		(charset: string): Remote;
	}
	setConnectTimeout: {
		(timeout: int): Remote;
	}
	setContentType: {
		(contentType: string): Remote;
	}
	setData: {
		(data: Values): Remote;
	}
	setDefaultSubmitData: {
		(requestHeader: string): Remote;
	}
	setFollowRedirects: {
		(followRedirects: boolean): Remote;
	}
	setFormData: {
		(formData: Values): Remote;
	}
	setHeader: {
		(requestHeader: Values): Remote;
	}
	setQS: {
		(data: Values): Remote;
	}
	setQueryString: {
		(data: Values): Remote;
	}
	setReadTimeout: {
		(timeout: int): Remote;
	}
	setSOAPAction: {
		(soapAction: string): Remote;
	}
	setSOAPNS: {
		(soapNS: string): Remote;
	}
	setSOAPURL: {
		(soapURL: string): Remote;
	}
	setURL: {
		(url: string): Remote;
	}
	setURLPrefix: {
		(url: string): Remote;
	}
	soap11: {
		(soapMethod: string): Values;
		(soapMethod: string, data: Values): Values;
	}
	soap12: {
		(soapMethod: string): Values;
		(soapMethod: string, data: Values): Values;
	}
	submit: {
		(method: string, url: string): RemoteResponse;
		(method: string, url: string, data: string): RemoteResponse;
		(method: string, url: string, querystring: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, url: string, querystring: Values | DataSchema | java.util.Map, contentType: string, data: string): RemoteResponse;
		(method: string, url: string, querystring: Values): RemoteResponse;
		(method: string, url: string, querystring: Values, contentType: string, data: string): RemoteResponse;
	}
	submitForm: {
		(method: string, url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, url: string, data: Values): RemoteResponse;
		(method: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, data: Values): RemoteResponse;
	}
	submitJSON: {
		(method: string, url: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, url: string, data: Values): RemoteResponse;
		(method: string, data: Values | DataSchema | java.util.Map): RemoteResponse;
		(method: string, data: Values): RemoteResponse;
	}
}
declare const _remote: Remote;
export default _remote;