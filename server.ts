import fastify from "fastify";

const app = fastify({ logger: true });

app.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})