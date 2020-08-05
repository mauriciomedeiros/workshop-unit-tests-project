import { Linha } from "../models/Linha";
import { LinhaService } from "./LinhaService";

describe('ServiceService TDD', () => {
  test('Deve retornar linhas do usuário selecionado', ()=> {
    const cpf = '11133388899';
    const linhas:Linha[] = [
      new Linha('11133388899', '99999999', true), 
      new Linha('11111111111', '88888888', true),
      new Linha('22222222222', '77777777', true),
      new Linha('11133388899', '66666666', true)
    ];

    const linhaService = new LinhaService();
    const linhasUsuario = linhaService.getLinhasDoUsuario(cpf, linhas);

    expect(linhasUsuario.length).toBe(2);

  })
})