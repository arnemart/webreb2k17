function tokenizer(src) {
  let tokens = [];
  let pos = 0;

  src = src + ' ';

  while (pos < src.length) {
    let c = src[pos];

    if (c == '+' || c == '-') {
      tokens.push({
        type: 'operator',
        value: c
      });
      pos++;
      continue;
    }

    throw new TypeError('unknown character: ' + c);
  }

  return tokens;
}

module.exports = tokenizer;
