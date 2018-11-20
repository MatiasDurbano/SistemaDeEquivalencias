import { AsignaturaEquivalente } from './AsignaturaEquivalente';

export class AsignaturasUNGS {
    materiaUngs: string;
    equivalencias: Array<AsignaturaEquivalente>;
    estado: string;
    comentarios: string;

    constructor(nombre: string, equivalencias: Array<AsignaturaEquivalente>) {
        this.materiaUngs = nombre;
        this.equivalencias = equivalencias;
        this.estado = '';
        this.comentarios = '';
    }

    setEstado(estado: string) {
        this.estado = estado;
    }

    saludar(): string {
        return this.materiaUngs;
    }
}
