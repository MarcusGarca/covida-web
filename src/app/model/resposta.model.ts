import { Comorbidade } from './comorbidade.model';
import { Sintoma } from './sintoma.model';
export interface Resposta {
  id: number;
  febre?: number;
  epidemiologica?: number;
  sintoma?: Sintoma;
  comorbidade?: Comorbidade;
}
