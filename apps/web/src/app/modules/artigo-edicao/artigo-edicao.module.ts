import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoComponent } from './components/artigo/artigo.component';


@NgModule({
  declarations: [
    ArtigoComponent,
  ],
  imports: [
    CommonModule,
    ArtigoEdicaoRoutingModule,
    InputTextModule,
  ],
  exports: [
    ArtigoComponent,
  ],
})
export class ArtigoEdicaoModule {
}
