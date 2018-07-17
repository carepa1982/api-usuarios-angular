import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

}
