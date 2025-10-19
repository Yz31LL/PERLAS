import config from '../config/db.config.js';
import Sequelize from 'sequelize';
import userModelFactory from './user.model.js';
import roleModelFactory from './role.model.js';

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASS || config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model factories may be CommonJS (module.exports = fn) or ESM (export default fn)
const userFactory = userModelFactory && userModelFactory.default ? userModelFactory.default : userModelFactory;
const roleFactory = roleModelFactory && roleModelFactory.default ? roleModelFactory.default : roleModelFactory;

db.user = userFactory(sequelize, Sequelize);
db.role = roleFactory(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: 'userId',
    otherKey: 'roleId'
});

db.ROLES = ["user", "admin", "moderator"];

export default db;