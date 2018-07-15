import { CrearUsuariosService } from './crear-usuarios.service';
import { UsuariosModel } from './../model/usuarios.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { OK } from './../model/httpstatus';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css'],
  providers:[CrearUsuariosService] 
})
export class CrearUsuariosComponent implements OnInit {
  
  private usuarios: UsuariosModel;
  private isValid : boolean = true;
  private message : string = "";

  constructor(private crearUsuariosService : CrearUsuariosService,
    private router: Router) { 

      if(sessionStorage.getItem("usuarios")){
        this.usuarios = JSON.parse(sessionStorage.getItem("usuarios"));
      }else{
        this.usuarios = new UsuariosModel();
      }
    }

  ngOnInit() {
  }

  public saveOrUpdate():void{
    this.isValid = this.crearUsuariosService.validate(this.usuarios);
    
    if (this.isValid) {
      this.crearUsuariosService.saveOrUpdate(this.usuarios).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/usuariosComponent']);
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = "Los campos con * son obligatorios";
    }
    sessionStorage.clear();
  }

}
