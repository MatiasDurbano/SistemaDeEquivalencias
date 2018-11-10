import {Materia} from "./Materia"
export class Carrera{
    nombre:string
    public materias: Array<Materia>;

    constructor(carrera: string, list: Array<Materia>){
        this.nombre=carrera;
        this.materias=list;

    }
}