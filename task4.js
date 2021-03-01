function nilai(angka) {
    if(angka >= 86 && angka <= 100){
        document.write('nilai konversi adalah A');
    }else if(angka >= 70 && angka <= 85){
        document.write('nilai konversi adalah B');
    }else if(angka >= 50 && angka <= 69){
        document.write('nilai konversi adalah C');
    }else if(angka >= 30 && angka <= 49){
        document.write('nilai konversi adalah D');
    }else if(angka >= 0 && angka <= 29){
        document.write('nilai konversi adalah E');
    }else{
        document.write('angka ' + angka + ' tidak dapat dikonversi')
    }
}
nilai(prompt ('masukan angka konversi'));