const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false })
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error)
  }
};

initializeDatabase()

module.exports = sequelize;