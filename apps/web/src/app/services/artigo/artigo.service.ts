import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

import { Artigo, IArtigo } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor(
    private httpClient: HttpClient,
    @Inject('API_BASE_URL') private apiBaseUrl: string,
  ) {
  }

  public getAll(): Observable<Artigo[]> {
    return this.httpClient.get<IArtigo[]>(`${this.apiBaseUrl}/artigos`).pipe(
      map((iArtigos: IArtigo[]) => {
        return iArtigos.map((iArtigo: IArtigo) => Artigo.fromJson(iArtigo));
      }),
    );
  }

}
