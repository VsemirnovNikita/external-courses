function Calculator() {
    this.result = 0;

    this.getResult = function () {
        return this.result;
    }
    this.reset = function () {
        this.result = 0;
        return this;
    }
    this.add = function (value = 0) {
        this.result += value;
        return this;
    }
    this.subtract = function (value = 0) {
        this.result -= value;
        return this;
    }
    this.divide = function (value = 1) {
        this.result /= value;
        return this;
    }
    this.multiply = function (value = 1) {
        this.result *= value;
        return this;
    }
    this.setState = function (value = 0) {
        this.result = value;
        return this;
    }
    this.fetchData = async function (callback) {
        await callback(500);
        return this;
    }
    return this;
}
module.exports = Calculator(); 