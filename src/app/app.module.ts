///<reference path="../../node_modules/@angular/forms/src/form_providers.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule, MatListModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoritoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
