import { Alumno } from './Alumno';
import { AsignaturaUNGS } from './AsignaturaUNGS';
import { Comentario } from './Comentario';

export class Solicitud {
    alumno: Alumno;
    asignaturasUNGS: Array<AsignaturaUNGS>;
    estado: string;
    comentario: Comentario
    constructor(alumno: Alumno, asignaturasUNGS: Array<AsignaturaUNGS>) {
        this.alumno = alumno;
        this.asignaturasUNGS = asignaturasUNGS;
        this.estado = "En_Espera";
        this.comentario=new Comentario();
    }

    saludar(): string {
        return `${this.alumno.saludar()}
        ${this.asignaturasUNGS.length}`;
    }
}
