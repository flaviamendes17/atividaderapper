import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Santos",
    idade: 32,
    descricao: ["moreno", "professor", "usa óculos"],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "P.Diddy",
    idade: 54,
    descricao: ["negro", "cantor", "cabelo castanho escuro"],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Eminem",
    idade: 51,
    descricao: ["branco", "rapper", "tatuado"],
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Ashton Kutcher",
    idade: 46,
    descricao: ["branco", " ator", "cabelo castanho claro"],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "50 Cent",
    idade: 49,
    descricao: ["negro", "rapper", "tatuado"],
    envolvimento: false,
  },
];

suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvimento } = req.body;

  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento são obrigatórios!",
    });
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Coloque 'sim' ou 'não'!",
    });
  }
  if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "A idade precisa ser um número inteiro.",
    });
  }

  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvimento,
  };
  suspeitos.push(novoSuspeito);
  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }
  return res.status(200).json(suspeito);
});

suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, envolvimento, descricao } = req.body;
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade, envolvimento sao obrigatorios!",
    });
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvimento",
    });
  }
  if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "Digite um numero inteiro para idade!!",
    });
  }

  suspeito.nome = nome;
  suspeito.idade = idade;
  suspeito.envolvimento = envolvimento;
  suspeito.descricao = descricao;

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  suspeitos = suspeitos.filter((suspect) => suspect.id != id);

  return res.status(200).json({
    message: "suspeito removido com sucesso!",
    suspeito,
  });
});

export default suspeitosRoutes;
