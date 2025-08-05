import {java, javax} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Auth {
	allProvidersConfig: {
		(): Values;
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
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
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
	getJWTGroups: {
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
	isAttempt: {
		(): boolean;
	}
	isAttemptReject: {
		(): boolean;
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
	setAttemptReject: {
		(reject: boolean): Auth;
	}
	setAttemptRejectWithData: {
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	setSignInAbort: {
		(abort: boolean): Auth;
	}
	setSignInAbortWithData: {
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	setSignInExtraData: {
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	signInAbort: {
		(): boolean;
		(abort: boolean): Auth;
	}
	signInAbortWithData: {
		(): Values;
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
	signInExtraData: {
		(): Values;
		(data: java.util.List): Auth;
		(data: Values | DataSchema | java.util.Map): Auth;
		(data: Values): Auth;
	}
}
declare const _auth: Auth;
export default _auth;