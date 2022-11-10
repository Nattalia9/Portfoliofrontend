import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-header',
  templateUrl: './editar-header.component.html',
  styleUrls: ['./editar-header.component.css']
})
export class EditarHeaderComponent implements OnInit {

  perso: persona = new persona("","","","","","","","","");

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaS.detail(id).subscribe(
        data =>{
          this.perso = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.updatePersona(id, this.perso).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar header");
         this.router.navigate(['']);
      }
    )
  }

}
