import { Categoria } from "./categoria";
import {
  Ocorrencia,
  TipoDeOcorrencia,
  TipoDeUrgencia,
  StatusDaOcorrencia,
} from "../Ocorrencia/ocorrencia";

class Patrimonio {
  private _categoria: Categoria[] = [];
  private _idPatrimonio: number = 0;
  private _codigo: number = 0;
  private _nomeDoBem: string = "";
  private _dataDeAquisicao: string = "";
  private _vidaUtil: number = 0; //Em Meses
  private _custo: number = 0; //valorAdiquirido
  private _depreciacao: number = 0; //Em porcentagem de acordo com a categoria
  private _estado: EstadoDoBem = EstadoDoBem.ATIVO;
  private _ocorrencia!: Ocorrencia;

  public get categoria(): Categoria[] {
    return this._categoria;
  }
  public set categoria(value: Categoria[]) {
    this._categoria = value;
  }

  public get idPatrimonio(): number {
    return this._idPatrimonio;
  }
  public set idPatrimonio(value: number) {
    this._idPatrimonio = value;
  }

  public get codigo(): number {
    return this._codigo;
  }
  public set codigo(value: number) {
    this._codigo = value;
  }

  public get nomeDoBem(): string {
    return this._nomeDoBem;
  }
  public set nomeDoBem(value: string) {
    this._nomeDoBem = value;
  }

  public get dataDeAquisicao(): string {
    return this._dataDeAquisicao;
  }
  public set dataDeAquisicao(value: string) {
    this._dataDeAquisicao = value;
  }

  public get vidaUtil(): number {
    return this._vidaUtil;
  }
  public set vidaUtil(value: number) {
    this._vidaUtil = value;
  }

  public get custo(): number {
    return this._custo;
  }
  public set custo(value: number) {
    this._custo = value;
  }

  public get depreciacao(): number {
    return this._depreciacao;
  }
  public set depreciacao(value: number) {
    this._depreciacao = value;
  }

  public get estado(): EstadoDoBem {
    return this._estado;
  }
  public set estado(value: EstadoDoBem) {
    this._estado = value;
  }

  public get ocorrencia(): Ocorrencia {
    return this._ocorrencia;
  }
  public set ocorrencia(value: Ocorrencia) {
    this._ocorrencia = value;
  }

  constructor(
    categoria: Categoria[],
    idPatrimonio: number,
    codigo: number,
    nomeDoBem: string,
    dataDeAquisicao: string,
    vidaUtil: number,
    custo: number,
    depreciacao: number,
    estado: EstadoDoBem,
    ocorrencia: Ocorrencia
  ) {
    this.categoria = categoria;
    this.idPatrimonio = idPatrimonio;
    this.codigo = codigo;
    this.nomeDoBem = nomeDoBem;
    this.dataDeAquisicao = dataDeAquisicao;
    this.vidaUtil = vidaUtil;
    this.custo = custo;
    this.depreciacao = depreciacao;
    this.estado = estado;
    this.ocorrencia = ocorrencia;
  }
}

enum EstadoDoBem {
  ATIVO = "Ativo",
  OCORRENCIA = Ocorrencia.status,
}

export { Patrimonio, EstadoDoBem };
