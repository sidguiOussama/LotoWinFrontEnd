import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadFichierComponent} from './Components/Fichier/upload-fichier/upload-fichier.component';

const routes: Routes = [
  {path: 'upload', component: UploadFichierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
