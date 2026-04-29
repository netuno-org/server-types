import {com, java, org} from '../types';
import Values from './Values';

interface Client {
	chat: {
		(model: string, messages: Values): Values;
		(model: string, messages: Values, options: Values): Values;
		(model: string, messages: Values, options: Values, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): Values;
		(model: string, messages: Values, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): Values;
		(messages: Values): Values;
		(messages: Values, options: Values): Values;
		(messages: Values, options: Values, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): Values;
		(messages: Values, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): Values;
	}
	embeddings: {
		(input: string): Values;
		(model: string, input: string): Values;
		(model: string, input: string, options: Values): Values;
		(model: string, inputs: Values): Values;
		(model: string, inputs: Values, options: Values): Values;
		(inputs: Values): Values;
		(inputs: Values, options: Values): Values;
	}
	getMaxToolLoops: {
		(): int;
	}
	instance: {
		(): com.openai.client.OpenAIClient;
	}
	isInitialized: {
		(): boolean;
	}
	maxToolLoops: {
		(maxLoops: int): boolean;
	}
	mcp: {
		(configs: Values): void;
	}
	model: {
		(model: string): boolean;
	}
	models: {
		(): Values;
	}
	provider: {
		(provider: string): boolean;
	}
	stream: {
		(model: string, messages: Values, onToken: java.util.function.Consumer): void;
		(model: string, messages: Values, onToken: java.util.function.Consumer, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): void;
		(model: string, messages: Values, options: Values, onToken: java.util.function.Consumer): void;
		(model: string, messages: Values, options: Values, onToken: java.util.function.Consumer, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): void;
		(messages: Values, onToken: java.util.function.Consumer): void;
		(messages: Values, onToken: java.util.function.Consumer, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): void;
		(messages: Values, options: Values, onToken: java.util.function.Consumer): void;
		(messages: Values, options: Values, onToken: java.util.function.Consumer, toolCallback: org.netuno.tritao.ai.client.Client$ToolCallback): void;
	}
}
export default Client;