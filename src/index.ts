import { Departamento } from "./Departamento/departamento";
import { Setor } from "./Setor/setor";
import { Colaborador } from "./Colaborador/colaborador";
import { Cargo } from "./Cargo/cargo";

import { EstadoDoBem, Patrimonio } from "./Patrimonio/patrimonio";
import { Categoria } from "./Patrimonio/categoria";
import {
  Ocorrencia,
  StatusDaOcorrencia,
  TipoDeOcorrencia,
  TipoDeUrgencia,
} from "./Ocorrencia/ocorrencia";

const sentavel: Categoria = new Categoria(12345, "sentável");

const oco0001: Ocorrencia = new Ocorrencia(
  9876,
  20230528001,
  TipoDeOcorrencia.INATIVA,
  "Ainda não foi montada",
  TipoDeUrgencia.ALTA,
  "2023/05/28 12:43:00",
  "2023/05/31 12:43:00",
  StatusDaOcorrencia.ABERTA,
  "",
  ""
);

const cadeira: Patrimonio = new Patrimonio(
  [sentavel],
  23456,
  34567,
  "cadeira",
  "2023/05/28 12:39:00",
  36,
  100,
  10,
  EstadoDoBem.OCORRENCIA,
  oco0001
);

console.log(sentavel);

console.log(oco0001);

console.log(cadeira);
