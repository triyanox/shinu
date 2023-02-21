const Shinu = require('../../dist/index').default;

const shinu = new Shinu();
shinu.start();

process.kill(process.pid, 'SIGINT');
