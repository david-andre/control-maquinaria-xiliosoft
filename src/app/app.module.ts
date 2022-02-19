import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { ResumenComponent } from './resumen/resumen.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpleadoService } from '../services/Empleados.service';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { MaquinariaFormComponent } from './maquinaria-form/maquinaria-form.component';
import { MaquinariaService } from 'src/services/Maquinaria.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    MaquinariaComponent,
    AsignacionesComponent,
    ResumenComponent,
    SidebarComponent,
    EmpleadoFormComponent,
    MaquinariaFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmpleadoService, MaquinariaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
