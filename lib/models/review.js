'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      Review.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        onDelete: 'CASCADE',
      });
    }
  }
  Review.init(
    {
      stars: { type: DataTypes.INTEGER, allowNull: false },
      detail: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      restaurantId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
