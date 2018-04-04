const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('hello_world.txt'),
});

rl.on('line', line => {
  // Read that rl.pause() doesn't immediately pause. Could this be why this doesn't work?
  rl.pause();
  setTimeout(() => {
    console.log(line);
    rl.resume();
  }, 2500)
}).on('close', () => {
  console.log('terminating');
  process.exit(0);
})
