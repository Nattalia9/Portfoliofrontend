import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'https://porttfolio-nr.herokuapp.com/habilidad/'
  /*URL = 'http://localhost:8080/habilidad/'*/

  constructor(private httpClient : HttpClient) { }
  
  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.URL + 'ver/habilidades');
  }

  public detail(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.URL + `lista/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new/habilidad', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } 
}

