import { Setor } from "../Setor/setor";
import { Cargo } from "../Cargo/cargo";

class Colaborador {
  private _setor: Setor;
  private _idColaborador: number = 0;
  private _CPF: string = "";
  private _nomeCompleto: string = "";
  private _imagem: string = "";
  private _salario: number = 0;
  private _cargaHorariaSemanal: number = 0;
  private _email: string = "";
  private _senha: string = "";
  private _homeOffice: boolean = false;
  private _observacao: string = "";
  private _cargo: Cargo;

  public get setor(): Setor {
    return this._setor;
  }
  public set setor(value: Setor) {
    this._setor = value;
  }

  public get idColaborador(): number {
    return this._idColaborador;
  }
  public set idColaborador(value: number) {
    this._idColaborador = value;
  }

  public get CPF(): string {
    return this._CPF;
  }
  public set CPF(value: string) {
    this._CPF = value;
  }

  public get nomeCompleto(): string {
    return this._nomeCompleto;
  }
  public set nomeCompleto(value: string) {
    this._nomeCompleto = value;
  }

  public get imagem(): string {
    return this._imagem;
  }
  public set imagem(value: string) {
    this._imagem = value;
  }

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

  public get cargaHorariaSemanal(): number {
    return this._cargaHorariaSemanal;
  }
  public set cargaHorariaSemanal(value: number) {
    this._cargaHorariaSemanal = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }

  public get homeOffice(): boolean {
    return this._homeOffice;
  }
  public set homeOffice(value: boolean) {
    this._homeOffice = value;
  }

  public get observacao(): string {
    return this._observacao;
  }
  public set observacao(value: string) {
    this._observacao = value;
  }

  public get cargo(): Cargo {
    return this._cargo;
  }
  public set cargo(value: Cargo) {
    this._cargo = value;
  }

  constructor(
    setor: Setor,
    idColaborador: number,
    CPF: string,
    nomeCompleto: string,
    imagem: string,
    salario: number,
    cargaHorariaSemanal: number,
    email: string,
    senha: string,
    homeOffice: boolean,
    observacao: string,
    cargo: Cargo
  ) {
    this.setor = setor;
    this.idColaborador = idColaborador;
    this.CPF = CPF;
    this.nomeCompleto = nomeCompleto;
    this.imagem = imagem;
    this.salario = salario;
    this.cargaHorariaSemanal = cargaHorariaSemanal;
    this.email = email;
    this.senha = senha;
    this.homeOffice = homeOffice;
    this.observacao = observacao;
    this.cargo = cargo;
  }

  gerarIDColaborador(): number {
    return Number(
      `${new Date().getFullYear()}
      ${new Date().getMonth()}
      ${new Date().getDay()}
      ${Math.floor(Math.random() * 9999)}`
    );
  }
}

export { Colaborador };
