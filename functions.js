let animals = [
  { name: "Fluffy", species: "dog" },
  { name: "Munchy", species: "cat" },
  { name: "Spotty", species: "dog" },
  { name: "Flaffy", species: "cat" },
  { name: "Dotty", species: "cat" },
  { name: "Jimmy", species: "dog" }
]

function filter(collection, callback) {
  results = []

  for(let element of collection) {
    if(callback(element)) {
      results.push(element)
    }
  }
  return results
}

filter(animals, isDog)

let isDog = function(animal) {
  return animal.species === "dog"
}

console.log(filter(animals, isDog))
