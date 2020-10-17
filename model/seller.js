module.exports = function(sequelize, DataTypes){
    var Seller = sequelize.define("Seller", {
        name: DataTypes.STRING
    });

    return Seller;
};