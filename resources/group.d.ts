import {} from '../types';
import Values from '../objects/Values';

interface Group {
	all: {
		(): Values[];
	}
	allByCode: {
		(codigo: string): Values[];
	}
	code: {
		(): string;
	}
	create: {
		(dadosGrupo: Values): int;
	}
	createIfNotExists: {
		(dadosGrupo: Values): boolean;
	}
	data: {
		(): Values;
	}
	firstByCode: {
		(codigo: string): Values;
	}
	firstByMail: {
		(mail: string): Values;
	}
	firstByName: {
		(nome: string): Values;
	}
	get: {
		(id: int): Values;
		(idOuUid: string): Values;
	}
	id: {
		(): int;
	}
	load: {
		(): Group;
	}
	name: {
		(): string;
	}
	remove: {
		(id: int): boolean;
	}
	search: {
		(termo: string): Values[];
	}
	searchFirst: {
		(termo: string): Values;
	}
	uid: {
		(): string;
	}
	update: {
		(id: int, dadosGrupo: Values): boolean;
		(dadosUtilizador: Values): boolean;
	}
}
declare const _group: Group;
export default _group;