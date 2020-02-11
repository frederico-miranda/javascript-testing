function arrayAnalysis(array) {
    let object = {
        average: Average(array),
        min: Min(array),
        max: Max(array),
        length: Length(array),
    };
    return object;
}

function Average(array) {
    let average= array.reduce((x, y) => x + y, 0) / array.length;
    return average;
}

function Min(array) {
    let min = Math.min(...array);
    return min;
}

function Max(array) {
    let min = Math.min(...array);
    return min;
}

function Length(array) {
    let length = array.length;
    return length;
}

module.exports =analyze;


