
export class alumnoModelo {
    public nombre: String;
    public apellido: string;
    public dni: string;
    public legajo: string;
    public telefono: string;
    public email: string;

    constructor(){
        this.nombre="";
        this.apellido="";
        this.dni="";
        this.legajo="";
        this.telefono="";
        this.email="";
    }

    set(nombre:string, apellido:string,dni:string,legajo:string,telefono:string,email:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.legajo=legajo;
        this.telefono=telefono;
        this.email=email;
    }
}