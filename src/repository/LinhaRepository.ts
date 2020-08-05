import { Linha } from "../models/Linha";

export class LinhaRepository {
  listaLinhas:Linha[];
  constructor(){
    this.listaLinhas = [];
  }

  salvar(linha: Linha): Linha {
    linha.id = Math.random();
    this.listaLinhas.push(linha);
    
    return linha;
  }

}