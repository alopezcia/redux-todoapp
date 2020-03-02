export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor( texto: string ){
        // Para poner la 1ª letra en mayusculas
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        // Para simiular id generado por db
        this.id = Math.random();
    }
}