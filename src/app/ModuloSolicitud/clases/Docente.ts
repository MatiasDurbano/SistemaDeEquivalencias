import { ListaMateria } from 'src/app/model/ListaMateria';

export class Docente {
    nombre: string;
    apellido: string;
    email: string;
    listaMateria: ListaMateria;

    constructor(nombre: string, apellido: string, email: string, listaMateria: ListaMateria) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.listaMateria = listaMateria;
    }
}
