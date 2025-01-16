import {} from '../types';

interface UID {
	generate: {
		(): string;
	}
}
declare const _uid: UID;
export default _uid;