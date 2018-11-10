export class SolicitudOfrecimiento{

    public instituto: string;
    public añoAprobacion: number;
    public asignaturaPropuesta: string;

    constructor(){
        this.instituto="";
        this.añoAprobacion=0;
        this.asignaturaPropuesta="";
    }

    set(instituto: string,añoAprobacion:number,asignaturaPropuesta:string) {
        this.instituto=instituto;
        this.añoAprobacion=añoAprobacion;
        this.asignaturaPropuesta=asignaturaPropuesta;
        console.log(this.instituto+" "+this.añoAprobacion+" "+this.asignaturaPropuesta);
    }
}