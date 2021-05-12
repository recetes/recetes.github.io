import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { PlatosComponent } from './platos/platos.component'
import { RecetaComponent } from './receta/receta.component';

const routes: Routes = [
  { path: "platos", component: PlatosComponent },
  { path: "editor", component: EditorComponent },
  { path: "receta/:nombre", component: RecetaComponent },
  { path: '',   redirectTo: '/platos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
