import {Linha} from '../models/Linha';


export class LinhaService {
  constructor(){}

  getLinhaAtiva(Linhas: Array<Linha>): Linha {
    const linhaAtiva: Array<Linha> = Linhas.filter(l => l.status === true);
    if(linhaAtiva.length === 0) {
      throw new Error('Não exite linha ativa');
    }
    return linhaAtiva[0];
  }

  getLinhasDoUsuario(cpf: String, linhas:Array<Linha>) {
    const linhasUsuario: Array<Linha> =  linhas.filter(l => l.cpf === cpf);
    return linhasUsuario;
  }
  
}
