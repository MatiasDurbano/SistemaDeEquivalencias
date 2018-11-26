import { AsignaturaEquivalente } from './AsignaturaEquivalente';

export class AsignaturasUNGS {
    materiaUngs: String;
    equivalencias: Array<AsignaturaEquivalente>;
    estado: String;
    comentario: String;

    constructor(nombre: String, equivalencias: Array<AsignaturaEquivalente>) {
        this.materiaUngs = nombre;
        this.equivalencias = equivalencias;
        this.estado = '';
        this.comentario = '';
    }

    setEstado(estado: String) {
        this.estado = estado;
    }

    setComentario(comentario: String) {
        this.comentario = comentario;
    }

    saludar(): String {
        return this.materiaUngs;
    }
}
