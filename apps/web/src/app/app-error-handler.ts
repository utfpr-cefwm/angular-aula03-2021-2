import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";

import { MessageService } from "primeng/api";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private ngZone: NgZone,
    private messageService: MessageService,
  ) {
    super();
  }

  public handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      this.ngZone.run(() => {
        this.messageService.add({
          severity: 'error',
          summary: `Erro de servidor: [${err.status}] ${err.statusText}`,
          detail: `${err.error}`,
        });
      });
    }
  }

}
