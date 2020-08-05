import { Usuario } from "../models/Usuario";
import {UsuarioRepository} from "../repository/UsuarioRepository";
import { Linha } from "../models/Linha";
import { LinhaRepository } from "../repository/LinhaRepository";

export class UsuarioService {
  constructor(){}

  criarUsuario(nome: String, cpf: String, email: String, telefone: String): Usuario {
    const usuario: Usuario = new Usuario(null, nome, cpf, email, telefone);
    const usuarioRepository = new UsuarioRepository();
    const usuarioSalvo = usuarioRepository.salvar(usuario);
    if(usuarioSalvo.id === null) {
      throw new Error("Erro ao salvar o usuário");
    }
    return usuarioSalvo;
  }

  criarLinha(cpf: String, telefone: String): Linha {
    const linhaRepository = new LinhaRepository();
    const linha = new Linha(cpf, telefone, true)
    const linhaSalva = linhaRepository.salvar(linha);
    if(linhaSalva.id === null) {
      throw new Error("Erro ao salvar a linha");
    }
    return linhaSalva
  }

  registrar(nome: String, cpf: String, email: String, telefone: String): String {
    try {
      const usuario: Usuario = this.criarUsuario(nome, cpf, email, telefone);
      const linha: Linha = this.criarLinha(cpf, telefone)
    } catch (error) {
      throw error;
    }
    return "Usuário e Linha salvos com sucesso!";
  };

}