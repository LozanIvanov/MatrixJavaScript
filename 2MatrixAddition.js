function addition(matrix1,matrix2){
    
    const matrix3=[];

    for (let i = 0; i < matrix1.length; i++) {
        matrix3[i]=[];
      for (let j = 0; j < matrix1.length; j++) {
        matrix3[i][j]=matrix1[i][j]+matrix2[i][j];
        
      }
        
    }
     matrix3.forEach(e=>console.log(e.join(' ')))
}
addition([[1,2],[3,4]],
    [[2,2],[2,2]])