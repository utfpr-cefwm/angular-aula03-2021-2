import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { MessageService } from "primeng/api";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private messageService: MessageService,
  ) {
    super();
  }

  public handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      this.ngZone.run(() => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
          return;
        }
        this.messageService.add({
          severity: 'error',
          summary: `Erro de servidor: [${err.status}] ${err.statusText}`,
          detail: `${err.error}`,
        });
      });
    }
  }

}
