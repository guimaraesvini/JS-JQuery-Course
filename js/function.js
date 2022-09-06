function boxArea(side) {
    var area = side * side;
    return area
}

console.log(boxArea(5))

function bmi (weight, height){
    var bmi = weight / (height * height)
    return bmi
}

console.log("Person 1", bmi(95, 1.88))

///////////////////////////

function favoriteColor(color){
    if (color == "blue"){
        console.log("You like the sky");
    } else if (color == "yellow"){
        console.log("You like gold");
    }else if (color == "green"){
        console.log("You like the florest");
    }else {
        console.log("You dont like anything");
    }
}

favoriteColor("green");

///////////////////////////

function needToVisit (coutriesVisited) {
    var total = 256;
    var needToVisit = total - coutriesVisited
    console.log('You need to visit', needToVisit, "coutires")
}

// console.log(total) // cant access var inside the function

var carCost = function(door){
    var inicialValue = 10000;
    if(door) {
        return door * inicialValue;
    } else{
        return 2 * inicialValue;
    }
}

console.log(carCost())