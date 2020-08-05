import { Linha } from '../models/Linha';
import { LinhaService } from './LinhaService';

describe('LinhaService', () => {

  test('Deve retornar linha ativa', () =>{
    const linhaService = new LinhaService();
    const linhas:Linha[] = [new Linha('0000000000', '99999999', true), new Linha('11111111111', '88888888', false)]
    const linhaAtiva = linhaService.getLinhaAtiva(linhas);
    expect(linhaAtiva.number).toEqual('99999999');
  })
  
  test('Deve retornar um erro sem linha ativa', () =>{
    const linhaService = new LinhaService();
    const linhas:Linha[] = [new Linha('0000000000', '99999999', false), new Linha('11111111111', '88888888', false)]

    expect(() => {
      linhaService.getLinhaAtiva(linhas)
    }).toThrowError('Não exite linha ativa');
  });


})

