import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cefwm-angular-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css'],
})
export class ArtigoComponent implements OnInit {

  public titulo: FormControl = new FormControl('');
  public descricao: FormControl = new FormControl('');
  public imagem: FormControl = new FormControl('');
  public url: FormControl = new FormControl('');

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.artigoId;
    });
  }

}
