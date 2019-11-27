function ElectricalAppliance(power, name) {
    this.power = power;
    this.activate = false;
    this.name = name;
    this.activating = function (state) {
        if (state === 'on') {
            this.activate = true;
        }
        if (state === 'off') {
            this.activate = false;
        }
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
function Room(countOfSockets) {
    this.countOfSockets = countOfSockets;
    this.appliances = [new HeatingAppliance('100', 50, 'teapot'), new ApplianceWithScreen(300, 1000, 'laptop')];
}
Room.countPower = function (room) {
    let power = 0;
    for (let i = 0; i < room.appliances.length; i++) {
        if (appliances[i].activate === true) {
            power += room.appliances[i].power;
        }
    }
    console.log(power);
}
