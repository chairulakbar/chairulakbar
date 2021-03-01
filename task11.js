
function average(n){
    let total = 0;
    for(let i = 0; i < n.length; i++){
        total  += n[i];
    } 
    return total/n.length
}
document.write('nilai rata rata = '+ average([80,45,30,45,70,70,80,90,91,88,80,83]))

let a =[80,45,30,45,70,70,80,90,91,88,80,83]
document.write('<br/>' +'nilai minimum = ' + Math.min(...a))
document.write('<br/>' +'nilai maksimum = ' + Math.max(...a))
