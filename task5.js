function angka(a) {
    if(a % 2 != 0 && a > 1 ){
        if(a == 3 || a == 5 || a == 7 || a == 11 || a == 13){
            document.write(a + ' bilangan prima')
        }else if(a % 3 == 0 || a % 5 == 0 || a % 7 == 0 || a % 11 == 0){
            document.write(a + ' bukan bilangan prima')
        }else{
            document.write(a + ' bilangan prima')
        }
    }else if( a == 2 ){
        document.write( a + ' bilangan prima')
    }else{
        document.write(a + ' bukan bilangan prima')
    }
    }
    angka(prompt('masukan nilai'))