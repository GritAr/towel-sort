
// function towelSort (matrix) {
//   let res = [];
  
//   for(let i = 0; i < matrix.length; i++) {
//     if(i%2 === 0) {
//     res.push(matrix[i]);
//     } else {
//       res.push(matrix[i].reverse())
//     }
//     return res;
//   }
// };

module.exports = function towelSort (matrix = []) {
  return matrix.map((el, i) => i%2 ? el.reverse() : el).flat();
}
