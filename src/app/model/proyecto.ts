export class Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    urlImagen: string;
    urlRepositorio: string;
    tecnologias: string;

    constructor(titulo: string, descripcion: string, urlImagen: string, urlRepositorio: string, tecnologias: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.urlRepositorio = urlRepositorio;
        this.tecnologias = tecnologias;
    }
}
