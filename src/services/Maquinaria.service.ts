import { Injectable } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { Maquinaria } from '../models/Maquinaria';
import { EmpleadoService } from './Empleados.service';

@Injectable()
export class MaquinariaService {
  maquinarias: Maquinaria[] = [
    new Maquinaria('SR12356', 'Horno de fundir', false, {
      nombre: '',
    }),
  ];

  constructor(private empleadoService: EmpleadoService) {}

  createMaquinaria(maquinaria: Maquinaria) {
    this.maquinarias.push(maquinaria);
  }
  editMaquinaria(index: number, maquinaria: Maquinaria) {
    this.maquinarias[index] = maquinaria;
  }
  disallowMaquinaria(index: number) {
    this.maquinarias[index].empleado = {
      nombre: '',
    };
    this.maquinarias[index].asignado = false;
  }

  retrieveMaquinaria(index: number) {
    let maquinaria: Maquinaria = this.maquinarias[index];
    return maquinaria;
  }
  deleteMaquinaria(index: number) {
    let maq = this.retrieveMaquinaria(index);
    console.log(maq);
    this.maquinarias.splice(index, 1);

    this.empleadoService.disallowMaquinaria(maq);
  }
  assignEmpleado(empleado: Empleado, maquinarias: any[]) {
    maquinarias.forEach((item) => {
      this.maquinarias.forEach((element, index) => {
        console.log('item', item.serie);
        console.log('element', element.serie);
        if (item.serie === element.serie) {
          this.maquinarias[index] = {
            serie: item.serie,
            descripcion: item.descripcion,
            asignado: true,
            empleado: { nombre: empleado.nombre },
          };
        } else {
          this.maquinarias[index] = element;
        }
      });
    });
  }
}
