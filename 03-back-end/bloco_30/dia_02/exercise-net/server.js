const net = require('net');

const server = net.createServer((connection) => {
  connections.push(connections);
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });
});

server.getConnections((err, count) => {
  console.log(count);
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});