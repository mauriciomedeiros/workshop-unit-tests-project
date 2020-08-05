import { mocked } from 'ts-jest/utils';

import {UsuarioService} from './UsuarioService';

import {UsuarioRepository} from '../repository/UsuarioRepository';
import { Usuario } from '../models/Usuario';

const usuarioMock = new Usuario(1, 'nome', 'cpf', 'email', 'telefone')
jest.mock('../repository/UsuarioRepository', () => {
  return {
    UsuarioRepository: jest.fn().mockImplementation(() => {
      return {
        salvar: jest.fn().mockReturnValue(usuarioMock)
      }
    })
  }
});


describe('UsuarioService', () => {
  const mockedUsuarioRepository = mocked(UsuarioRepository, true);

  afterEach(()=> {
    mockedUsuarioRepository.mockClear();
  })

  test('Deve salvar o usuário com sucesso', () =>{
    const nome = 'User',
      email= 'mail@gmail.com',
      cpf = '0000000000',
      telefone = '99999999';          
      const usuarioService = new UsuarioService()
      const usuarioResult = usuarioService.criarUsuario(nome, cpf, email, telefone);

      expect(usuarioResult.id).not.toBeNull();
      expect(usuarioResult.id).toBe(usuarioMock.id)
  });

})