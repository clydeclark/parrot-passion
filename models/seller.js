module.exports = function(sequelize, DataTypes) {
    var Seller = sequelize.define("Seller", {
      // Seller set as type string
      name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // email type
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      }
    });
  
    // Seller.associate = function(models) {
    //   // Associating Seller with Posts
    //   // When an Seller is deleted, also delete any associated Posts
    //   Seller.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Seller;
  };