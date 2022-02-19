import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/models/Empleado.model';
import { EmpleadoService } from '../../services/Empleados.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css'],
})
export class EmpleadoFormComponent implements OnInit {
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  data: Empleado = {
    nombre: '',
    cargo: '',
    cedula: '',
    area: '',
    maquinas: [],
  };

  index: number = 0;

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];

    if (this.index) {
      this.data = this.empleadoService.retrieveEmpleado(this.index);
    }
  }
  saveEmpleado(data: Empleado) {
    if (this.index) {
      this.empleadoService.editEmpleado(this.index, data);
    } else {
      this.empleadoService.createEmpleado(data);
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos guardados',
      showConfirmButton: false,
      timer: 1500,
    });
    this.data = { nombre: '', cargo: '', cedula: '', area: '', maquinas: [] };
    this.router.navigate(['empleados']);
  }
}
