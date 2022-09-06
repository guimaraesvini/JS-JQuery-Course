// for ( var i = 0; i <= 10; i++){
//     console.log(i)
// }

var clients = ["Vini", "Rafa", "Ana", "Mary"];
var array = clients.length;

for (var i = 0; i < array; i++){
    console.log(clients[i])
    if (clients[i] == "Ana"){
        break
    }
}

console.log('==========')

var x = 0;
while(x <= 10){
    console.log(x);
    x++;
}


console.log('==========')

var number = 0
var max = 50

for (; number <= max;){
    console.log(number)
    number++
}