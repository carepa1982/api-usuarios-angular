import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UsuariosModel } from './../model/usuarios.model';
import { CustomResponseType } from './../model/CustomResponseType';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuariosService {

  constructor(private http: HttpClient) { }

  public saveOrUpdate(usuario: UsuariosModel): Observable <CustomResponseType> {
    return this.http.post<CustomResponseType>('http://localhost:8081/api/usuario' , JSON.stringify(usuario));
  }

  /**
   * Metodo que valida campos obligatorios
   * @param usuario
   */
  public validate(usuario: UsuariosModel): boolean {
    let isValid = true;

    if (!usuario.primerNombre) {
      isValid = false;
    }
    if (!usuario.segundoNombre) {
      isValid = false;
    }
    if (!usuario.login) {
      isValid = false;
    }
    if (!usuario.email) {
      isValid = false;
    }
    return isValid;
  }
}
