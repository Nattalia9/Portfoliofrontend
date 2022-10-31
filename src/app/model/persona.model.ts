export class persona{

    id: number;
    nombre: string;
    apellido: string;
    profesion: string;
    email: string;
    provincia: string;
    descripcion: string;
    urlFotoPerfil: string;
    urlBanner: string;
    urlPortfolioPdf: string;

    constructor(nombre: string, apellido: string, profesion: string, email: string, provincia: string, descripcion: string, 
        urlFotoPerfil: string, urlBanner: string, urlPortfolioPdf: string) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.profesion = profesion;
            this.email = email;
            this.provincia = provincia;
            this.descripcion = descripcion;
            this.urlFotoPerfil = urlFotoPerfil;
            this.urlBanner = urlBanner;
            this.urlPortfolioPdf = urlPortfolioPdf;
        }
}