import {
  Component,
  OnInit,
} from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

const MENU_ITEMS_FIXOS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    routerLink: ['/home'],
  },
];

@Component({
  selector: 'cefwm-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = MENU_ITEMS_FIXOS;

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith('/home/artigo-edicao')) {
          console.log('RECONFIGURANDO MENU');
          this.items = [
            ...MENU_ITEMS_FIXOS,
            {
              label: 'Editar artigo',
              icon: 'pi pi-fw pi-pencil',
              routerLink: ['/home/artigo-edicao/'],
            },
          ];
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
