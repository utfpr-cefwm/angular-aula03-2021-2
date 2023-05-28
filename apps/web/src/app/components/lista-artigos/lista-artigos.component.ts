import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Artigo } from '@cefwm-angular/common';

import { ArtigoService } from '../../services/artigo/artigo.service';

@Component({
  selector: 'cefwm-angular-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css']
})
export class ListaArtigosComponent implements OnInit {

  public artigos$: Observable<Artigo[]> = this.artigoService.getAll();

  constructor(
    private artigoService: ArtigoService,
  ) {
  }

  ngOnInit(): void {
  }

  public editaArtigo(artigo: Artigo, event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

}
