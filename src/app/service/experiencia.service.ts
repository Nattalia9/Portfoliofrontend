import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'https://backend-nr.herokuapp.com/experiencia/'
  //expURL = 'http://localhost:8080/experiencia/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL+ 'ver/experiencias');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL+ `lista/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'new/experiencia', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
