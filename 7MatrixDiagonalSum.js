function matrixDiagonalSum(input){
    const matrix=input.map(x=>x.split(' ').map(Number));

    let LeftSum=0;
    let RightSum=0;

    for (let i = 0; i < matrix.length; i++) {
        LeftSum+=matrix[i][i];
        RightSum+=matrix[matrix.length-1-i][i];
        
    }
    console.log(LeftSum+ RightSum);
}
matrixDiagonalSum(["1 2 3",
   "4 5 6",
   "7 8 9"])