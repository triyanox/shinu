const Shinu = require('../../dist/index').Shinu;

const shinu = new Shinu();
shinu.start();

process.kill(process.pid, 'SIGINT');
