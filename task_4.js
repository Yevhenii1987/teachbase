const Vessel = function() {
  this.name = ''
  this.vesselType = ''
  this.vesselColor = ''
  this.manufacturedYear = 0
}
const Dock = function() {
  this.paintVessel = function(vesselName, vesselColor) {
    console.log(`${vesselName} has painted ${vesselColor}`)
  }
}

const SailingVesselDock = function() {
  this.buildVessel = function(vesselType) {}
  this.repairVessel = function(vesselType) {}
}
SailingVesselDock.prototype = new Dock();

const EngineVesselDock = function() {
  this.buildVessel = function(vesselType) {}
  this.repairVessel = function(vesselType) {}
}
EngineVesselDock.prototype = new Dock();

