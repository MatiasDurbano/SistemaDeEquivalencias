export class AsignaturaEquivalente {
    nombre: string;
    institutoOrigen: string;
    anoAprobacion: number;
    cargaHoraria: number;

    constructor(nombre: string, institutoOrigen: string,
        anoAprobacion: number, cargaHoraria: number) {
        this.nombre = nombre;
        this.institutoOrigen = institutoOrigen;
        this.anoAprobacion = anoAprobacion;
        this.cargaHoraria = cargaHoraria;
    }

    saludar(): string {
        return `nombre: ${this.nombre},
         institutoOrigen: ${this.institutoOrigen},
         anoAprobacion: ${this.anoAprobacion},
         cargaHoraria: ${this.cargaHoraria}`;
    }
}
