const Vessel = function(name) {
  this.name = name
  this.color = 'Unpainted'
}
const Dock = function() {
  this.paintVessel = function(vessel, color) {
    vessel.color = color
    console.log(`${vessel.name} has painted ${color}`)
  }
}

const SailingVesselDock = function() {
  this.buildVessel = function(vessel) {
    vessel.type === 'sailing' ? console.log(`${vessel.name} has built`) :  console.log(`Dock cannot build this type of vessels`)
  }
  this.repairVessel = function(vessel) {
    vessel.type === 'sailing' ? console.log(`${vessel.name} has repaired`) :  console.log(`Dock cannot repair this type of vessels`)
  }
  this.exchangeVessel = function(vessel) {
    vessel.type === 'sailing' ? console.log(`${vessel.name} has exchanged`) :  console.log(`Dock exchanges only sailing vessels`)
  }
}
SailingVesselDock.prototype = new Dock();

const EngineVesselDock = function() {
  this.buildVessel = function(vessel) {
    vessel.type === 'engine' ? console.log(`${vessel.name} has built`) :  console.log(`Dock cannot build this type of vessels`)
  }
  this.repairVessel = function(vessel) {
    vessel.type === 'engine' ? console.log(`${vessel.name} has repaired`) :  console.log(`Dock cannot repair this type of vessels`)
  }
  this.exchangeVessel = function(vessel) {
    vessel.type === 'engine' ? console.log(`${vessel.name} has exchanged`) :  console.log(`Dock exchanges only engine vessels`)
  }
}
EngineVesselDock.prototype = new Dock();

const EngineVessel = function(name, power, material) {
  Vessel.call(this, name)
  this.type = 'engine'
  this.enginePower = power + 'hp'
  this.material = material
}
const SailingVessel = function(name, mastsNum, sailSquare) {
  Vessel.call(this, name)
  this.type = 'sailing'
  this.mastsNum = mastsNum
  this.sailSquare = sailSquare
  this.sumSailsSquare = +this.mastsNum * +this.sailSquare
}

const dock_1 = new EngineVesselDock()
const dock_2 = new SailingVesselDock()
const enterprise = new EngineVessel('Enterprise', 3000, 'steel')
const blackPearl = new SailingVessel('The Black Pearl', 3, 10)

console.log(enterprise)
console.log(blackPearl)
dock_1.buildVessel(enterprise)
dock_2.buildVessel(blackPearl)
dock_1.paintVessel(enterprise, 'Steel Gray')
console.log(enterprise)
dock_1.paintVessel(blackPearl, 'Black')
console.log(blackPearl)
dock_1.repairVessel(enterprise)
dock_2.repairVessel(blackPearl)
dock_1.exchangeVessel(enterprise)
dock_2.exchangeVessel(blackPearl)

// Wrong vessel type
dock_1.buildVessel(blackPearl)
dock_2.repairVessel(enterprise)
dock_1.exchangeVessel(blackPearl)
dock_2.exchangeVessel(enterprise)

