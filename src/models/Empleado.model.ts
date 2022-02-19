import { Maquinaria } from './Maquinaria';

export class Empleado {
  constructor(
    public nombre: String,
    public cargo: String,
    public cedula: String,
    public area: String,
    public maquinas: any[]
  ) {}
}
