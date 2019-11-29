class Yummy {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    showInformation() {
        console.log(`name:${this.name};`, `weight:${this.weight};`);
    }
}
class Sweet extends Yummy {
    constructor(name, weight, sugarCount) {
        super(name, weight);
        this.sugarCount = sugarCount;
    }
    showInformation() {
        super.showInformation();
        console.log(`count of shugar: ${this.sugarCount};`);
    }
}
class Cake extends Yummy {
    constructor(name, weight, filling) {
        super(name, weight);
        this.filling = filling;
    }
    showInformation() {
        super.showInformation();
        console.log(`filling: ${this.filling};`);
    }
}
class Present {
    constructor(content = [new Sweet('jelly sweet', 30, 10), new Sweet('chocolate sweet', 50, 30), new Cake('gingerbread', 500, 'chocolate')]) {
        this.content = content;
    }
    countSugar() {
        let countSugar = 0;
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i] instanceof Sweet) {
                countSugar += this.content[i].sugarCount;
            }
        }
        console.log(countSugar);
    }
    findContent(name) {
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i].name === name) {
                this.content[i].showInformation();
            }
        }
    }
}