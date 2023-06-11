import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListaArtigosComponent } from './components/lista-artigos/lista-artigos.component';
import { AppErrorHandler } from './app-error-handler';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaArtigosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:4200/api',
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
