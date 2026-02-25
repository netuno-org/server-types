import {} from '../types';
import Values from '../objects/Values';

interface User {
	all: {
		(): Values[];
	}
	allByCode: {
		(code: string): Values[];
	}
	allProvidersData: {
		(): Values;
		(userId: int): Values;
	}
	authHistoryForceUnlock: {
		(): void;
		(userId: int): void;
	}
	authHistoryLatest: {
		(): Values;
		(userId: int): Values;
	}
	authHistoryLatestIsLocked: {
		(): boolean;
		(userId: int): boolean;
	}
	checkAuthHistoryConsecutiveFailure: {
		(id: int): boolean;
	}
	code: {
		(): string;
	}
	create: {
		(dataUser: Values): int;
	}
	createIfNotExists: {
		(userData: Values): boolean;
	}
	data: {
		(): Values;
	}
	firstByCode: {
		(code: string): Values;
	}
	firstByMail: {
		(mail: string): Values;
	}
	firstByName: {
		(name: string): Values;
	}
	firstByUser: {
		(user: string): Values;
	}
	get: {
		(id: int): Values;
		(idOrUidOrUsername: string): Values;
	}
	hasProvider: {
		(userId: int, providerCode: string): boolean;
		(providerCode: string): boolean;
	}
	id: {
		(): int;
	}
	load: {
		(): User;
	}
	name: {
		(): string;
	}
	noPassword: {
		(active: boolean): boolean;
		(id: int, active: boolean): boolean;
	}
	password: {
		(id: int, password: string): boolean;
		(password: string): boolean;
	}
	providerData: {
		(userId: int, providerCode: string): Values;
		(providerCode: string): Values;
	}
	providerDataByUid: {
		(uid: string): Values;
	}
	providerLDAP: {
		(active: boolean): boolean;
		(id: int, active: boolean): boolean;
	}
	remove: {
		(id: int): boolean;
	}
	search: {
		(term: string): Values[];
	}
	searchFirst: {
		(term: string): Values;
	}
	setNoPassword: {
		(active: boolean): boolean;
		(id: int, active: boolean): boolean;
	}
	setPassword: {
		(id: int, password: string): boolean;
		(password: string): boolean;
	}
	setProviderLDAP: {
		(active: boolean): boolean;
		(id: int, active: boolean): boolean;
	}
	uid: {
		(): string;
	}
	update: {
		(id: int, userData: Values): boolean;
		(id: int, userData: Values, changePassword: boolean): boolean;
		(userData: Values): boolean;
		(userData: Values, changePassword: boolean): boolean;
	}
	user: {
		(): string;
	}
}
declare const _user: User;
export default _user;