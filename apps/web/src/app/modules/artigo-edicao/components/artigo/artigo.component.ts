import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { IArtigo } from '@cefwm-angular/common';

import { ArtigoEdicaoService } from '../../services/artigo-edicao.service';

@Component({
  selector: 'cefwm-angular-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css'],
})
export class ArtigoComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(''),
    titulo: new FormControl(''),
    descricao: new FormControl(''),
    imagem: new FormControl(''),
    url: new FormControl(''),
  });

  public subDesinscricao: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private artigoEdicaoService: ArtigoEdicaoService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.subDesinscricao),
    ).subscribe(params => {
      const id = +params.artigoId;
      this.artigoEdicaoService.get(id).pipe(
        takeUntil(this.subDesinscricao),
      ).subscribe(artigo => {
        this.formGroup.setValue(artigo.toJson());
      });
    });
  }

  ngOnDestroy(): void {
    this.subDesinscricao.next();
    this.subDesinscricao.complete();
  }

  public salvar(): void {
    const iArtigo: IArtigo = this.formGroup.value;
    this.artigoEdicaoService.put(iArtigo).pipe(
      takeUntil(this.subDesinscricao),
    ).subscribe(result => {
      if (result.ok) {
        console.log('TUDO OK!', result.value);
      } else {
        console.error(result.lastErrorObject);
      }
    });
  }

}
