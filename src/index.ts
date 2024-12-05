import ILivro from './interfaces/ILivro';
import Aluno from './models/Aluno';
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
    título: "O mundo dos livros",
    autor: "john secada",
    gênero: "ficção",
    estoque: 1000
}

console.log(livro)
