var person = {
  _age: 22,

  get age() {
    return this._age
  }

  // get age() {
  //   if(this._age) {
  //     return this._age
  //   }
  // }
}

console.log(person.age)
