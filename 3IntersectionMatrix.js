function intersection(matrix1,matrix2) {
     const matrix3=[];

     for (let i = 0; i < matrix1.length; i++) {
        matrix3[i]=[];
        for (let j = 0; j < matrix1[i].length; j++) {
            if(matrix1[i][j] !== matrix2[i][j]){
                matrix3[i][j]='*'
            }
            else{
                matrix3[i][j]=(matrix1[i][j])
            }
            
        }
        
     }
     matrix3.forEach(e=>{
        console.log(e.join(' '))
     })
}
intersection(["a b c d",
    "a b c d",
    "a b c d"],
   ["k b c k",
    "a b g d",
    "a k c d"])