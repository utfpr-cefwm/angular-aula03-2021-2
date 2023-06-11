import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IUsuarioLogado } from '@cefwm-angular/common';

import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.formGroup.value).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.messageService.add({
            severity: 'warn',
            summary: err.error,
          });
          return of(undefined);
        }
        throw err;
      }),
    ).subscribe((iUsuarioLogado?: IUsuarioLogado) => {
      if (iUsuarioLogado) {
        this.messageService.add({
          severity: 'success',
          summary: `Olá novamente, ${iUsuarioLogado.usuario.nome}`,
          detail: iUsuarioLogado.usuario.administrador
          ? 'Seus poderes de administrador foram ativados!'
          : 'Estamos redirecionando você para o conteúdo...'
        });
        window.localStorage.setItem('jwt', iUsuarioLogado.jwt);
        setTimeout(() => {
          this.router.navigate([ '/' ]);
        }, 1000);
      }
    });
  }

}
