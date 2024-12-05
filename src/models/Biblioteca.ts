import Pessoa from './Pessoa';
import ILivro from '../interfaces/ILivro';

interface IEmprestimo {
    livro: ILivro;
    usuario: Pessoa;
    data: Date;
};

export default class Biblioteca {
    private livros: ILivro[] = [];
    private usuarios: Pessoa[] = [];
    private emprestimos: IEmprestimo[] = [];

    //construtor
    constructor(
        livros: ILivro[],
        usuarios: Pessoa[],
        emprestimos: IEmprestimo[],
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
