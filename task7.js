let d = prompt('masukan nama')
let gol = prompt('masukan golongan \n Contoh : A, B, C, D')
let c = parseInt(prompt('lama bekerja dalam 1 hari'))

if( gol == 'A'){
    if( c*30 > 200 ){
        document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 8000,00' + '<br/> Gaji bulanan : Rp ' + 8000*30 +',00' + '<br/> Lembur : Rp ' + (((c*30)-200)*200) +',00' +'<br/> Total keseluruhan : Rp ' + ((8000*30)+(((c*30)-200)*200)) +',00')
    }else{
        document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 8000,00' + '<br/> Gaji bulanan : Rp ' + 8000*30 +',00' + '<br/> Total keseluruhan : Rp ' + ((8000*30)+',00'))
    }
}else if( gol == 'B'){
	if( c*30 > 200){
    	document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 16000,00' + '<br/> Gaji bulanan : Rp ' + 16000*30 +',00' + '<br/> Lembur : Rp ' + (((c*30)-200)*200) +',00' +'<br/> Total keseluruhan : Rp ' + ((16000*30)+(((c*30)-200)*200)) +',00')
	}else{
        document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 16000,00' + '<br/> Gaji bulanan : Rp ' + 16000*30 +',00' + '<br/> Total keseluruhan : Rp ' + ((16000*30)+',00'))
	}
}else if( gol == 'C'){
	if( c*30 > 200){
    	document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 24000,00' + '<br/> Gaji bulanan : Rp ' + 24000*30 +',00' + '<br/> Lembur : Rp ' + (((c*30)-200)*200) +',00' +'<br/> Total keseluruhan : Rp ' + ((24000*30)+(((c*30)-200)*200)) +',00')
	}else{
        document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 24000,00' + '<br/> Gaji bulanan : Rp ' + 24000*30 +',00' + '<br/> Total keseluruhan : Rp ' + ((24000*30)+',00'))
    }
}else if( gol == 'D'){
	if( c*30 > 200){
    	document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 32000,00' + '<br/> Gaji bulanan : Rp ' + 32000*30 +',00' + '<br/> Lembur : Rp ' + (((c*30)-200)*200) +',00' +'<br/> Total keseluruhan : Rp ' + ((32000*30)+(((c*30)-200)*200)) +',00')
	}else{
        document.write('Nama : ' + d +'<br/> Golongan : ' + gol + '<br/> Gaji per hari : Rp 32000,00' + '<br/> Gaji bulanan : Rp ' + 32000*30 +',00' + '<br/> Total keseluruhan : Rp ' + ((32000*30)+',00'))
    }
}else{
	document.write('Input yang anda masukan salah')
}
