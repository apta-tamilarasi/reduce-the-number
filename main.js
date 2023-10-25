let l=parseInt(prompt("Enter the number"))
let v=[]


for(i=0; i<l; i++){
	v[i]=parseInt(prompt("Enter the "+(i+1)+" value"))
}


document.write("Gien array =[ "+v+" ]<br><br>")

let a=v.reduce(function(b,c){

	return b+c
})

document.write("reduced value =[ "+(a/3)+" ]")