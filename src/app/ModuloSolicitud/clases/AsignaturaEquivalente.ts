export class AsignaturaEquivalente {
    nombre: string;
    institutoOrigen: string;
    anoAprobacion: number;
    cargaHoraria: number;
    documentacion: string;

    constructor(nombre: string, institutoOrigen: string,
        anoAprobacion: number, cargaHoraria: number, documentacion: string) {
        this.nombre = nombre;
        this.institutoOrigen = institutoOrigen;
        this.anoAprobacion = anoAprobacion;
        this.cargaHoraria = cargaHoraria;
        this.documentacion = documentacion;
    }

    saludar(): string {
        return `nombre: ${this.nombre},
         institutoOrigen: ${this.institutoOrigen},
         anoAprobacion: ${this.anoAprobacion},
         cargaHoraria: ${this.cargaHoraria},
         documentacion: ${this.documentacion}`;
    }
}
