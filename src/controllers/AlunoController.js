import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rau',
      sobrenome: 'Silva',
      email: 'rau@gmail.com',
      idade: 20,
      peso: 57,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new AlunoController();
