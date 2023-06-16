import { Departamento } from "../Departamento/departamento";
import { Patrimonio } from "../Patrimonio/patrimonio";

class Setor {
  private _idSetor: number;
  private _nomeDoSetor: string;
  private _funcaoDoSetor: string;
  private _departamento: Departamento;
  private _patrimonio: Patrimonio[];

  public get idSetor(): number {
    return this._idSetor;
  }
  public set idSetor(value: number) {
    this._idSetor = value;
  }

  public get nomeDoSetor(): string {
    return this._nomeDoSetor;
  }
  public set nomeDoSetor(value: string) {
    this._nomeDoSetor = value;
  }

  public get funcaoDoSetor(): string {
    return this._funcaoDoSetor;
  }
  public set funcaoDoSetor(value: string) {
    this._funcaoDoSetor = value;
  }

  public get departamento(): Departamento {
    return this._departamento;
  }
  public set departamento(value: Departamento) {
    this._departamento = value;
  }

  public get patrimonio(): Patrimonio[] {
    return this._patrimonio;
  }
  public set patrimonio(value: Patrimonio[]) {
    this._patrimonio = value;
  }

  constructor(
    idSetor: number,
    nomeDoSetor: string,
    funcaoDoSetor: string,
    departamento: Departamento,
    patrimonio: Patrimonio[]
  ) {
    this.idSetor = idSetor;
    this.nomeDoSetor = nomeDoSetor;
    this.funcaoDoSetor = funcaoDoSetor;
    this.departamento = departamento;
    this.patrimonio = patrimonio;
  }
}

export { Setor };
