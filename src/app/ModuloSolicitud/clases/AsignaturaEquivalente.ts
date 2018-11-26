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
}
