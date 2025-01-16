import {java} from '../types';

interface Crypto {
	aes256Decrypt: {
		(key: string, content: string): string;
	}
	aes256Encrypt: {
		(key: string, content: string): string;
	}
	bcryptCheck: {
		(plaintext: string, hashed: string): boolean;
	}
	bcryptHash: {
		(password: string, salt: string): string;
	}
	bcryptSalt: {
		(): string;
		(content: int): string;
		(content: int, secureRandom: java.security.SecureRandom): string;
	}
	cryptHash: {
		(content: number[]): string;
		(content: number[], salt: string): string;
		(content: string): string;
		(content: string, salt: string): string;
	}
	desDecode: {
		(content: string, data: number[]): string;
		(content: string, data: number[], charset: string): string;
	}
	desDecodeBase64: {
		(content: string, data: string, charset: string): string;
	}
	desEncode: {
		(key: string, content: string): number[];
		(key: string, content: string, charset: string): number[];
	}
	desEncodeBase64: {
		(key: string, content: string, charset: string): string;
	}
	hmac256: {
		(key: number[], content: number[]): number[];
		(key: string, content: string): number[];
	}
	hmac256Base64: {
		(key: number[], content: number[]): string;
		(key: string, content: string): string;
	}
	hmac256Hex: {
		(key: number[], content: number[]): string;
		(key: string, content: string): string;
	}
	md5: {
		(content: string): number[];
	}
	md5Base64: {
		(content: string): string;
	}
	md5Hex: {
		(content: string): string;
	}
	sha256: {
		(content: number[]): string;
		(content: string): string;
	}
	sha256AsBytes: {
		(content: number[]): number[];
		(content: string): number[];
	}
	sha384: {
		(content: number[]): string;
		(content: string): string;
	}
	sha384AsBytes: {
		(content: number[]): number[];
		(content: string): number[];
	}
	sha512: {
		(content: number[]): string;
		(content: string): string;
	}
	sha512AsBytes: {
		(content: number[]): number[];
		(content: string): number[];
	}
}
declare const _crypto: Crypto;
export default _crypto;