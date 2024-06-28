function subMatrix(matrix1){
    let sum=0;
    const matrix = matrix1.map(row => row.split(' ').map(Number));
    let newMatrix=[];
    
    for (let i = 0; i < matrix.length-1; i++) {
        let temp=0;
        for (let j = 0; j < matrix[i].length-1; j++) {
         temp=  matrix[i][j]+matrix[i+1][j]+matrix[i][j+1]+matrix[i+1][j+1]
           
         if(temp>=sum){
            sum=temp
            newMatrix=[
                [matrix[i][j], matrix[i][j+1]],
                [matrix[i+1][j], matrix[i+1][j+1]]
        ]
            
            
         }
            
            
        }
        
    }
    console.log(sum)
    newMatrix.forEach(e=>console.log(e.join(' ')))
}
subMatrix(["10 11 12 13",
           "14 15 16 17"]);
        