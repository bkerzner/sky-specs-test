const { Sequelize, Model, DataTypes } = require("sequelize")

// postgres database connection parameters  
const user = 'postgres'
const host = 'localhost'
const database = 'postgres'
const password = 'docker'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
  })

class FavoriteGist extends Model {}

FavoriteGist.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'favorite_gist',
    timestamps: false
  })
  
async function getAllFavorites() {
    return await FavoriteGist.findAll() 
}

async function addFavorite(id) {
    return await FavoriteGist.create({id}) 
}

async function removeFavorite(id) {
    return await FavoriteGist.destroy({
        where: {id}
    }); 
}

module.exports = {getAllFavorites, addFavorite, removeFavorite}