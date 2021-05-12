import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../servicios/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.styl']
})
export class RecetaComponent implements OnInit {

  recetaActual: any = {};
  constructor(private _activatedRouter: ActivatedRoute,
    private _recetaService: RecetasService) {
    this._activatedRouter.params.subscribe(p => {
      this.recetaActual = this._recetaService.getReceta(p.nombre);
    })
  }

  ngOnInit(): void {
  }

}
