import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {

  habilidadTecnica: string;
  nivelTecnico: number;
  habilidadPersonal: string;
  nivelHabPersonal: number;

  constructor(private habilidad: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new Habilidad(this.habilidadTecnica, this.nivelTecnico, this.habilidadPersonal, this.nivelHabPersonal);
    this.habilidad.save(habilidad).subscribe(
      data => {
        alert("Habilidad añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la operación");
        this.router.navigate(['']);
      }
    )
  }

}
