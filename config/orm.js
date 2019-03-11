var connection = require("./connection.js");

var orm = {
    selectAll: function(){
        var query = "select * from burgers";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            console.log(result);
        });
    },

    insertOne: function(column, val){
        var query = `insert into burgers(${column}) values(?)`
        connection.query(query, [val], function(err, result){
            if(err){
                throw err;
            }
            console.log(result);
        });
    },

    updateOne: function(column, columnSetVal, columnParam, columnParamVal){
        var query = `update burgers set ${column} = ? where ${columnParam} = ?`;
        connection.query(query, [columnSetVal, columnParamVal], function(err, result){
            if(err){
                throw err;
            }
            console.log(result);
        });
    }
}

module.exports = orm;