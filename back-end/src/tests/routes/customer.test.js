const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User, Product } = require('../../database/models');
const { mockUser, mockAdmin, mockNewUser } = require('../mocks/users');
const { JwtToken } = require('../../utils');

describe('Rota GET /customer/products', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de produtos', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findAll').resolves([]);

      const response = await request(app)
        .get('/customer/products')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota GET /customer/products/:id', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products/1');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar 
  describe.skip('Ao passar id inexistente', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findOne').resolves(null);

      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(404);
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna o produto', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findOne').resolves({});

      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});