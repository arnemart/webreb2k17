function tokenizer(src) {
  let tokens = [];
  let pos = 0;

  src = src + ' ';

  while (pos < src.length) {
    let c = src[pos];

    // Insert code here

    throw new TypeError('unknown character: ' + c);
  }

  return tokens;
}

module.exports = tokenizer;
