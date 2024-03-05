const sumAll = function (start, end) {
    if (start > end) {
        const aux = start;
        start = end;
        end = aux;
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
