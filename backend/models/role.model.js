export default (sequelize, DataTypes) => {
  const Role = sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  return Role;
};
