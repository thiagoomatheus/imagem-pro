import fastify from "fastify";
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = fastify({ logger: false });

app.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

app.listen({ port: parseInt(process.env.SERVER_PORT!) }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server in ${address}:${process.env.SERVER_PORT} - CRTL+C to quit`);
})