function Average(array) {
  const average = array.reduce((x, y) => x + y, 0) / array.length;
  return average;
}

function Min(array) {
  const min = Math.min(...array);
  return min;
}

function Max(array) {
  const max = Math.max(...array);
  return max;
}

function Length(array) {
  const { length } = array;
  return length;
}

function analyze(array) {
  if (array.length === 0) {
    return null;
  }
  const object = {
    average: Average(array),
    min: Min(array),
    max: Max(array),
    length: Length(array),
  };
  return object;
}

export default analyze;
