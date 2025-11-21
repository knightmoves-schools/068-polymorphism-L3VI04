// index.js

class Cat {
  say() {
    return "meow";
  }
}

class Dog {
  // renamed from talk → say
  say() {
    return "woof";
  }
}

class Bird {
  // renamed from sing → say
  say() {
    return "chirp";
  }
}

let animals = [
  new Cat(),
  new Dog(),
  new Bird()
];

function listen(animals) {
  let sounds = [];

  // no need for if statements, just call say()
  animals.forEach(animal => {
    sounds.push(animal.say());
  });

  return sounds;
}

// Example usage:
console.log(listen(animals)); // ["meow", "woof", "chirp"]
