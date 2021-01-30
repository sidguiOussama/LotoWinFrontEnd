import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tirage} from '../Models/Tirage.module';


@Injectable({
  providedIn: 'root'
})
export class StatistiqueService{

 // url = 'http://localhost:8080/Statistique';
  url = 'https://loto-win-api.herokuapp.com/Statistique';
  constructor(private  http: HttpClient) { }

  getNumeroSouvent(numero: number): Observable< Map< number, number> >{
    return this.http.get<Map< number, number>>(this.url + '/GetNumeroSouvent/' + numero );
  }
  getNumeroMoinsSouvent(numero: number): Observable< Map< number, number> >{
    return this.http.get<Map< number, number>>(this.url + '/GetNumeroMoinsSouvent/' + numero );
  }

  getSortieAnnee(numero: number): Observable<Tirage[]>{
    return this.http.get<Tirage[]>(this.url + '/SortieAnnee/' + numero + '/' + 2020);
  }
}

