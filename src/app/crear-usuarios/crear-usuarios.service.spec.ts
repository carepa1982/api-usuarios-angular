import { TestBed, inject } from '@angular/core/testing';

import { CrearUsuariosService } from './crear-usuarios.service';

describe('CrearUsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearUsuariosService]
    });
  });

  it('should be created', inject([CrearUsuariosService], (service: CrearUsuariosService) => {
    expect(service).toBeTruthy();
  }));
});
