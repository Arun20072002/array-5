document.write("how many numbers divisible in 3 and 5"+"<br>")
document.write("-------------------------------------"+"<br>")

var a=[10,3,5,2,7,66,47]
var b=[];
for(let i=0;i<=a.length-1;i++){
    if(a[i]%3==0 || a[i]%5==0){
        b.push(a[i])
    }
}
document.write(b.length)
