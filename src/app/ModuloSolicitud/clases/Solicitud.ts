import { Alumno } from './Alumno';
import { AsignaturaUNGS } from './AsignaturaUNGS';
import { Comentario } from './Comentario';

export class Solicitud {
    alumno: Alumno;
    asignaturasUNGS: Array<AsignaturaUNGS>;
    estado: string;
    
    constructor(alumno: Alumno, asignaturasUNGS: Array<AsignaturaUNGS>) {
        this.alumno = alumno;
        this.asignaturasUNGS = asignaturasUNGS;
        this.estado = "En_Espera";
        
    }

    saludar(): string {
        return `${this.alumno.saludar()}
        ${this.asignaturasUNGS.length}`;
    }
}
