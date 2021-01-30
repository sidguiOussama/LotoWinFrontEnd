import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadFichierComponent} from './Components/Fichier/upload-fichier/upload-fichier.component';
import {PlusSouventComponent} from './Components/Statistiques/plus-souvent/plus-souvent.component';
import {MoinsSouventComponent} from './Components/Statistiques/moins-souvent/moins-souvent.component';
import {SortieAnneeComponent} from './Components/Statistiques/sortie-annee/sortie-annee.component';

const routes: Routes = [
  {path: 'upload', component: UploadFichierComponent },
  {path: 'plus', component: PlusSouventComponent },
  {path: 'moins', component: MoinsSouventComponent },
  {path: 'sortie', component: SortieAnneeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
