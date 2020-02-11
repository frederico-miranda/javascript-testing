const ceasar = (plaintext, shift) => {
  const alphabetLength = 26;
  const positiveShift = (alphabetLength + (shift % alphabetLength)) % alphabetLength;

  const codePointLowerA = 'a'.codePointAt(0);
  const codePointUpperA = 'A'.codePointAt(0);

  const cipherDial = {};
  for (let letter = 0; letter < alphabetLength; letter += 1) {
    const cipherCode = (letter + positiveShift) % alphabetLength;

    cipherDial[codePointLowerA + letter] = codePointLowerA + cipherCode;
    cipherDial[codePointUpperA + letter] = codePointUpperA + cipherCode;
  }

  const ciphertext = new Uint32Array(plaintext.length);
  for (let i = 0; i < plaintext.length; i += 1) {
    const codePoint = plaintext.codePointAt(i);
    const cipherCode = cipherDial[codePoint];
    ciphertext[i] = cipherCode !== undefined ? cipherCode : codePoint;
  }

  return String.fromCodePoint(...ciphertext);
};

export default ceasar;
