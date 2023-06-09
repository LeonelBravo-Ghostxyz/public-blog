const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();

const monitor = new Monitor({
  website: 'https://bxyzsecundario.leonelbravo059.repl.co',
  title: 'secundario',
  interval: 5, // minutes
})

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));