(function Calculator(){
    let result=0;
    return {
            getResult: function(){
                return result;
            },
            reset: function() {
                result=0;
            },
            add: function(value=0){
                result+=value;
            },
            subtract: function(value=0){
                result-=value
            },
            divide: function(value=1){
                result/=value;
            },
            multiply: function (value=1) {
                result*=value;
            }
        }
}())
module.exports=Calculator;