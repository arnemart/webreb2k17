let tokenizer = require('./tokenizer');
let parser = require('./parser');
let generator = require('./generator');


let program = '2d6 + 10';

console.log(tokenizer(program));

// console.log(parser(tokenizer(program)));

// console.log(generator(parser(tokenizer(program))));

// console.log(eval(generator(parser(tokenizer(program)))));
