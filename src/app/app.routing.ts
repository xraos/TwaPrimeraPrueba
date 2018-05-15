import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes a Utilizar
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FavoritoComponent} from './components/favorito/favorito.component';
import {DetalleComponent} from './components/detalle/detalle.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'favorito', component: FavoritoComponent},
  {path: 'detalle-objeto/:id', component: DetalleComponent},
  {path: '**', component: ErrorComponent},
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
