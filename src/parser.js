function parser(tokens) {
  let pos = 0;

  function walk() {
    let token = tokens[pos];
    let current;
    pos++;

    // Insert code here

    throw new TypeError('Syntax error');
  }

  let program = walk();

  return {
    type: 'program',
    body: program
  };
}

module.exports = parser;
