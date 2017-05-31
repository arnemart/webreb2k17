function generator(ast) {

  function walk(part) {
    switch (part.type) {
    case 'diceExpression':
      break;

    case 'operatorExpression':
      break;

    case 'number':
      break;
    }
  }

  return walk(ast.body);
}

module.exports = generator;
