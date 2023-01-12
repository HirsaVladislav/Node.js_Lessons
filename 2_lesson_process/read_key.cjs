const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  console.log(str)
  console.log(key)
  if (key.ctrl && key.name == 'c') process.exit();
});