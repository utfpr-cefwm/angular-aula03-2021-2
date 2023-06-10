import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {

  public items: MenuItem[] = MENU_ITEMS_FIXOS;

  public subscription: Subscription;

  constructor(
    private router: Router,
  ) {
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith('/home/artigo-edicao')) {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
