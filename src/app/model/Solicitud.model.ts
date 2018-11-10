import { SolicitudOfrecimiento } from "./SolicitudOfrecimiento.model";

export class SolicitudModel{
    
    public list: Array<SolicitudOfrecimiento>;
    public materiaUngs: string;

    constructor(datos:Array<SolicitudOfrecimiento>, asignatura: string){
        this.list=datos;
        this.materiaUngs=asignatura;

    }
}