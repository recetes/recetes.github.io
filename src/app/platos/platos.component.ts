import { Component, OnInit } from '@angular/core';
//import recetasJson from "../../assets/data/recetas.json";
import { IReceta, RecetasService } from "../servicios/recetas.service"
@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.styl']
})
export class PlatosComponent implements OnInit {
  recetas: IReceta[] = [];
  constructor(private RecetasService: RecetasService) {
  }

  ngOnInit(): void {
    this.recetas = this.RecetasService.getRecetas();
    console.log(this.recetas);
  }
}
