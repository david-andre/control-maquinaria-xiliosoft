import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { EmpleadoService } from 'src/services/Empleados.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }
}
