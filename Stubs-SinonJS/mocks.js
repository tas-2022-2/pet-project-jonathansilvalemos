describe('DiariasController getAll()', () => {
    it('Deve chamar o banco de dados com argumentos', () => {
      const databaseMock = sinon.mock(Database);
      databaseMock.expects('findAll').once().withArgs('diarias');
  
      const diariasController = new DiariasController(Database);
      diariasController.getAll();
  
      databaseMock.verify();
      databaseMock.restore();
    });
  });