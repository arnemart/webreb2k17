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


    let numOrD = /[0-9dD]/;

    if (numOrD.test(c)) {

    }

    throw new TypeError('unknown character: ' + c);
  }

  return tokens;
}

module.exports = tokenizer;
