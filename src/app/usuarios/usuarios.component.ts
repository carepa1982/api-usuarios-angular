import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuariosService } from './usuarios.service';
import { UsuariosModel } from './../model/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  private usuarios: Array<UsuariosModel>;

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  private loadUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }

  public editar(usuarios: UsuariosModel): void {
    sessionStorage.setItem('usuarios' , JSON.stringify(usuarios));
    this.router.navigate(['/crearUsuariosComponent']);
  }

  public eliminar(usuarios: UsuariosModel): void {
    this.usuariosService.eliminar(usuarios)
    .subscribe( data => {
      this.usuarios = this.usuarios.filter(u => u !== usuarios);
    });
  }

  delete(usuarios: UsuariosModel): void {
    Swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el usuario ${usuarios.primerNombre} ${usuarios.segundoNombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuariosService.eliminar(usuarios)
        .subscribe( data => {
         this.usuarios = this.usuarios.filter(u => u !== usuarios);
         Swal(
              'Usuario Eliminado!',
              `Usuario ${usuarios.primerNombre} eliminado con éxito.`,
              'success'
            );
          }
        );
      }
    });
  }
}
