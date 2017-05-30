function parser(tokens) {
  let pos = 0;

  function walk() {
    let token = tokens[pos];
    let current;
    pos++;

    if (token && token.type == 'number') {
      current = token;
    } else if (token && token.type == 'dice') {
      let parts = token.value.split('d');
      current = {
        type: 'diceExpression',
        lhs: {
          type: 'number',
          value: parts[0] || '1'
        },
        rhs: {
          type: 'number',
          value: parts[1]
        }
      };
    }

    let nextToken = tokens[pos];
    pos++;

    if (nextToken && nextToken.type == 'operator') {
      return {
        type: 'operatorExpression',
        operator: nextToken.value,
        lhs: current,
        rhs: walk()
      };
    } else if (!nextToken) {
      return current;
    }

    throw new TypeError('Syntax error');
  }

  let program = walk();

  return {
    type: 'program',
    body: program
  };
}

module.exports = parser;
