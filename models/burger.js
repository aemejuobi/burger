var orm = require("../config/orm");

var burgerCalls = {
    selectAll: function(){
        orm.selectAll(function(res){
            console.log(res);
        });
    },

    insertOne: function(val){
        orm.insertOne("burger_name", val, function(res){
            console.log(res);
        });
    },

    updateOne: function(colVal, userId){
        orm.updateOne("devoured", colVal, "id", userId, function(res){
            console.log(res);
        });
    }
}

module.exports = burgerCalls;