import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username !== "admin" || password !== "1234") {
        return res.status(401).json({ erro: "Login inválido" });
    }
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ token });
});

function autenticar(req, res, next) {
    try {
        req.usuario = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ erro: "Token inválido" });
    }
}

app.get("/perfil", autenticar, (req, res) => {
    res.json(req.usuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});