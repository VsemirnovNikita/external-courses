function ElectricalAppliance(power, name) {
    this.power = power;
    this.activate = false;
    this.name = name;
}
ElectricalAppliance.activating = function (state) {
    if (state === 'on') {
        ElectricalAppliance.activate = true;
    }
    if (state === 'off') {
        ElectricalAppliance.activate = false;
    }
}
function HeatingAppliance(temperature, power, name) {
    ElectricalAppliance.call(this, power, name);
    this.temperature = temperature;
}
Object.setPrototypeOf(HeatingAppliance, ElectricalAppliance);

function ApplianceWithScreen(width, power, name) {
    ElectricalAppliance.call(this, power, name);
    this.width = width
}
Object.setPrototypeOf(ApplianceWithScreen, ElectricalAppliance);
function Room(countOfSockets) {
    this.appliances = [new HeatingAppliance('100', 50, 'teapot'), new ApplianceWithScreen(300, 1000, 'laptop')];
    appliances[0].activating('on');
}
Room.countPower = function () {
    let power;
    for (let i = 0; i < appliances.length; i++) {
        power += appliances[i].power;
    }
    console.log(power);
}
let room = new Room(12);
Room.countPower();