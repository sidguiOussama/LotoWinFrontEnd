import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fichier} from '../Models/Fichier.module';

@Injectable({
  providedIn: 'root'
})
export class FichierService{

  url = 'https://loto-win-api.herokuapp.com/Fichier';
  constructor(private  http: HttpClient) { }

  createNewFile(fichier: Fichier): Observable<Fichier>{
    return this.http.post<Fichier>(this.url + '/Add' , fichier );
  }
  uploadFile(file: any) {
    console.log('it\'s a send file');
    this.http
      .post<any>( this.url + '/upload', file)
      .subscribe(
        () => {
          console.log(' file sent !');
        },
        (error) => {
          console.log('Erreur while sending file : ' + error);
        }
      );
  }

  downloadFile(fileName: string) {
    return this.http.get<any>(this.url + '/download/' + fileName);
  }
}

