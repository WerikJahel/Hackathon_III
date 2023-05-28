class Cargo {
  private _idCargo: number = 0;
  private _nomeDoCargo: string = "";
  private _funcaoDoCargo: string = "";

  public get idCargo(): number {
    return this._idCargo;
  }
  public set idCargo(value: number) {
    this._idCargo = value;
  }

  public get nomeDoCargo(): string {
    return this._nomeDoCargo;
  }
  public set nomeDoCargo(value: string) {
    this._nomeDoCargo = value;
  }

  public get funcaoDoCargo(): string {
    return this._funcaoDoCargo;
  }
  public set funcaoDoCargo(value: string) {
    this._funcaoDoCargo = value;
  }

  constructor(idCargo: number, nomeDoCargo: string, funcaoDoCargo: string) {
    this.idCargo = idCargo;
    this.nomeDoCargo = nomeDoCargo;
    this.funcaoDoCargo = funcaoDoCargo;
  }
}

export { Cargo };
