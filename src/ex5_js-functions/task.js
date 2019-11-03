(function Calculator(){
    let result=0;
    return {
        getResult : function(){
                return result;
                },
        reset: function() {
                previousResult=result;
                result=0;
                },
        add:function(addendum=0){
                result+=addendum;
                },
        subtract: function(subtrahend=0){
                result-=subtrahend
                },
        divide: function(divisor=1){
                result/=divisor;
                },
        multiply: function (multiplier=1) {
                result*=multiplier;
                return multiply
                }
    }
}())
module.exports=Calculator;