import { Component, OnInit } from '@angular/core';
import { Maquinaria } from 'src/models/Maquinaria';
import { MaquinariaService } from 'src/services/Maquinaria.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.css'],
})
export class MaquinariaComponent implements OnInit {
  maquinarias: Maquinaria[] = [];

  constructor(private maquinariaService: MaquinariaService) {}

  ngOnInit(): void {
    this.maquinarias = this.maquinariaService.maquinarias;
  }

  removeMaquinaria(index: number) {
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
        this.maquinariaService.deleteMaquinaria(index);
        Swal.fire(
          'Proceso exitoso',
          'La maquinaria ha sido eliminada',
          'success'
        );
      }
    });
  }
}
