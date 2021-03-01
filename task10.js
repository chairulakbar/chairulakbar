function umur(a){
    if(a >= 0 && a == 1){
        document.write('umur ' + a + ' tahun adalah bayi')
    }else if(a >= 2 && a <= 10 ){
        document.write('umur ' + a + ' tahun adalah anak-anak')
    }else if(a >= 11 && a <= 19 ){
        document.write('umur ' + a + ' tahun adalah remaja')
    }else if(a >= 20 && a <= 60){
        document.write('umur ' + a + ' tahun adalah dewasa')
    }else if(a >= 60){
        document.write('umur ' + a + ' tahun adalah lanjut usia')
    }else{
        document.write('umur ' + a + ' tahun bukan umur manusia') 
    }
}
umur(prompt('masukan umur'))