import fastify from "fastify";
import { env } from "./env";

const port = env.PORT;
const app = fastify();

app.listen({
  port,
}).then(() => {
  console.log(`Servidor rodando na porta ${port}`);
})
