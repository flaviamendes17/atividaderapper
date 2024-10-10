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

planetasRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
export default suspeitosRoutes;
