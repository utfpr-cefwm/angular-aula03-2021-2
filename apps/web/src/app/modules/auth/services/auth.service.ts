import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUsuario, IUsuarioLogado } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public login(usuario: Pick<IUsuario, 'login' | 'senha'>): Observable<IUsuarioLogado> {
    return this.httpClient.post<IUsuarioLogado>(
      `${this.apiBaseUrl}/auth/login`,
      usuario,
    );
  }

}
