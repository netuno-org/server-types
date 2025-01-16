import {java, org} from '../types';
import Values from './Values';
import File from './File';

interface RemoteResponse {
	bytes: {
		(): number[];
	}
	content: {
		(): java.lang.Object;
	}
	contentType: {
		(): string;
	}
	dataSent: {
		(): Values;
		(dataSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	error: {
		(): java.lang.Throwable;
	}
	file: {
		(): File;
	}
	formDataSent: {
		(): Values;
		(dataSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	getBytes: {
		(): number[];
	}
	getContent: {
		(): java.lang.Object;
	}
	getContentType: {
		(): string;
	}
	getDataSent: {
		(): Values;
	}
	getError: {
		(): java.lang.Throwable;
	}
	getFile: {
		(): File;
	}
	getFormDataSent: {
		(): Values;
	}
	getHeader: {
		(): Values;
	}
	getJSON: {
		(): Values;
	}
	getMethod: {
		(): string;
	}
	getQSSent: {
		(): Values;
	}
	getQueryStringSent: {
		(): Values;
	}
	getStatusCode: {
		(): int;
	}
	getURL: {
		(): string;
	}
	header: {
		(): Values;
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
	isOk: {
		(): boolean;
	}
	isText: {
		(): boolean;
	}
	json: {
		(): Values;
	}
	method: {
		(): string;
		(method: string): RemoteResponse;
	}
	ok: {
		(): boolean;
	}
	qsSent: {
		(): Values;
		(qsSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	queryStringSent: {
		(): Values;
		(qs: Values): org.netuno.psamata.net.Remote$Response;
	}
	setBytes: {
		(bytes: number[]): RemoteResponse;
	}
	setContent: {
		(content: java.lang.Object): RemoteResponse;
	}
	setDataSent: {
		(dataSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	setError: {
		(error: java.lang.Throwable): RemoteResponse;
	}
	setFormDataSent: {
		(dataSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	setHeader: {
		(header: Values): RemoteResponse;
	}
	setMethod: {
		(method: string): RemoteResponse;
	}
	setQSSent: {
		(qsSent: Values): org.netuno.psamata.net.Remote$Response;
	}
	setQueryStringSent: {
		(qs: Values): org.netuno.psamata.net.Remote$Response;
	}
	setStatusCode: {
		(statusCode: int): RemoteResponse;
	}
	setURL: {
		(url: string): org.netuno.psamata.net.Remote$Response;
	}
	statusCode: {
		(): int;
	}
	url: {
		(): string;
	}
}
export default RemoteResponse;