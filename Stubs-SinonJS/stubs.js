describe('DiariasController getAll()', () => {
    
    it('Retorna uma lista de diárias de viagem', () => {
      const expectedDatabaseResponse = [{
        id: 1,
        usuario: 'Jonathan',
        data: '2022-10-11',
        local: 'Pelotas',
        valor: 44.00
      },
      {
        id: 2,
        usuario: 'Pedro',
        data: '2022-09-11',
        local: 'Porto Alegre',
        valor: 121.00
      }
    ];
  
      const findAll = sinon.stub(Database, 'findAll');
      findAll.withArgs('diarias').returns(expectedDatabaseResponse);
  
      const diariasController = new DiariasController(Database);
      const response = diariasController.getAll();
  
      sinon.assert.calledWith(findAll, 'diarias');
      expect(response).to.be.eql(expectedDatabaseResponse);
      findAll.restore();
    });
  });