export class Educacion {

    id: number;
    titulo: string;
    institucion: string;
    fecha: string;
    descripcion: string;

    constructor(titulo: string, institucion: string, fecha: string, descripcion: string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}
