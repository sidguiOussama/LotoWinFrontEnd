import {NgModule} from '@angular/core';
import {Fichier} from './Fichier.module';
import {Combinaison} from './Combinaison.module';



export class Tirage {
  id: number;
  numeroTirage: number;
  date: Date;
  jour: string;
  fichier: Fichier;
  combinaison: Combinaison;

  constructor() {
  }
}
