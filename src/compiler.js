let tokenizer = require('./tokenizer');
let parser = require('./parser');
let generator = require('./generator');



let program = '2d6 + 3';

// log(tokenizer(program));

// log(parser(tokenizer(program)));

// log(generator(parser(tokenizer(program))));

// log(eval(generator(parser(tokenizer(program)))));
























































































function log(o) {
  console.log("\n" + JSON.stringify(o, null, 2) + "\n");
}
