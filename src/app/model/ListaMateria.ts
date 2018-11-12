export class ListaMateria{

    listaMateria:Array<String>;

    constructor(){
        this.listaMateria=new Array<String>();
    }

    set(list:Array<String>){
        this.listaMateria=list;
    }

}