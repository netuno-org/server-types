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
		(content: byte[]): string;
		(content: byte[], salt: string): string;
		(content: string): string;
		(content: string, salt: string): string;
	}
	desDecode: {
		(content: string, data: byte[]): string;
		(content: string, data: byte[], charset: string): string;
	}
	desDecodeBase64: {
		(content: string, data: string, charset: string): string;
	}
	desEncode: {
		(key: string, content: string): byte[];
		(key: string, content: string, charset: string): byte[];
	}
	desEncodeBase64: {
		(key: string, content: string, charset: string): string;
	}
	hmac256: {
		(key: byte[], content: byte[]): byte[];
		(key: string, content: string): byte[];
	}
	hmac256Base64: {
		(key: byte[], content: byte[]): string;
		(key: string, content: string): string;
	}
	hmac256Hex: {
		(key: byte[], content: byte[]): string;
		(key: string, content: string): string;
	}
	md5: {
		(content: string): byte[];
	}
	md5Base64: {
		(content: string): string;
	}
	md5Hex: {
		(content: string): string;
	}
	sha256: {
		(content: byte[]): string;
		(content: string): string;
	}
	sha256AsBytes: {
		(content: byte[]): byte[];
		(content: string): byte[];
	}
	sha384: {
		(content: byte[]): string;
		(content: string): string;
	}
	sha384AsBytes: {
		(content: byte[]): byte[];
		(content: string): byte[];
	}
	sha512: {
		(content: byte[]): string;
		(content: string): string;
	}
	sha512AsBytes: {
		(content: byte[]): byte[];
		(content: string): byte[];
	}
}
declare const _crypto: Crypto;
export default _crypto;