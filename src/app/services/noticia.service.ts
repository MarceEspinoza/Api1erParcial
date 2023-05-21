import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private https: HttpClient) { }



  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais +'&category=' + parametros.categoria + '&apiKey=a7cd1c419732406f970e6f0b53446a3c'
    return this.https.get(URL);
  }
}
