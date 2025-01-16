import {org} from '../types';
import SSHConfig from '../objects/SSHConfig';
import Values from '../objects/Values';
import SSHSCP from '../objects/SSHSCP';
import SSHSFTP from '../objects/SSHSFTP';
import SSHSession from '../objects/SSHSession';

interface SSH {
	close: {
		(): void;
	}
	config: {
		(): SSHConfig;
		(config: Values): SSHConfig;
		(config: SSHConfig): SSH;
	}
	connect: {
		(): SSH;
	}
	disconnect: {
		(): SSH;
	}
	enabled: {
		(): boolean;
		(enabled: boolean): SSH;
	}
	getClient: {
		(): org.netuno.psamata.ssh.SSHClient;
	}
	getConfig: {
		(): SSHConfig;
	}
	init: {
		(): SSH;
		(configKey: string): SSH;
		(config: SSHConfig): SSH;
	}
	initSCP: {
		(): SSHSCP;
	}
	initSFTP: {
		(): SSHSFTP;
	}
	initSession: {
		(): SSHSession;
	}
	isEnabled: {
		(): boolean;
	}
	setConfig: {
		(config: SSHConfig): SSH;
	}
	setEnabled: {
		(enabled: boolean): SSH;
	}
}
declare const _ssh: SSH;
export default _ssh;