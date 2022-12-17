const usuarios = require('./usuarios');

describe('Testes para despesas', () =>{
    it('Deve retornar 481 quando usuário viajou ao menos 1 vez à todos municípios permitidos', () => {
        const diariaValor = [44, 77, 120, 240];
        expect(usuarios.diaria(diariaValor)).toEqual(481);
    })

    it('Deve retornar 0 quando não houver diárias no mês', () => {
        const diariaValor = [0];
        expect(usuarios.diaria(diariaValor)).toEqual(0);
    })

})