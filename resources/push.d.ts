import {java} from '../types';
import PushSubscriptionState from '../objects/PushSubscriptionState';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Push {
	applicationServerKey: {
		(): string;
	}
	getApplicationServerKey: {
		(): string;
	}
	getPrivateKey: {
		(): string;
	}
	getPublicKey: {
		(): string;
	}
	init: {
		(): Push;
		(configKey: string): Push;
	}
	privateKey: {
		(): string;
	}
	publicKey: {
		(): string;
	}
	send: {
		(payload: string, endpoint: string, p256dh: string, auth: string): PushSubscriptionState;
		(payload: string, endpoint: string, p256dh: string, auth: string, ttl: int, topic: string, urgency: string): PushSubscriptionState;
		(payload: Values | DataSchema | java.util.Map, endpoint: string, p256dh: string, auth: string): PushSubscriptionState;
		(payload: Values | DataSchema | java.util.Map, endpoint: string, p256dh: string, auth: string, ttl: int, topic: string, urgency: string): PushSubscriptionState;
		(data: Values): PushSubscriptionState;
		(payload: Values, endpoint: string, p256dh: string, auth: string): PushSubscriptionState;
		(payload: Values, endpoint: string, p256dh: string, auth: string, ttl: int, topic: string, urgency: string): PushSubscriptionState;
	}
}
declare const _push: Push;
export default _push;