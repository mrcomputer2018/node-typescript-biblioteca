import Pessoa from './Pessoa';
import ILivro from '../interfaces/ILivro';

type Emprestimo = {
    livro: ILivro;
    usuario: Pessoa;
    data: Date;
};

export default class Biblioteca {
    private livros: ILivro[];
    private usuarios: Pessoa[];
    private emprestimos: Emprestimo[] = [];

    //construtor
    constructor(
        livros: ILivro[],
        usuarios: Pessoa[],
        emprestimos: Emprestimo[],
    ) {
        this.livros = livros;
        this.usuarios = usuarios;
        this.emprestimos = emprestimos;
    }

    //metodos
    cadastrarLivro(livro: ILivro): void {
        this.livros.push(livro);
    }

    cadastrarUsuario(usuario: Pessoa): void {
        this.usuarios.push(usuario);
    }
    /* - Métodos:
    - Empréstimos e devoluções.
    - Relatórios. */
}
