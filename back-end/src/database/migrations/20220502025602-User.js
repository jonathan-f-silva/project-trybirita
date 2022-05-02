module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
    });
  },
  down: async (queryInterface, _) => {
    await queryInterface.dropTable('Users');
  }
};