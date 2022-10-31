export class Habilidad {

    id: number;
    habilidadTecnica: string;
    nivelTecnico: number;
    habilidadPersonal: string;
    nivelHabPersonal: number;

    constructor(habilidadTecnica: string, nivelTecnico: number, habilidadPersonal: string, nivelHabPersonal: number) {
        this.habilidadTecnica = habilidadTecnica;
        this.nivelTecnico = nivelTecnico;
        this.habilidadPersonal = habilidadPersonal;
        this.nivelHabPersonal = nivelHabPersonal;
    }
}
