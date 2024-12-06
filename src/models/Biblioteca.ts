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

    emprestarLivro(livro: ILivro, usuario: Pessoa): void {
        //verificar se livro existe
        const livroIndex = this.livros.findIndex(l => l.titulo === livro.titulo)

        if (livroIndex === -1) {
            throw new Error('Livro não encontrado');
        }

        //verificar se usuario existe
        const usuarioIndex = this.usuarios.findIndex(u => u.getNome() === usuario.getNome())

        if (usuarioIndex === -1) {
            throw new Error('Usuário não encontrado');
        }

        //verificar se livro está disponível
        this.livros.map(l => {
            if (l.titulo === livro.titulo && l.estoque === 0) {
                throw new Error('Livro não disponível');
            }
            else {
                l.estoque -= 1;
            }
        })

        this.emprestimos.push({
            livro,
            usuario,
            data: new Date(),
        });

    }

    getDetalhesLivros(): string { 
        return this.livros.map(l => {
            return `Título: ${l.titulo}, Autor: ${l.autor}, Gênero: ${l.gênero}, Estoque: ${l.estoque}`;
        }).join('\n');
    }

    getDetalhesEmprestimos(): string {
        return this.emprestimos.map(e => {
            return `Livro: ${e.livro.titulo}, Usuário: ${e.usuario.getNome()}, Data: ${e.data}`;
        }).join('\n');
    }

    /* - Métodos:
    - Empréstimos e devoluções.
    - Relatórios. */
}
