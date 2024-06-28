function diagonalMatrix(matrixInput) {
    let left=[];
    let right=[];
    const matrix = matrixInput.map(row => row.split(' ').map(Number));

    for (let i = 0; i < matrix.length; i++) {
        left.push(matrix[i][i]);
        right.push(matrix[matrix.length-1-i][i])
        
    }
    console.log(left.join(' '))
    console.log(right.join(' '))
}
diagonalMatrix(
   [
   "1 2 3 4",
   "3 1 2 4",
   "1 2 1 4",
   "2 2 3 1"])