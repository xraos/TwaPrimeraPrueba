///<reference path="../../node_modules/@angular/forms/src/form_providers.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule, MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// importar rutas
import {routing, appRoutingProviders} from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import {GlobalService} from './services/global.service';
import {ObjetosService} from './services/objeto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    FavoritosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    routing
  ],
  providers: [appRoutingProviders, GlobalService, ObjetosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
