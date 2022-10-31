import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyect: Proyecto = null;

  constructor(
    private proyecto: ProyectoServiceService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.detail(id).subscribe(
      data =>{
        this.proyect = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.update(id, this.proyect).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
