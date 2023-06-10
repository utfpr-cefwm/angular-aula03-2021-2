import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Artigo, IArtigo } from '@cefwm-angular/common';
import { map } from 'rxjs/operators';
import { ModifyResult } from 'mongodb';

@Injectable({
  providedIn: 'root',
})
export class ArtigoEdicaoService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public get(id: number): Observable<Artigo> {
    return this.httpClient.get<IArtigo>(`${this.apiBaseUrl}/artigos/${id}`).pipe(
      map(iArtigo => Artigo.fromJson(iArtigo)),
    );
  }

  public put(iArtigo: IArtigo): Observable<ModifyResult<IArtigo>> {
    return this.httpClient.put<ModifyResult<IArtigo>>(
      `${this.apiBaseUrl}/artigos/${iArtigo._id}`,
      iArtigo,
    );
  }

}
