import { Alumno } from './Alumno';
import { AsignaturaUNGS } from './AsignaturaUNGS';
import { Comentario } from './Comentario';

export class Solicitud {
    alumno: Alumno;
    asignaturaUngs: Array<AsignaturaUNGS>;
    estado: boolean;

    constructor(alumno: Alumno, asignaturaUNGS: Array<AsignaturaUNGS>) {
        this.alumno = alumno;
        this.asignaturaUngs = asignaturaUNGS;
        this.estado = false;
    }

    saludar(): string {
        return `${this.alumno.saludar()}
        ${this.asignaturaUngs.length}`;
    }
}
