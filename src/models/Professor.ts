import Pessoa from './Pessoa';

export default class Professor extends Pessoa {
    private titulacao: string;
    private salario: number;

    constructor(
        nome: string,
        endereco: string,
        titulacao: string,
        salario: number,
    ) {
        super(nome, endereco);
        this.titulacao = titulacao;
        this.salario = salario;
    }

    //metodos
    descricao(): string {
        return `Professor: ${this.nome}, Endereço: ${this.endereco}, Titulação: ${this.titulacao}, Salário: Rs${this.salario}`;
    }
}
