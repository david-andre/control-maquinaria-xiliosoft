import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { EmpleadoService } from '../../services/Empleados.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }

  removeEmpleado(index: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Los cambios no podran ser revertidos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.deleteEmpleado(index);
        Swal.fire(
          'Proceso exitoso',
          'El empleado ha sido eliminado',
          'success'
        );
      }
    });
  }
}
