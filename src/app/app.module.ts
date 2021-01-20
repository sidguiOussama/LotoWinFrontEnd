import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFichierComponent } from './Components/Fichier/upload-fichier/upload-fichier.component';
import {FichierService} from './Services/fichier.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UploadFichierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FichierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
