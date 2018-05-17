import {Component, OnInit} from '@angular/core';
import {Objeto} from '../../models/objeto';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ObjetosService} from '../../services/objeto.service';

@Component({
  selector: 'app-detalle-favorito',
  templateUrl: './detalle-favorito.component.html',
  styleUrls: ['./detalle-favorito.component.css'],
})
export class DetalleFavoritoComponent implements OnInit {
  public objetoa: Objeto;
  constructor(
    private _objetosService: ObjetosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Recogemos los parametros de la URL
    this.route.params.subscribe(params => {
      if (params['ob'] != null) {
        this.objeto = +params['ob'];
      }
    });
  }
}
