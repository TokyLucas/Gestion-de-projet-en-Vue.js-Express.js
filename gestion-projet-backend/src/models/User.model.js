const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database/Sequelize.database");
const hash = require("../helpers/hash.helpers").hash

var UserRole = require("./UserRole.model");

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Nom requis"
                },
                notEmpty: {
                    msg: "Nom requis"
                },
            }
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Email déja utilisé"
            },
            validate: {
                notNull: {
                    msg: "Email requis"
                },
                notEmpty: {
                    msg: "Email requis"
                },
                isEmail: {
                    msg: "Format email invalide"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Mot de passe requis"
                },
                notEmpty: {
                    msg: "Mot de passe requis"
                },
            }
        },
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    // const salt = await bcrypt.genSaltSync(10, 'a');
                    // user.password = bcrypt.hashSync(user.password, salt);
                    user.password = hash(user.password)
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                //     const salt = await bcrypt.genSaltSync(10, 'a');
                //     user.password = bcrypt.hashSync(user.password, salt);
                    user.password = hash(user.password);
                }
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    }
);

// User.prototype.validPassword = async (password, hash) => {
//     return await bcrypt.compareSync(password, hash);
// }

UserRole.associate = (models) => {
    UserRole.hasOne(models.User, {
        onDelete: 'cascade',
        foreignKey: { allowNull: false }
    });
};

User.belongsTo(UserRole, {
    onDelete: 'cascade',
    foreignKey: { allowNull: false }
});

module.exports = User;
