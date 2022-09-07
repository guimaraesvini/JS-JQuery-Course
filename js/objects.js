var person = {
    name: "Vini",
    profession: "Web Designer",
    company: "Vini no mundo",
    age: 31
}

console.log(person.name)

var square = {
    totalSides: 4,
    area: function(side){
        return side * side;
    },
    perimetre: function(side){
        return side * this.totalSides;
    }
}

console.log(square.totalSides)
console.log(square.perimetre(10))

// var pi = Math.PI
// console.log(pi)

var car = {
    model: "Audi",
    doors: 5,
    add: function(){
        return "This " + this.model + " has " + this.doors + " doors."
    }
}

console.log(car.add())

car.doors = 4 // change de value of doors in car object
car.color = "red" // add a value in the object
console.log(car.doors)
console.log(car)