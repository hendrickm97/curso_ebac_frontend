const alunos = [
  { nome: "Bruno", nota: 10 },
  { nome: "Julia", nota: 4 },
  { nome: "Maria", nota: 6 },
  { nome: "Luan", nota: 2 },
  { nome: "Eusébio", nota: 8 },
  { nome: "Larissa", nota: 8 },
  { nome: "Roberto", nota: 0 },
];

const alunosAprovados = alunos.filter((aluno) => {
  if (aluno.nota >= 6) {
    return aluno;
  }
});

console.log(alunosAprovados);
