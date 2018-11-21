import { AsignaturaEquivalente } from './AsignaturaEquivalente';

export class AsignaturasUNGS {
    materiaUngs: string;
    equivalencias: Array<AsignaturaEquivalente>;
    estado: string;
    comentario: string;

    constructor(nombre: string, equivalencias: Array<AsignaturaEquivalente>) {
        this.materiaUngs = nombre;
        this.equivalencias = equivalencias;
        this.estado = '';
        this.comentario = '';
    }

    setEstado(estado: string) {
        this.estado = estado;
    }

    saludar(): string {
        return this.materiaUngs;
    }
}
