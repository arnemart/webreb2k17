function generator(ast) {

  function walk(part) {
    switch (part.type) {
    case 'diceExpression':
      return Array.from(Array(parseInt(part.lhs.value, 10))).map(_ => {
        return '(Math.floor(Math.random() * ' + part.rhs.value + ')) + 1';
      }).join(' + ');
      break;

    case 'operatorExpression':
      return '(' + walk(part.lhs) + part.operator + walk(part.rhs) + ')';
      break;

    case 'number':
      return part.value;
      break;
    }
  }

  return walk(ast.body);
}

module.exports = generator;
