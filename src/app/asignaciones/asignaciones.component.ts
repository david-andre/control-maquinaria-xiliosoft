import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/models/Empleado.model';
import { Maquinaria } from 'src/models/Maquinaria';
import { EmpleadoService } from 'src/services/Empleados.service';
import { MaquinariaService } from 'src/services/Maquinaria.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css'],
})
export class AsignacionesComponent implements OnInit {
  maquinarias: Maquinaria[] = [];
  empleados: Empleado[] = [];
  checks: boolean[] = [];
  selectedEmpleado: Empleado = {
    nombre: '',
    cargo: '',
    cedula: '',
    area: '',
    maquinas: [],
  };
  assignedMaquinarias: any[] = [];

  constructor(
    private maquinariaService: MaquinariaService,
    private empleadosService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    let aux = this.maquinariaService.maquinarias.filter(
      (item) => !item.asignado
    );
    this.maquinarias = aux;
    this.checks = this.maquinarias.map(() => {
      return false;
    });
    if (this.empleados.length > 0) {
      this.selectedEmpleado = this.empleados[0];
    }
  }

  save(): void {
    this.checks.forEach((item, index) => {
      if (item) {
        this.assignedMaquinarias.push(this.maquinarias[index]);
      }
    });

    this.empleadosService.assignMaquinaria(
      this.selectedEmpleado,
      this.assignedMaquinarias
    );
    this.maquinariaService.assignEmpleado(
      this.selectedEmpleado,
      this.assignedMaquinarias
    );
    this.router.navigate(['maquinarias']);
  }
}
