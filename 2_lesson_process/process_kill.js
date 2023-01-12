import process, { kill } from 'node:process';

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

console.log('process.pid', process.pid);

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100000);

kill(process.pid, 'SIGHUP');