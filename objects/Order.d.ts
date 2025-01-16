import {} from '../types';

interface Order {
	getColumn: {
		(): string;
	}
	getOrder: {
		(): string;
	}
	setColumn: {
		(column: string): Order;
	}
	setOrder: {
		(order: string): Order;
	}
}
export default Order;