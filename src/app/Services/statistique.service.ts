import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tirage} from '../Models/Tirage.module';
import {TirageDto} from '../Models/TirageDto';
import {EcartDTO} from '../Models/EcartDTO';


@Injectable({
  providedIn: 'root'
})
export class StatistiqueService{

  url = 'http://localhost:8080/Statistique';
  //url = 'https://loto-win-api.herokuapp.com/Statistique';
  constructor(private  http: HttpClient) { }

  /* getNumeroSouvent(numero: number): Observable< Map< number, number> >{
    return this.http.get<Map< number, number>>(this.url + '/GetNumeroSouvent/' + numero );
  }*/
  getNumeroSouvent(tirageDto: TirageDto): Observable< Map< number, number> >{
    return this.http.post<Map< number, number>>(this.url + '/GetNumeroSouvent' , tirageDto );
  }
  /*getNumeroMoinsSouvent(numero: number): Observable< Map< number, number> >{
    return this.http.get<Map< number, number>>(this.url + '/GetNumeroMoinsSouvent/' + numero );
  }*/
  getNumeroMoinsSouvent(tirageDto: TirageDto): Observable< Map< number, number> >{
    return this.http.post<Map< number, number>>(this.url + '/GetNumeroMoinsSouvent' , tirageDto );
  }

  getSortieAnnee(numero: number , year: number): Observable<Tirage[]>{
    return this.http.get<Tirage[]>(this.url + '/SortieAnnee/' + numero + '/' + year);
  }
  getEcart(): Observable<EcartDTO[]>{
    return this.http.get<EcartDTO[]>(this.url + '/EcartMinMax');
  }
}

