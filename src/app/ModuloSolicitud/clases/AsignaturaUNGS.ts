import { AsignaturaEquivalente } from './AsignaturaEquivalente';

export class AsignaturaUNGS {
    nombre: string;
    equivalencias: Array<AsignaturaEquivalente>;
    estado: string;
    comentarios: string;

    constructor(nombre: string, equivalencias: Array<AsignaturaEquivalente>) {
        this.nombre = nombre;
        this.equivalencias = equivalencias;
        this.estado = '';
        this.comentarios = '';
    }

    setEstado(estado: string) {
        this.estado = estado;
    }

    saludar(): string {
        return this.nombre;
    }
}
