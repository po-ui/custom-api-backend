import { type } from 'os';

export interface Custom {
  component: string;
  src: string;
  integrity?: string;
}

export type Customs = Array<Custom>;
