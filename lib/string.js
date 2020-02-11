export
function reverseString(string) {
  let strReverse = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    strReverse += string[i];
  }
  return strReverse;
}

export
function capitalize(string) {
  const capital = string.split('');
  if (capital.length > 0) {
    capital[0] = capital[0].toUpperCase();
    return capital.join('');
  }

  return '';
}
