var games = ["wiiu", "PS5", "Xbox", "PolyStation"]
console.log(games[0])

var allgames = games.length

console.log(games[allgames -1]) // access the last positin in an array

var addGame = games.push("2DS")
console.log(games)

var item = games.indexOf("PS5") // access the index 
console.log("item", item)

var removeItem = games.splice(1, 1) // first item is where to start from. | second item is how many item to remove
console.log("Item Removed", games)
