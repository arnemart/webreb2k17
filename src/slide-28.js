function generator(ast) {

  function walk(part) {
    switch (part.type) {
    case 'diceExpression':
      return Array(parseInt(part.lhs.value, 10))
        .fill(`Math.floor(Math.random() * ${part.rhs.value}) + 1`)
        .join(' + ');
      break;

    case 'operatorExpression':
      return `( ${walk(part.lhs)} ${part.operator} ${walk(part.rhs)} )`;
      break;

    case 'number':
      break;
    }
  }

  return walk(ast.body);
}

module.exports = generator;
