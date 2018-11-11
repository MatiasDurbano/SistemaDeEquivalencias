export class Alumno {
    nombre: string;
    apellido: string;
    dni: number;
    legajo: string;
    telefono: number;
    email: string;
    carrera: string;
    documentacion: string;
    analitico: string;

    constructor(nombres: string, apellidos: string, dni: number, legajo: string,
        telefono: number, email: string, carrera: string, documentacion: string,
        analitico: string) {
            this.nombre = nombres;
            this.apellido = apellidos;
            this.dni = dni;
            this.legajo = legajo;
            this.telefono = telefono;
            this.email = email;
            this.carrera = carrera;
            this.documentacion = documentacion;
            this.analitico = analitico;
    }

    saludar(): string {
        return `nombre: ${this.nombre},
         apellido: ${this.apellido},
         dni: ${this.dni},
         legajo: ${this.legajo},
         telefono: ${this.telefono},
         email: ${this.email},
         carrera: ${this.carrera}
         documentacion: ${this.documentacion},
         analitico: ${this.analitico}`;
    }
}
