import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona: persona = new persona("","","","","","","","",""); 

  isLogged = false;

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})

    if(this.tokenService.getToken()){ //new1
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
