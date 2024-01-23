import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainUserComponent } from './main-user/main-user.component';
import { AboutComponent } from './about/about.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { VoituresComponent } from './voitures/voitures.component';
import { MotosComponent } from './motos/motos.component';
import { UtilitairesComponent } from './utilitaires/utilitaires.component';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';
import { DetailUtilitaireComponent } from './detail-utilitaire/detail-utilitaire.component';
import { DetailMotoComponent } from './detail-moto/detail-moto.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';



@NgModule({
  declarations: [
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    MainUserComponent,
    AboutComponent,
    VehiculesComponent,
    BlogsComponent,
    ContactComponent,
    ScrollButtonComponent,
    ConfidentialiteComponent,
    ConditionsComponent,
    VoituresComponent,
    MotosComponent,
    UtilitairesComponent,
    DetailVoitureComponent,
    DetailUtilitaireComponent,
    DetailMotoComponent,
    DetailsBlogComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
