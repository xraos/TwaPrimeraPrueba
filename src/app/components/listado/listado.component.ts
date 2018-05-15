import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Objeto } from '../../models/objeto';
import {ObjetosService} from '../../services/objeto.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ObjetosService]
})
export class ListadoComponent implements OnInit {

  public objetos;

  constructor(
    private objetoService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.objetoService.getObjetos().subscribe(
      result => {
        this.objetos = result;
      }
    );
  }
}