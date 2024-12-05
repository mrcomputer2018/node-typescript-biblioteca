import Pessoa from './Pessoa';

export default class Aluno extends Pessoa {
    private curso: string;

    constructor(nome: string, endereco: string, curso: string) {
        super(nome, endereco);
        this.curso = curso;
    }

    //metodos
    descricao(): string {
        return `Aluno: ${this.nome}, Endereço: ${this.endereco}, Curso: ${this.curso}`;
    }
}
