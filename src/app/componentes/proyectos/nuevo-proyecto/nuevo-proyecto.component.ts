import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  titulo: string;
  descripcion: string;
  urlImagen: string;
  urlRepositorio: string;
  tecnologias: string;

  constructor(private proyecto: ProyectoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo, this.descripcion, this.urlImagen, this.urlRepositorio, this.tecnologias);
    this.proyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la operación");
        this.router.navigate(['']);
      }
    )
  }

}
