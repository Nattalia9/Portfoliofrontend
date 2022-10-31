import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  titulo: string;
  institucion: string;
  fecha: string;
  descripcion: string;

  constructor(private educacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.titulo, this.institucion, this.fecha, this.descripcion);
    this.educacion.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la operación");
        this.router.navigate(['']);
      }
    )
  }

}
