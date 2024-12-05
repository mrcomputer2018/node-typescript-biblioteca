import { randomUUID } from 'node:crypto';

export default abstract class Pessoa {
    private readonly id: string;
    protected nome: string;
    protected endereco: string;

    constructor(nome: string, endereco: string) {
        this.id = randomUUID().substring(0, 8);
        this.nome = nome;
        this.endereco = endereco;
    }

    abstract descricao(): string;
}
