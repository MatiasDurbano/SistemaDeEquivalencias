import { Alumno } from './Alumno';
import { AsignaturaEquivalente } from './AsignaturaEquivalente';
import { AsignaturasUNGS } from './AsignaturasUNGS';
import { Solicitud } from './Solicitud';
import { Administrador } from 'src/app/ModuloAdmin/model/Administrador';
import { CarreraUNGS } from 'src/app/ModuloAdmin/model/CarreraUNGS';
import { Instituto } from 'src/app/model/Instituto';

export class MockSolicitudes {

    mockAlumno: MockAlumno = new MockAlumno();
    mockAsignaturasUNGS: MockAsignaturaUNGS = new MockAsignaturaUNGS();

    solicitud1: Solicitud = {
        alumno: this.mockAlumno.alumno1,
        asignaturasUNGS: [
            this.mockAsignaturasUNGS.asignaturaUNGS1,
            this.mockAsignaturasUNGS.asignaturaUNGS2
        ],
        estado: false
    };

    solicitud2: Solicitud = {
        alumno: this.mockAlumno.alumno2,
        asignaturasUNGS: [
            this.mockAsignaturasUNGS.asignaturaUNGS2,
            this.mockAsignaturasUNGS.asignaturaUNGS3
        ],
        estado: false
    };

    solicitud3: Solicitud = {
        alumno: this.mockAlumno.alumno3,
        asignaturasUNGS: [
            this.mockAsignaturasUNGS.asignaturaUNGS1,
            this.mockAsignaturasUNGS.asignaturaUNGS3
        ],
        estado: false
    };
}

export class MockAlumno {
    alumno1: Alumno = {
        nombre: 'Maxi',
        apellido: 'Pompilio',
        dni: 3907182,
        legajo: '39072145/2013',
        telefono: 1150287946,
        email: 'maxi@gmail.com',
        carrera: 'Licenciatura en Sistemas',
        documentacion: 'string',
        analitico: 'string',
    };

    alumno2: Alumno = {
        nombre: 'Matias',
        apellido: 'D´urbano',
        dni: 38465789,
        legajo: '38465789/2013',
        telefono: 1164789234,
        email: 'matias@gmail.com',
        carrera: 'Ingieneria Industrial',
        documentacion: 'string',
        analitico: 'string',
    };

    alumno3: Alumno = {
        nombre: 'Lauta',
        apellido: 'Tacchini',
        dni: 394687923,
        legajo: '394687923/2013',
        telefono: 1134687925,
        email: 'lauta@gmail.com',
        carrera: 'Ingieneria Quimica',
        documentacion: 'string',
        analitico: 'string',
    };
}

export class MockAsignaturaEquivalente {
    asignaturaEquivalente1: AsignaturaEquivalente = {
        nombre: 'Analisis Matematico I',
        institutoOrigen: 'UTN',
        anoAprobacion: 2005,
        cargaHoraria: 128,
        documentacion: 'string',
    };

    asignaturaEquivalente2: AsignaturaEquivalente = {
        nombre: 'Sistemas Operativos',
        institutoOrigen: 'UTN',
        anoAprobacion: 2005,
        cargaHoraria: 128,
        documentacion: 'string',
    };

    asignaturaEquivalente3: AsignaturaEquivalente = {
        nombre: 'Redes de la informacion',
        institutoOrigen: 'UTN',
        anoAprobacion: 2005,
        cargaHoraria: 128,
        documentacion: 'string',
    };

    asignaturaEquivalente4: AsignaturaEquivalente = {
        nombre: 'Arquitectura del computador',
        institutoOrigen: 'UTN',
        anoAprobacion: 2005,
        cargaHoraria: 128,
        documentacion: 'string',
    };
}

export class MockAsignaturaUNGS {

    mockAsignaturaEquivalente: MockAsignaturaEquivalente = new MockAsignaturaEquivalente();

    asignaturaUNGS1: AsignaturasUNGS = {
        materiaUngs: 'Sistemas Operativos y Redes I',
        equivalencias: [this.mockAsignaturaEquivalente.asignaturaEquivalente2,
            this.mockAsignaturaEquivalente.asignaturaEquivalente3],
        estado: 'aprobado',
        comentario: 'hola',
    };

    asignaturaUNGS2: AsignaturasUNGS = {
        materiaUngs: 'Organizador del Computador I',
        equivalencias: [this.mockAsignaturaEquivalente.asignaturaEquivalente4],
        estado: 'coloquio',
        comentario: 'hola',
    };

    asignaturaUNGS3: AsignaturasUNGS = {
        materiaUngs: 'Calculo I',
        equivalencias: [this.mockAsignaturaEquivalente.asignaturaEquivalente1],
        estado: 'desaprobado',
        comentario: 'hola',
    };
}

export class MockAdministrador {
    administrador1: Administrador = {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanPerez@sdas.com',
        instituto: 'ICO',
        usuario:"asd",
        contraseña:"dasd"
    };

    administrador2: Administrador = {
        nombre: 'Lucas',
        apellido: 'Omar',
        email: 'lucasOmar@sdas.com',
        instituto: 'IDH',
        usuario:"asdddsa",
        contraseña:"dasd"
    };

    administrador3: Administrador = {
        nombre: 'Juanfer',
        apellido: 'Quinter',
        email: 'juanferQuinter@sdas.com',
        instituto: 'ICI',
        usuario:"asd",
        contraseña:"dasd"
    };

    administrador4: Administrador = {
        nombre: 'Lucian',
        apellido: 'Aymar',
        email: 'lucianAymar@sdas.com',
        instituto: 'IDEI',
        usuario:"asd",
        contraseña:"dasd"
    };
}

export class MockInstituto {
    instituto1: Instituto = {
        id: 0,
        nombre: 'ICO',
        disponible: 1
    };

    instituto2: Instituto = {
        id: 0,
        nombre: 'IDH',
        disponible: 1
    };

    instituto3: Instituto = {
        id: 0,
        nombre: 'ICI',
        disponible: 1
    };

    instituto4: Instituto = {
        id: 0,
        nombre: 'IDEI',
        disponible: 1
    };
}

export class MockCarrera {
    carrera1: CarreraUNGS = {
        id: 0,
        nombre: 'Licenciatura en Sistemas',
        disponible: 1
    };

    carrera2: CarreraUNGS = {
        id: 0,
        nombre: 'Ingieneria Industrial',
        disponible: 1
    };

    carrera3: CarreraUNGS = {
        id: 0,
        nombre: 'Profesorado Matematica',
        disponible: 1
    };

    carrera4: CarreraUNGS = {
        id: 0,
        nombre: 'Profesorado Historia',
        disponible: 1
    };
}
