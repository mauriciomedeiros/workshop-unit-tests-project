export class Linha {
  id: number
  cpf:String
  number: String;
  status: boolean;
  constructor(cpf: String, number: String, status: boolean) {
    this.id = 0;
    this.cpf = cpf;
    this.status = status;
    this.number = number;
  }
}