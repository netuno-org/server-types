import {java} from '../types';
import Values from './Values';

interface WSMessage {
	content: {
		(): java.lang.Object;
	}
	getContent: {
		(): java.lang.Object;
	}
	getJSON: {
		(): Values;
	}
	getService: {
		(): string;
	}
	getText: {
		(): string;
	}
	getType: {
		(): string;
	}
	isJSON: {
		(): boolean;
	}
	isText: {
		(): boolean;
	}
	json: {
		(): Values;
	}
	service: {
		(): string;
	}
	text: {
		(): string;
	}
	type: {
		(): string;
	}
	typeJSON: {
		(): boolean;
	}
	typeText: {
		(): boolean;
	}
}
export default WSMessage;