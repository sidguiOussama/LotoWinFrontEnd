import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFichierComponent } from './Components/Fichier/upload-fichier/upload-fichier.component';
import {FichierService} from './Services/fichier.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PlusSouventComponent } from './Components/Statistiques/plus-souvent/plus-souvent.component';
import {StatistiqueService} from './Services/statistique.service';
import { MoinsSouventComponent } from './Components/Statistiques/moins-souvent/moins-souvent.component';
import { SortieAnneeComponent } from './Components/Statistiques/sortie-annee/sortie-annee.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFichierComponent,
    PlusSouventComponent,
    MoinsSouventComponent,
    SortieAnneeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FichierService,
    StatistiqueService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
