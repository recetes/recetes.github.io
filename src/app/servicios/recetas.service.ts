
import { Injectable } from "@angular/core"
import recetas from "../../assets/data/recetas.json";

@Injectable()
export class RecetasService {
    constructor() {
        console.log("Servicio listo");
    }
    getRecetas(): IReceta[] {
        return recetas;
    }
    getReceta(nombre: string): IReceta {
        return recetas.find(x => x.nombre == nombre) as IReceta;
    }
}
export interface IReceta {
    nombre: string;
    descripcion: string;
    imagen: string;
    categoria?: string;
}