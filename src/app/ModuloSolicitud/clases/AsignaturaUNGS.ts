import { AsignaturaEquivalente } from './AsignaturaEquivalente';

export class AsignaturaUNGS {
    nombre: string;
    equivalencias: Array<AsignaturaEquivalente>;
    estado: boolean;
    comentarios: string;

    constructor(nombre: string, equivalencias: Array<AsignaturaEquivalente>) {
        this.nombre = nombre;
        this.equivalencias = equivalencias;
        this.estado = false;
        this.comentarios = '';
    }

    saludar(): string {
        return this.nombre;
    }
}
