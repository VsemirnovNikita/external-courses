function ElectricalAppliance(power, name) {
    this.power = power;
    this.isActive = false;
    this.name = name;
}
ElectricalAppliance.prototype = {
    activating: function (state) {
        this.isActive = state === 'on' ? true : false;
    }
}
function HeatingAppliance(temperature, power, name) {
    ElectricalAppliance.call(this, power, name);
    this.temperature = temperature;
}
Object.setPrototypeOf(HeatingAppliance, ElectricalAppliance);

function ApplianceWithScreen(width, power, name) {
    ElectricalAppliance.call(this, power, name);
    this.width = width;
}
Object.setPrototypeOf(ApplianceWithScreen, ElectricalAppliance);
function Room(countOfSockets, appliances = [new HeatingAppliance('100', 50, 'teapot'), new ApplianceWithScreen(300, 1000, 'laptop')]) {
    this.countOfSockets = countOfSockets;
    this.appliances = appliances;
}
Room.countPower = function (room) {
    let power = 0;
    for (let i = 0; i < room.appliances.length; i++) {
        if (appliances[i].activate === true) {
            power += room.appliances[i].power;
        }
    }
    console.log(`power: ${power}`);
}
