import { arch, argv, cwd } from 'node:process';


// We are printing our kind operating system CPU.  
console.log(arch);

// Get difference arguments from console. 
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

// Memory usage form one process 
console.log(process.memoryUsage());

console.log(`Current directory: ${cwd()}`);