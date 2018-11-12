import { Carrera } from "./Carrera";
import { Instituto } from "./Instituto";

export class CarreraMateria{

    instituto: Instituto;
    ListCarrera:  Array<Carrera>;

    constructor( instituto :Instituto,  list: Array<Carrera>){
        this.instituto=instituto;
        this.ListCarrera=list;

    }
}