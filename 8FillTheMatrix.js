function FillMatrix(){
   let t=[];
   let c=1
    for (let i = 0; i < 3; i++) {
        t[i]=[];
        for (let j = 0; j < 3; j+=3) {
            t[i][j]=c; 
            c++
            
            
        }
        
    }
   
   
    
    t.forEach(e=>{
        console.log(e)})
}
FillMatrix();