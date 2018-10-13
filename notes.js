// Entity relationship diagram
class Character {
  //look up contructor function
  constructor(name, health, attack) {
    this.name = name
    this.health = health
    this.attack = attack
    this.sayName = this.sayName.bind(this)
    this.sayHealth = this.sayHealth.bind(this)
    this.sayAttack = this.sayAttack.bind(this)
  }
  sayName() {
    console.log(`my name is ${this.name}`)
  }
  sayHealth() {
    console.log(`my health is ${this.health}`)
  }
  sayAttack() {
    console.log(`my attack is ${this.attack}`)
  }
}

const luke = new Character("Luke",100,10)
const theDarth = new Character("Darth Vader",250,15)