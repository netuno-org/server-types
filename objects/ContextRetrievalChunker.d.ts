import {} from '../types';
import Values from './Values';

interface ContextRetrievalChunker {
	markdown: {
		(markdown: string): Values;
		(markdown: string, chunkSize: int, overlap: int): Values;
	}
}
export default ContextRetrievalChunker;