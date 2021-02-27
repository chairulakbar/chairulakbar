//pilih suhu 1
let p = prompt('Pilih suhu : celcius, reamur, farenheit, kelvin')
//input nilai
let a  = parseInt(prompt('masukan nilai'))
//pilih suhu 2
let q = prompt('Pilih suhu : celcius, reamur, farenheit, kelvin')
//hasil konversi
let hasil = '';
if( p == q) {
    hasil = a;
}else if( p == 'celcius' ){
    if( q == 'reamur' ){
        hasil = 4/5*a
    }else if(q == 'farenheit'){
        hasil = 9/5*a+32
    }else if(q == 'kelvin'){
        hasil = a + 273
    }
} else if( p == 'reamur') {
    if( q == 'celcius' ){
        hasil = 5/4*a
    } else if( q == 'farenheit' ){
        hasil = 9/4*a+32
    } else if( q == 'kelvin' ) {
        hasil = 5/4*a+273
    }
} else if( p == 'farenheit') {
    if( q == 'celcius' ) {
        hasil = 5/9*(a-32)
    } else if( q == 'reamur' ){
        hasil = 4/9*(a-32)
    } else if( q == 'kelvin' ){
        hasil = 5/9*(a-32)+273
    }
} else if( p == 'kelvin' ){
    if( q == 'celcius' ) {
        hasil = a-273
    } else if( p == 'farenheit'){
        hasil = 9/5*(a-273)+32
    } else if( p == 'reamur'){
        hasil = 4/5*(a-273)+32
    }  
} else{
    hasil = 'memasukan pilihan yang salah'
}

alert('kamu mengkonversi ' + a + ' ' + p + ' ke ' + q + ' hasilnya adalah ' + hasil + ' ' +  q)