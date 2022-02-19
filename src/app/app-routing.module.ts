import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { ResumenComponent } from './resumen/resumen.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { MaquinariaFormComponent } from './maquinaria-form/maquinaria-form.component';

const routes: Routes = [
  { path: '', component: EmpleadoComponent },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'empleados/form', component: EmpleadoFormComponent },
  { path: 'empleados/form/:id', component: EmpleadoFormComponent },
  { path: 'maquinarias', component: MaquinariaComponent },
  { path: 'maquinarias/form', component: MaquinariaFormComponent },
  { path: 'maquinarias/form/:id', component: MaquinariaFormComponent },
  { path: 'asignaciones', component: AsignacionesComponent },
  { path: 'resumen', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
