import {org} from '../types';
import Values from './Values';

interface FileVectorStore {
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
	deleteCollection: {
		(collection: string): void;
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
export default FileVectorStore;