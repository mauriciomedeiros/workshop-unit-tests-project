export class Usuario {
  id: any;
  nome: String;
  cpf: String;
  email: String;
  telefone: String;

  constructor(id: any, nome: String, cpf:String, email: String, telefone: String) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone
  }

}