class Departamento {
  private _idDepartamento: number = 0;
  private _nomeDoDepartamento: string = "";
  private _funcaoDoDepartamento: string = "";

  public get idDepartamento(): number {
    return this._idDepartamento;
  }
  public set idDepartamento(value: number) {
    this._idDepartamento = value;
  }

  public get nomeDoDepartamento(): string {
    return this._nomeDoDepartamento;
  }
  public set nomeDoDepartamento(value: string) {
    this._nomeDoDepartamento = value;
  }

  public get funcaoDoDepartamento(): string {
    return this._funcaoDoDepartamento;
  }
  public set funcaoDoDepartamento(value: string) {
    this._funcaoDoDepartamento = value;
  }

  constructor(
    idDepartamento: number,
    nomeDoDepartamento: string,
    funcaoDoDepartamento: string
  ) {
    this.idDepartamento = idDepartamento;
    this.nomeDoDepartamento = nomeDoDepartamento;
    this.funcaoDoDepartamento = funcaoDoDepartamento;
  }
}

export { Departamento };
