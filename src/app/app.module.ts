import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ScrollTopComponent } from './componentes/scroll-top/scroll-top.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EducacionComponent } from './componentes/experiencia-educacion/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia-educacion/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia-educacion/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia-educacion/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/experiencia-educacion/educacion/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/experiencia-educacion/educacion/editar-educacion/editar-educacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillComponent } from './componentes/skills/edit-skill/edit-skill.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill/nueva-skill.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarHeaderComponent } from './componentes/header/editar-header/editar-header.component';
import { EditarSobreMiComponent } from './componentes/sobre-mi/editar-sobre-mi/editar-sobre-mi.component';
import { EditarFooterComponent } from './componentes/footer/editar-footer/editar-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ScrollTopComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    EducacionComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NavbarComponent,
    FooterComponent,
    EditSkillComponent,
    NuevaSkillComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent,
    EditarHeaderComponent,
    EditarSobreMiComponent,
    EditarFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
