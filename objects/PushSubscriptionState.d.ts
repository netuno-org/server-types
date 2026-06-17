import {} from '../types';

interface PushSubscriptionState {
	active: {
		(): boolean;
	}
	expired: {
		(): boolean;
	}
	isActive: {
		(): boolean;
	}
	isExpired: {
		(): boolean;
	}
}
export default PushSubscriptionState;