function ElectricalAppliance(power,name) {
    this.power=power;
    this.activate=false;
    this.name=name;
} 
ElectricalAppliance.prototype.activating=function (state) {
    if(state==='on'){
        ElectricalAppliance.activate=true;
    }
    if(state==='off'){
        ElectricalAppliance.activate=false;
    }
}
function HeatingAppliance(temperature){
    this.temperature=temperature;
}
Object.setPrototypeOf(HeatingAppliance,ElectricalAppliance);

function ApplianceWithScreen(width) {
    this.width=width
}
Object.setPrototypeOf(ApplianceWithScreen,ElectricalAppliance);
function Room(countOfSockets) {
    this.appliances=[new HeatingAppliance('100'),new ApplianceWithScreen(300)]
    appliances[0].activating('on');
}
Room.countPower=function () {
    let power;
    for( let i=0; i< appliances.length;i++){
        power+=appliances[i].power;
    }
}