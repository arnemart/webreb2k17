function parser(tokens) {
  let pos = 0;

  function walk() {
    let token = tokens[pos];
    let current;
    pos++;



    throw new TypeError('Syntax error');
  }

  let program = walk();

  return {
    type: 'program',
    body: program
  };
}

module.exports = parser;
