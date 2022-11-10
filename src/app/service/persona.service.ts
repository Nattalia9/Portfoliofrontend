import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backend-nr.herokuapp.com/persona/';
  //URL = 'http://localhost:8080/persona/';
  
  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `lista/${id}`);
  }

  public updatePersona(id: number,persona:persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
  }

  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new/persona', persona);
  }

}
