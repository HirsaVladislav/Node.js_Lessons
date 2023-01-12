import {cpuUsage} from 'node:process';

const startUsage = cpuUsage();

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(cpuUsage(startUsage));