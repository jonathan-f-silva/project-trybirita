module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false
      },
      urlImage: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'url_image'
      },
    });
  },
  down: (queryInterface, _) => {
    await queryInterface.dropTable('Products');
  }
};