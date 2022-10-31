import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './componentes/experiencia-educacion/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/experiencia-educacion/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia-educacion/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia-educacion/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditSkillComponent } from './componentes/skills/edit-skill/edit-skill.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill/nueva-skill.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarHeaderComponent } from './componentes/header/editar-header/editar-header.component';
import { EditarSobreMiComponent } from './componentes/sobre-mi/editar-sobre-mi/editar-sobre-mi.component';
import { EditarFooterComponent } from './componentes/footer/editar-footer/editar-footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'',component:PortfolioComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NuevaExperienciaComponent},
  {path:'editexp/:id',component:EditarExperienciaComponent},
  {path:'nuevaedu',component:NuevaEducacionComponent},
  {path:'editedu/:id',component:EditarEducacionComponent},
  {path:'newskill',component:NuevaSkillComponent},
  {path:'editkill/:id',component:EditSkillComponent},
  {path:'nuevoproy',component:NuevoProyectoComponent},
  {path:'editproy/:id',component:EditarProyectoComponent},
  {path:'editheader/:id',component:EditarHeaderComponent},
  {path:'editsobrem/:id',component:EditarSobreMiComponent},
  {path:'editfooter/:id',component:EditarFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
