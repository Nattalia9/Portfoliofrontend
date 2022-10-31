import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  
  puesto: string = '';
  empresa : string = '';
  fecha: string = '';
  descripcion: string = '';

  constructor(private experiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.puesto, this.empresa, this.fecha, this.descripcion);
    this.experiencia.save(expe).subscribe(data =>{
      alert("Experiencia agregada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló la operación");
      this.router.navigate(['']);
    })
  }
}
