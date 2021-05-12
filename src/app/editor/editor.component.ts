import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.styl']
})
export class EditorComponent implements OnInit {

  private path = "./src/assets/data";
  private archivo_resultado = "recetas.json";
  recetas = new Array<string>();
  constructor() {
    //this.recetas = this.obtieneListaRecetas();
  }

  ngOnInit(): void {
  }
  /*obtieneListaRecetas = (): Array<string> => {
    let files = new Array<string>();
    /*fs.recurse(this.path, (path: string, rel: string, name: string) => {
      files.push(name);
    });
    files = files.filter(x => x != this.archivo_resultado);
    return files
  }*/

}
