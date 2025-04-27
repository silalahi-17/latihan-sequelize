'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    "products",
    [
      {
        name: "Product 1",
        code: "PRODUCT_1",
        price: 100,
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 2",
        code: "PRODUCT_2",
        price: 200,
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 3",
        code: "PRODUCT_3",
        price: 150,
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 4",
        code: "PRODUCT_4",
        price: 300,
        quantity: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 5",
        code: "PRODUCT_5",
        price: 250,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
     
  }
};
