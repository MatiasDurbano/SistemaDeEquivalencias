import {Materia} from "./Materia"
export class Carrera{
    carrera:string
    public materias: Array<Materia>;

    constructor(carrera: string, list: Array<Materia>){
        this.carrera=carrera;
        this.materias=list;

    }
}