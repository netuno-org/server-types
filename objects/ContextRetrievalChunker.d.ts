import {} from '../types';
import Values from './Values';

interface ContextRetrievalChunker {
	markdown: {
		(markdown: string): Values;
		(markdown: string, chunkSize: int, overlap: int): Values;
	}
	pdf: {
		(pdfText: string): Values;
		(pdfText: string, chunkSize: int, overlapSize: int): Values;
	}
}
export default ContextRetrievalChunker;