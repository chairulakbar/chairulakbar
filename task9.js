var tulisan = "a, saya suka makan nasi";
var arr = tulisan.split("");
let total = 0;
for(let i = 0; i < arr.length; i++){
	if(arr[i] == 'a'){
		total += arr[i];
	}
}
document.write(total)