class Ocorrencia {
  private _idOcorrencia: number = 0;
  private _numeroDeOcorrencia: number = 0;
  private _tipoDeOcorrencia: TipoDeOcorrencia = TipoDeOcorrencia.INATIVA;
  private _motivoDaOcorrencia: string = "";
  private _tipoDeUrgencia: TipoDeUrgencia = TipoDeUrgencia.ALTA;
  private _dataDeAbertura: string = "";
  private _dataPrevistaDeResolucao: string = "";
  private _status: StatusDaOcorrencia = StatusDaOcorrencia.ABERTA;
  private _dataDeAtendimento: string = "";
  private _dataDeConclusao: string = "";
  static status: any;

  public get idOcorrencia(): number {
    return this._idOcorrencia;
  }
  public set idOcorrencia(value: number) {
    this._idOcorrencia = value;
  }

  public get numeroDeOcorrencia(): number {
    return this._numeroDeOcorrencia;
  }
  public set numeroDeOcorrencia(value: number) {
    this._numeroDeOcorrencia = value;
  }

  public get tipoDeOcorrencia(): TipoDeOcorrencia {
    return this._tipoDeOcorrencia;
  }
  public set tipoDeOcorrencia(value: TipoDeOcorrencia) {
    this._tipoDeOcorrencia = value;
  }

  public get motivoDaOcorrencia(): string {
    return this._motivoDaOcorrencia;
  }
  public set motivoDaOcorrencia(value: string) {
    this._motivoDaOcorrencia = value;
  }

  public get tipoDeUrgencia(): TipoDeUrgencia {
    return this._tipoDeUrgencia;
  }
  public set tipoDeUrgencia(value: TipoDeUrgencia) {
    this._tipoDeUrgencia = value;
  }

  public get dataDeAbertura(): string {
    return this._dataDeAbertura;
  }
  public set dataDeAbertura(value: string) {
    this._dataDeAbertura = value;
  }

  public get dataPrevistaDeResolucao(): string {
    return this._dataPrevistaDeResolucao;
  }
  public set dataPrevistaDeResolucao(value: string) {
    this._dataPrevistaDeResolucao = value;
  }

  public get status(): StatusDaOcorrencia {
    return this._status;
  }
  public set status(value: StatusDaOcorrencia) {
    this._status = value;
  }

  public get dataDeAtendimento(): string {
    return this._dataDeAtendimento;
  }
  public set dataDeAtendimento(value: string) {
    this._dataDeAtendimento = value;
  }

  public get dataDeConclusao(): string {
    return this._dataDeConclusao;
  }
  public set dataDeConclusao(value: string) {
    this._dataDeConclusao = value;
  }

  constructor(
    idOcorrencia: number,
    numeroDeOcorrencia: number,
    tipoDeOcorrencia: TipoDeOcorrencia,
    motivoDaOcorrencia: string,
    tipoDeUrgencia: TipoDeUrgencia,
    dataDeAbertura: string,
    dataPrevistaDeResolucao: string,
    status: StatusDaOcorrencia,
    dataDeAtendimento: string,
    dataDeConclusao: string
  ) {
    this.idOcorrencia = idOcorrencia;
    this.numeroDeOcorrencia = numeroDeOcorrencia;
    this.tipoDeOcorrencia = tipoDeOcorrencia;
    this.motivoDaOcorrencia = motivoDaOcorrencia;
    this.tipoDeUrgencia = tipoDeUrgencia;
    this.dataDeAbertura = dataDeAbertura;
    this.dataPrevistaDeResolucao = dataPrevistaDeResolucao;
    this.status = status;
    this.dataDeAtendimento = dataDeAtendimento;
    this.dataDeConclusao = dataDeConclusao;
  }
}

enum TipoDeOcorrencia {
  INATIVA = "Inativa",
  ATIVA = "Ativa",
  FURTO = "Furto",
  PERCA = "Perca",
  DEFEITO = "Defeito",
  QUEBRA = "Quebra",
}

enum TipoDeUrgencia {
  BAIXA = "Baixa",
  MEDIA = "Média",
  ALTA = "Alta",
}

enum StatusDaOcorrencia {
  ABERTA = "Aberto",
  EM_ANDAMENTO = "Em andamento",
  ATRASADA = "Atrasado",
  CONCLUIDA = "Concluido",
  SEM_SOLUCAO = "Sem solução",
  CANCELADA = "Cancelado",
}

export { Ocorrencia, TipoDeOcorrencia, TipoDeUrgencia, StatusDaOcorrencia };
