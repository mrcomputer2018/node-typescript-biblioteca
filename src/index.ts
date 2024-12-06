import ILivro from './interfaces/ILivro';
import Aluno from './models/Aluno';
import Biblioteca from './models/Biblioteca';
import Professor from './models/Professor';

const aluno = new Aluno(
    'João Lucas',
    'Rua das flores,89',
    'Engenharia de Software',
);

console.log(aluno.descricao()); // Aluno: João, Endereço: 20, Curso: undefined

const professor = new Professor(
    'Marcelo Carlos',
    'Rua das camelias, 312',
    'Doutor',
    8000,
);

console.log(professor.descricao());

const livro: ILivro = {
    titulo: "O mundo dos livros",
    autor: "john secada",
    gênero: "ficção",
    estoque: 1000
}

console.log(livro)

const biblioteca = new Biblioteca([], [], []);

biblioteca.cadastrarLivro(livro);
biblioteca.cadastrarUsuario(aluno);
biblioteca.cadastrarUsuario(professor);
biblioteca.emprestarLivro(livro, aluno);
biblioteca.emprestarLivro(livro, professor);
console.log(biblioteca.getDetalhesLivros()); 
// Título: O mundo dos livros, Autor: john secada, Gênero: ficção, Estoque: 998
console.log(biblioteca.getDetalhesEmprestimos());
