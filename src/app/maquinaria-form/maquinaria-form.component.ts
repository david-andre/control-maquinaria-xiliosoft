import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maquinaria } from 'src/models/Maquinaria';
import { MaquinariaService } from 'src/services/Maquinaria.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-maquinaria-form',
  templateUrl: './maquinaria-form.component.html',
  styleUrls: ['./maquinaria-form.component.css'],
})
export class MaquinariaFormComponent implements OnInit {
  constructor(
    private maquinariaService: MaquinariaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  data: Maquinaria = {
    serie: '',
    descripcion: '',
    asignado: false,
    empleado: { nombre: '' },
  };

  index: number = 0;

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];

    if (this.index) {
      this.data = this.maquinariaService.retrieveMaquinaria(this.index);
    }
  }
  saveMaquinaria(data: Maquinaria) {
    if (this.index) {
      this.maquinariaService.editMaquinaria(this.index, data);
    } else {
      this.maquinariaService.createMaquinaria(data);
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos guardados',
      showConfirmButton: false,
      timer: 1500,
    });
    this.data = {
      serie: '',
      descripcion: '',
      asignado: false,
      empleado: { nombre: '' },
    };
    this.router.navigate(['maquinarias']);
  }

  disallowMaquinaria() {
    this.maquinariaService.disallowMaquinaria(this.index);
    this.router.navigate(['maquinarias']);
  }
}
