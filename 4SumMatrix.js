function sumMatrix(matrix1){
    
    const row = matrix1.length;
    const col = matrix1[0].length;
    let sum=0
    for (let i = 0; i < matrix1.length; i++) {
        
        for (let j = 0; j < matrix1[i].length; j++) {
    
            sum+=matrix1[i][j];
            
        }
        
    }
    console.log(row);
    console.log(col);
    console.log(sum)

}
sumMatrix([[7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]])