import { Comorbidade } from './comorbidade.model';
import { Sintoma } from './sintoma.model';
export interface Resposta {
  febre?: any;
  epidemiogica?: any;
  sintomas?: Sintoma;
  comorbidades?: Comorbidade;
}
