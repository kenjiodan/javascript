let num = [1, 2, 8, 4, 11]

num[5] = 22
num[3] += 8
num.push(14)

for(let pos = 0; pos<num.length; pos++){ //Laço para mostrar todos os elementos do array no console
    console.log(num[pos])
}

for(let pos in num){
    console.log(num[pos])
}

console.log(num.indexOf(8))