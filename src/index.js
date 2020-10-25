
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let finalArray = [];
    matrix ?  matrix.forEach((e,i) => e.length > 0 ? (!(i % 2) ? e.forEach(b => finalArray.push(b)) : e.reverse().forEach(c => finalArray.push(c))) : console.log("gg")) : "";
    return finalArray;
}
