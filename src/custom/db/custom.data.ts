import { Customs } from '../custom.interface';
import { externalDashboardTile } from './dashtile.data';
import { dataForm } from './data-form';
import { newsData } from './news-api.data';
import { podsButton } from './pods-button.data';
import { podsCalculator } from './pods-calculator.data';
import { podsInputAnime } from './pods-input-anime.data';
import { podsInputCNPJ } from './pods-input.data';
import { xcomp } from './xcomp.data';
import { pocData } from './poc.data';
import { pocCNPJ } from './poc-cnpj';
import { pocCPF } from './poc-cpf';
import { pocTable } from './poc-table.data';
import { pocChart } from './poc-chart';

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
    src: podsCalculator
  },
  {
    component: 'data-form',
    src: dataForm
  },
  {
    component: 'app-hero',
    src: newsData
  },
  {
    component: 'hc-root',
    src: pocData
  },
  {
    component: 'app-cnpj',
    src: pocCNPJ
  },
  {
    component: 'poc-cpf',
    src: pocCPF
  },
  {
    component: 'fp-root',
    src: pocTable
  },
  {
    component: 'chart-root',
    src: pocChart
  }
];
