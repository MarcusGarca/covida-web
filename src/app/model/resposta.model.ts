import { Comorbidade } from './comorbidade.model';
import { Sintoma } from './sintoma.model';
export interface Resposta {
  id: any;
  febre?: any;
  epidemiologica?: any;
  sintoma?: Sintoma;
  comorbidade?: Comorbidade;
}
