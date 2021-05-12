import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatosComponent } from './platos/platos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditorComponent } from './editor/editor.component';
import { RecetaComponent } from './receta/receta.component';

import{RecetasService} from './servicios/recetas.service';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    CabeceraComponent,
    SidebarComponent,
    EditorComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
