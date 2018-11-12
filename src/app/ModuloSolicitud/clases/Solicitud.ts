import { Alumno } from './Alumno';
import { AsignaturaUNGS } from './AsignaturaUNGS';
import { Comentario } from './Comentario';

export class Solicitud {
    alumno: Alumno;
    asignaturasUNGS: Array<AsignaturaUNGS>;
<<<<<<< HEAD
    estado: boolean;

    constructor(alumno: Alumno, asignaturasUNGS: Array<AsignaturaUNGS>) {
        this.alumno = alumno;
        this.asignaturasUNGS = asignaturasUNGS;
        this.estado = false;
=======
    estado: string;
    
    constructor(alumno: Alumno, asignaturasUNGS: Array<AsignaturaUNGS>) {
        this.alumno = alumno;
        this.asignaturasUNGS = asignaturasUNGS;
        this.estado = "En_Espera";
        
>>>>>>> 0cd6ae0f63529a1534d43065dbb2769db514cd4e
    }

    saludar(): string {
        return `${this.alumno.saludar()}
        ${this.asignaturasUNGS.length}`;
    }
}
