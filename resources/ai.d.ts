import {org} from '../types';
import Client from '../objects/Client';
import ContextRetrievalChunker from '../objects/ContextRetrievalChunker';
import Values from '../objects/Values';

interface AI {
	client: {
		(): Client;
		(provider: string): Client;
	}
	contextRetrievalChunker: {
		(): ContextRetrievalChunker;
	}
	init: {
		(): AI;
	}
	vector: {
		(): org.netuno.tritao.ai.vector.VectorStore;
		(provider: string): org.netuno.tritao.ai.vector.VectorStore;
	}
	vectorConfig: {
		(name: string): Values;
	}
}
declare const _ai: AI;
export default _ai;