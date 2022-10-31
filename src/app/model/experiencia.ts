export class Experiencia {

    id: number;
    puesto: string;
    empresa: string;
    fecha: string;
    descripcion: string;
    
    constructor(puesto: string, empresa: string, fecha: string, descripcion: string) {
        this.puesto = puesto;
        this.empresa = empresa;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}
