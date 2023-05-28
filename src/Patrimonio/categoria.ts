class Categoria {
  private _idCategoria: number = 0;
  private _nomeDaCategoria: string = "";

  public get idCategoria(): number {
    return this._idCategoria;
  }
  public set idCategoria(value: number) {
    this._idCategoria = value;
  }

  public get nomeDaCategoria(): string {
    return this._nomeDaCategoria;
  }
  public set nomeDaCategoria(value: string) {
    this._nomeDaCategoria = value;
  }

  constructor(idCatogiria: number, nomeDaCategoria: string) {
    this.idCategoria = idCatogiria;
    this.nomeDaCategoria = nomeDaCategoria;
  }
}

export { Categoria };
