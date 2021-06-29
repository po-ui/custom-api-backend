import { Customs } from '../custom.interface';
import { externalDashboardTile } from './dashtile.data';
import { dataForm } from './data-form';
import { podsButton } from './pods-button.data';
import { podsCalculator } from './pods-calculator.data';
import { podsInputAnime } from './pods-input-anime.data';
import { podsInputCNPJ } from './pods-input.data';
import { xcomp } from './xcomp.data';

export const customs: Customs = [
  {
    component: 'external-dashboard-tile',
    src: externalDashboardTile,
  },
  {
    component: 'x-dropdown',
    src: xcomp,
  },
  {
    component: 'pods-button',
    src: podsButton,
  },
  {
    component: 'pods-input-cnpj',
    src: podsInputCNPJ,
  },
  {
    component: 'pods-input-anime',
    src: podsInputAnime,
  },
  {
    component: 'pods-calculator',
    src: podsCalculator,
    integrity: 'sha256-4be7b6642b779554aed30f863930bd94bc764968dcef94c3878034da19c6250b'
  },
  {
    component: 'data-form',
    src: dataForm
  }
];
