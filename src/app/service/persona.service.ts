import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backend-nr.herokuapp.com/persona/';
  /*URL = 'http://localhost:8080/persona/';*/

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'ver/perfil');
  }

  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `lista/${id}`);
  }

  public updatePersona(id: number,persona:persona): Observable<persona>{
    return this.http.put<persona>(this.URL + `editar/${id}`, persona);
  }

}
