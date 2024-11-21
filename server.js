import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// comando para rodar o servidor node --watch server.js
// -- watch para ficar observando as alterações no arquivo
