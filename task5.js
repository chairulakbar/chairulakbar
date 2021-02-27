function angka(a) {
    if(a % 2 != 0 && a >= 1){
        if(a == 3 || a == 5 || a == 7 || a % 3 != 0 || a % 5 != 0 || a % 7 != 0 ){
        document.write( a + ' adalah bilangan prima')        
    }}else{
        document.write( a + ' adalah bukan bilangan prima')
    }
}
angka(prompt('masukan nilai'))


