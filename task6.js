function parameter(a){
    for(let i = 0; i < a.length; i++){
        if(a[i+1] % 2 == 0){
            document.write( i + ' adalah angka genap, ')
        }else{
            document.write( i + ' adalah angka ganjil, ')
        }
    }
}    
parameter([1,2,3,4,5,6,7,8])