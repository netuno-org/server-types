import {jakarta} from '../types';
import Values from '../objects/Values';
import WSMessage from '../objects/WSMessage';

interface WS {
	allSessionsEndpoints: {
		(): Values;
	}
	awaitStream: {
		(): boolean;
	}
	binaryStreamed: {
		(): number[];
	}
	broadcast: {
		(endpointName: string, data: Values): void;
	}
	broadcastAsService: {
		(endpointName: string, path: string, message: Values): void;
		(endpointName: string, message: Values): void;
	}
	broadcastBinary: {
		(endpointName: string, content: number[]): void;
		(endpointName: string, path: string, content: number[]): void;
	}
	broadcastService: {
		(endpointName: string, path: string, message: Values): boolean;
		(endpointName: string, message: Values): boolean;
	}
	broadcastText: {
		(endpointName: string, message: string): void;
		(endpointName: string, path: string, message: string): void;
	}
	close: {
		(): boolean;
		(sessionId: string): boolean;
	}
	closeCode: {
		(): string;
	}
	closeData: {
		(): Values;
	}
	closeReason: {
		(): string;
	}
	closeSession: {
		(id: string): boolean;
		(id: string, reason: string, message: string): boolean;
	}
	config: {
		(): Values;
	}
	data: {
		(): Values;
		(id: string): Values;
	}
	fullPath: {
		(): string;
		(id: string): string;
	}
	getAllSessionsEndpoints: {
		(): Values;
	}
	getCloseCode: {
		(): string;
	}
	getCloseData: {
		(): Values;
	}
	getCloseReason: {
		(): string;
	}
	getConfig: {
		(): Values;
	}
	getData: {
		(): Values;
		(id: string): Values;
	}
	getFullPath: {
		(): string;
		(id: string): string;
	}
	getMessage: {
		(): WSMessage;
	}
	getPath: {
		(): Values;
		(id: string): Values;
	}
	getQS: {
		(): Values;
	}
	getSession: {
		(): jakarta.websocket.Session;
		(id: string): jakarta.websocket.Session;
	}
	getSessionEndpoint: {
		(): Values;
		(id: string): Values;
	}
	getSessionId: {
		(): string;
	}
	isBinaryStreamed: {
		(): boolean;
	}
	isClose: {
		(): boolean;
	}
	isConnect: {
		(): boolean;
	}
	isStream: {
		(): boolean;
	}
	isTextStreamed: {
		(): boolean;
	}
	message: {
		(): WSMessage;
	}
	path: {
		(): Values;
		(id: string): Values;
	}
	qs: {
		(): Values;
	}
	send: {
		(content: string): boolean;
		(sessionId: string, content: string): boolean;
		(sessionId: string, content: Values): boolean;
		(content: Values): boolean;
	}
	sendAsService: {
		(sessionId: string, message: Values): boolean;
		(message: Values): boolean;
	}
	sendBinary: {
		(content: number[]): boolean;
		(sessionId: string, content: number[]): boolean;
	}
	sendService: {
		(sessionId: string, message: Values): boolean;
		(message: Values): boolean;
	}
	sendText: {
		(content: string): boolean;
		(sessionId: string, content: string): boolean;
	}
	session: {
		(): jakarta.websocket.Session;
		(id: string): jakarta.websocket.Session;
	}
	sessionEndpoint: {
		(): Values;
		(id: string): Values;
	}
	sessionId: {
		(): string;
	}
	textStreamed: {
		(): string;
		(charset: string): string;
	}
}
declare const _ws: WS;
export default _ws;