import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CrearUsuariosComponent
  ],
  imports: [ 
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
   ],
  providers: [],
  bootstrap:[AppComponent]
})

export class AppModule {
  title = 'app';
}
