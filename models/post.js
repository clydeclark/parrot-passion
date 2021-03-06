module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      name : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "No Name"
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      image: { 
        type: DataTypes.BLOB("long")
      }
    });
  
    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Seller
    //   // A Post can't be created without an Seller due to the foreign key constraint
    //   Post.belongsTo(models.Seller, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Post;
  };
  