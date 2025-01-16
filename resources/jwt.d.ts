import {io, javax} from '../types';
import Values from '../objects/Values';

interface JWT {
	algorithmES: {
		(bits: int): io.jsonwebtoken.security.SignatureAlgorithm;
	}
	algorithmHS: {
		(bits: int): io.jsonwebtoken.security.MacAlgorithm;
	}
	algorithmPS: {
		(bits: int): io.jsonwebtoken.security.SignatureAlgorithm;
	}
	algorithmRS: {
		(bits: int): io.jsonwebtoken.security.SignatureAlgorithm;
	}
	data: {
		(token: string): Values;
	}
	decode: {
		(token: string): Values;
	}
	enabled: {
		(): boolean;
		(enabled: boolean): JWT;
	}
	encode: {
		(body: Values): string;
		(header: Values, body: Values): string;
	}
	getHMACKeyFromSecret: {
		(secret: string): javax.crypto.SecretKey;
	}
	getKey: {
		(): javax.crypto.SecretKey;
	}
	init: {
		(): JWT;
		(secret: string): JWT;
		(key: javax.crypto.SecretKey): JWT;
	}
	isEnabled: {
		(): boolean;
	}
	key: {
		(): javax.crypto.SecretKey;
		(key: javax.crypto.SecretKey): JWT;
	}
	setEnabled: {
		(enabled: boolean): JWT;
	}
	setHMACKeyFromSecret: {
		(secret: string): JWT;
	}
	setKey: {
		(key: javax.crypto.SecretKey): JWT;
	}
	token: {
		(Values: Values): string;
	}
}
declare const _jwt: JWT;
export default _jwt;