const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('blogis', 'root', '', {
	host: 'localhost',
	dialect:'mysql'
});


sequelize
.authenticate()
.then(() => {
	console.log('Connection has been established successfully.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});


  // exporto el modulo para poder usarlo en otros archivos
  module.exports = sequelize;