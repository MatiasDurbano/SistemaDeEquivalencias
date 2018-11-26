import { Alumno } from './Alumno';
import { AsignaturasUNGS } from './AsignaturasUNGS';
import { Comentario } from './Comentario';

export class Solicitud {
    alumno: Alumno;
    asignaturasUNGS: Array<AsignaturasUNGS>;
    estado: boolean;

    constructor(alumno: Alumno, asignaturasUNGS: Array<AsignaturasUNGS>) {
        this.alumno = alumno;
        this.asignaturasUNGS = asignaturasUNGS;
        this.estado = false;
    }
}
