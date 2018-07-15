import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { UsuariosModel } from '../model/usuarios.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {

  constructor(private http : HttpClient) { }

  public getUsuarios(): Observable<UsuariosModel[]>{
    return this.http.get<UsuariosModel[]>("http://localhost:8081/api/usuario");
  }

  public eliminar(usuarios) {
   return this.http.delete("http://localhost:8081/api/usuario" +"/"+ usuarios.codigo);
  }

}
