'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemImgLists', {
      itemImgListId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ItemPages',
          key: 'itemId',
        },
      },
      itemImg: {
        allowNull: false,
        type: Sequelize.STRING(1024),
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemImgLists');
  },
};
