import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Santos",
    idade: 32,
    descricao: ["moreno", " tem barba", "usa óculos"],
    envolvimento: true,
    },
]