class Yummy {
    constructor(name,weight){
        this.name=name;
        this.weight=weight;
    }
    showInformation() {
        console.log(this.name,this.weight);      
    }    
} 
class Sweet extends Yummy{
    constructor(name,weight,sugarCount){
        super(name,weight);
        this.sugarCount=sugarCount;
    }
    showInformation() {
        super.showInformation();
        console.log(this.sugarCount);
    }
}
class Cake extends Yummy{
    constructor(name,weight,filling){
        super(name,weight);
        this.filling=filling;
    }
    showInformation() {
        super.showInformation();
        console.log(this.filling);
    }
}
class Present{
    constructor(){
        this.content=[new Sweet('jelly sweet',30,10),new Sweet('chocolate sweet',50,30),new Cake('gingerbread',500,'chocolate')];
    }
    countSugar(){
        let countSugar=0;
        for(let i =0;i<this.content.length;i++){
            if(this.content[i] instanceof Sweet){
                countSugar+=this.content[i].sugarCount;
            }
        }
        console.log(countSugar);
    }
    findContent(name){
        for(let i =0;i<this.content.length;i++){
            if (this.content[i].name===name){
                this.content[i].showInformation();
            }
        }
    }
}