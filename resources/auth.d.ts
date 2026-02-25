import {java, javax} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Auth {
	allProvidersConfig: {
		(): Values;
	}
	altchaAdminEnabled: {
		(): boolean;
		(enabled: boolean): Auth;
	}
	altchaEnabled: {
		(): boolean;
		(enabled: boolean): Auth;
	}
	attempt: {
		(): boolean;
	}
	attemptReject: {
		(): boolean;
		(reject: boolean): Auth;
	}
	attemptRejectWithData: {
		(): Values;
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	attemptsEnabled: {
		(): boolean;
		(attemptsEnabled: boolean): Auth;
	}
	attemptsInterval: {
		(): int;
		(attemptsInterval: int): Auth;
	}
	attemptsMaxFails: {
		(): int;
		(attemptsMaxFails: int): Auth;
	}
	check: {
		(password: string): boolean;
		(username: string, password: string): boolean;
	}
	checkUserInJWTGroups: {
		(userId: int): boolean;
	}
	crypt: {
		(username: string, password: string): string;
	}
	getAllProvidersConfig: {
		(): Values;
	}
	getAttemptRejectWithData: {
		(data: Values): Values;
	}
	getJWTAccessExpires: {
		(): int;
	}
	getJWTGroups: {
		(): Values;
	}
	getJWTKey: {
		(): javax.crypto.SecretKey;
	}
	getJWTRefreshExpires: {
		(): int;
	}
	getJWTSignInData: {
		(): Values;
	}
	getProviderConfig: {
		(providerCode: string): Values;
	}
	getSignInAbortWithData: {
		(data: Values): Values;
	}
	getSignInExtraData: {
		(data: Values): Values;
	}
	isAdmin: {
		(): boolean;
	}
	isAltchaAdminEnabled: {
		(): boolean;
	}
	isAltchaEnabled: {
		(): boolean;
	}
	isAttempt: {
		(): boolean;
	}
	isAttemptReject: {
		(): boolean;
	}
	isAttemptsEnabled: {
		(): boolean;
	}
	isAttemptsInterval: {
		(): int;
	}
	isAuthenticated: {
		(): boolean;
	}
	isDev: {
		(): boolean;
	}
	isJWT: {
		(): boolean;
	}
	isJWTEnabled: {
		(): boolean;
	}
	isProviderEnabled: {
		(providerCode: string): boolean;
	}
	isSession: {
		(): boolean;
	}
	isSignInAbort: {
		(): boolean;
	}
	jwtAccessExpires: {
		(): int;
	}
	jwtCheckToken: {
		(token: string): boolean;
	}
	jwtCheckTokenDataExpiration: {
		(dbToken: Values): boolean;
	}
	jwtCreateAccessToken: {
		(userId: int, contextData: Values): Values;
		(userId: Values): Values;
	}
	jwtDBRecord: {
		(token: string): Values;
	}
	jwtData: {
		(): Values;
	}
	jwtEnabled: {
		(): boolean;
		(enabled: boolean): Auth;
	}
	jwtGroups: {
		(): Values;
	}
	jwtInvalidateToken: {
		(): boolean;
		(token: string): boolean;
	}
	jwtKey: {
		(): javax.crypto.SecretKey;
	}
	jwtRefreshAccessToken: {
		(refreshToken: string): Values;
	}
	jwtRefreshExpires: {
		(): int;
	}
	jwtSignIn: {
		(userId: int, contextData: Values): Auth;
	}
	jwtSignInData: {
		(): Values;
	}
	jwtToken: {
		(): string;
	}
	jwtTokenCheck: {
		(): boolean;
	}
	load: {
		(): Auth;
	}
	logout: {
		(): Auth;
	}
	providerConfig: {
		(providerCode: string): Values;
	}
	providerEnabled: {
		(providerCode: string): boolean;
	}
	setAltchaAdminEnabled: {
		(enabled: boolean): Auth;
	}
	setAltchaEnabled: {
		(enabled: boolean): Auth;
	}
	setAttemptReject: {
		(reject: boolean): Auth;
	}
	setAttemptRejectWithData: {
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	setAttemptsEnabled: {
		(enabled: boolean): Auth;
	}
	setAttemptsInterval: {
		(attemptsInterval: int): Auth;
	}
	setJWTEnabled: {
		(enabled: boolean): Auth;
	}
	setJWTSignIn: {
		(userId: int, contextData: Values): Auth;
	}
	setSignInAbort: {
		(abort: boolean): Auth;
	}
	setSignInAbortWithData: {
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	setSignInExtraData: {
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	signInAbort: {
		(): boolean;
		(abort: boolean): Auth;
	}
	signInAbortWithData: {
		(): Values;
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	signInExtraData: {
		(): Values;
		(data: any[]): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
}
declare const _auth: Auth;
export default _auth;