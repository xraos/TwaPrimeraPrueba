import { Component, OnInit } from '@angular/core';
import {ObjetosService} from '../../services/objeto.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public let; favoritos = [];
  constructor(private objetoService: ObjetosService) { }

  ngOnInit() {
    this.favoritos = this.objetoService.getFavoritos();
    console.log(this.favoritos);
  }
  borrarFavorito(objeto) {
    this.objetoService.borrarFavorito(objeto);
  }

}
