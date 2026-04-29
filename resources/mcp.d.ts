import {java, org} from '../types';
import Values from '../objects/Values';

interface MCP {
	addMiddlewares: {
		(middlewares: org.netuno.tritao.resource.MCP$MCPMiddleware[]): void;
	}
	containsTool: {
		(name: string): boolean;
	}
	executeTool: {
		(name: string, input: Values): Values;
	}
	getServerInfo: {
		(): Values;
	}
	init: {
		(): void;
	}
	isEnabled: {
		(): boolean;
	}
	listAvailableTools: {
		(): Values;
	}
	registerTool: {
		(name: string, description: string, schema: Values, execute: java.util.function.Function): void;
	}
}
declare const _mcp: MCP;
export default _mcp;