import { NgModule } from '@angular/core';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

const routes: Routes =[
    {path:'',redirectTo:'/usuariosComponent',pathMatch:'full'},
    {path:'appComponent',component:AppComponent},
    {path:'usuariosComponent',component:UsuariosComponent},
    {path:'crearUsuariosComponent',component: CrearUsuariosComponent},
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class  AppRoutingModule { }
