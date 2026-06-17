import {org} from '../types';
import Values from './Values';

interface PostgreVectorStore {
	add: {
		(collection: string, id: string, embedding: Values, text: string, metadata: Values): void;
		(collection: string, embedding: Values, text: string, metadata: Values): void;
	}
	addBatch: {
		(collection: string, documents: Values): void;
	}
	collectionExists: {
		(collection: string): boolean;
	}
	count: {
		(collection: string): int;
	}
	createCollection: {
		(collection: string, dimensions: int): boolean;
	}
	delete: {
		(collection: string, id: string): void;
	}
	deleteByMetadata: {
		(collection: string, metadataFilter: Values): void;
	}
	deleteCollection: {
		(collection: string): void;
	}
	getAll: {
		(collection: string): Values;
		(collection: string, metadataFilter: Values): Values;
	}
	getProvider: {
		(): string;
	}
	init: {
		(): void;
	}
	isInitialized: {
		(): boolean;
	}
	listCollections: {
		(): Values;
	}
	provider: {
		(provider: string): org.netuno.tritao.ai.vector.VectorStore;
	}
	search: {
		(collection: string, embedding: Values, topK: int): Values;
		(collection: string, embedding: Values, topK: int, filter: Values): Values;
	}
}
export default PostgreVectorStore;