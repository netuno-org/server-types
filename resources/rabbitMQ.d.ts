import {com} from '../types';
import Values from '../objects/Values';

interface RabbitMQ {
	basicConsume: {
		(settings: Values): RabbitMQ;
	}
	channel: {
		(): com.rabbitmq.client.Channel;
	}
	connection: {
		(): com.rabbitmq.client.Connection;
	}
	connectionFactory: {
		(): com.rabbitmq.client.ConnectionFactory;
	}
	init: {
		(serverName: string): RabbitMQ;
		(serverName: string, connectionName: string): RabbitMQ;
		(serverName: string, connectionName: string, channelName: string): RabbitMQ;
	}
	rpcConsume: {
		(settings: Values): RabbitMQ;
	}
	rpcPublish: {
		(queueName: string, message: string): string;
		(queueName: string, message: string, charset: string): string;
		(queueName: string, message: Values): string;
		(queueName: string, message: Values, charset: string): string;
	}
	serverConfig: {
		(server: string): Values;
	}
	serversConfig: {
		(server: string): Values;
	}
}
declare const _rabbitMQ: RabbitMQ;
export default _rabbitMQ;