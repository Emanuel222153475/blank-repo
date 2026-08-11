import os from 'os';
import { byteToSize } from './FreeMemeory.mjs';

console.log('System Information:');
console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`free Memory: ${byteToSize(os.freemem())}`);
console.log(`Total Memory: ${byteToSize(os.totalmem())}`);
