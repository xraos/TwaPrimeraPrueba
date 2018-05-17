import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ObjetosService} from '../../services/objeto.service';
import {Objeto} from '../../models/objeto';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public let; favoritos = [];
  public objeto: Objeto;
  constructor(private objetoService: ObjetosService, private router: Router) { }

  ngOnInit() {
    this.favoritos = this.objetoService.getFavoritos();
    console.log(this.favoritos);
  }
  borrarFavorito(objeto) {
    this.objetoService.borrarFavorito(objeto);
  }
  redirigir(ob: Objeto, i: string) {
    this.router.navigate(['/favoritos/detalle-objeto', i , ob]);
  }
}
