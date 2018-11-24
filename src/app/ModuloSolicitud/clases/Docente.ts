import { ListaMateria } from 'src/app/model/ListaMateria';

export class Docente {
    nombre: string;
    apellido: string;
    mail: string;
    listaMateria: ListaMateria;

    constructor(nombre: string, apellido: string, mail: string, listaMateria: ListaMateria) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.listaMateria = listaMateria;
    }
}
