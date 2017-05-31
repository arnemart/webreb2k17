function parser(tokens) {
  let pos = 0;

  function walk() {

  }

  let program = walk();

  return {
    type: 'program',
    body: program
  };
}

module.exports = parser;
