import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");
  const colecoes = db.collection("posts");
  return colecoes.find().toArray();
}

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/posts", async (req, res) => {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});

// comando para rodar o servidor node --watch server.js
// -- watch para ficar observando as alterações no arquivo
