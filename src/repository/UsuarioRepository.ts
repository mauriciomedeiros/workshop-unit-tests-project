import { Usuario } from "../models/Usuario";

export class UsuarioRepository {
  private count = 0;
  listaUsuarios:Usuario[];
  constructor(){
    this.listaUsuarios = [];
  }

  salvar(usuario: Usuario): Usuario {
    usuario.id = this.count + 1;
    this.listaUsuarios.push(usuario);
    
    return usuario;
  }

}