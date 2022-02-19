import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { Maquinaria } from 'src/models/Maquinaria';
import { MaquinariaService } from './Maquinaria.service';

export class EmpleadoService {
  empleados: Empleado[] = [
    new Empleado('Jhon Doe', 'Supervisor', '1804837456', 'Mantenimiento', []),
  ];

  createEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }
  editEmpleado(index: number, empleado: Empleado) {
    this.empleados[index] = empleado;
  }
  retrieveEmpleado(index: number) {
    let empleado: Empleado = this.empleados[index];
    return empleado;
  }
  deleteEmpleado(index: number) {
    this.empleados.splice(index, 1);
  }
  assignMaquinaria(empleado: Empleado, maquinarias: any[]) {
    let aux = this.empleados.map((item, index) => {
      if (item.cedula === empleado.cedula) {
        return {
          nombre: item.nombre,
          cargo: item.cargo,
          area: item.area,
          cedula: item.cedula,
          maquinas: this.empleados[index].maquinas.concat(maquinarias),
        };
      } else {
        return item;
      }
    });
    this.empleados = aux;
  }
  disallowMaquinaria(maquinaria: any) {
    this.empleados.forEach((element, index) => {
      element.maquinas.forEach(() => {
        this.empleados[index].maquinas = element.maquinas.filter(
          (e) => e.serie !== maquinaria.serie
        );
      });
    });
  }
}
