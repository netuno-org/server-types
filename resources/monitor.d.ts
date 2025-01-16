import {} from '../types';
import Values from '../objects/Values';

interface Monitor {
	performanceData: {
		(): Values;
	}
	stats: {
		(): void;
	}
}
declare const _monitor: Monitor;
export default _monitor;