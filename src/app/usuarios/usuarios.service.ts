import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsuariosModel } from '../model/usuarios.model';

@Injectable()
export class UsuariosService {

  private urlEndPoint = 'http://localhost:8081/api/usuario';

  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<UsuariosModel[]> {
    return this.http.get<UsuariosModel[]>(this.urlEndPoint);
  }

  public eliminar(usuarios) {
   return this.http.delete(this.urlEndPoint + '/' + usuarios.codigo);
  }

}
