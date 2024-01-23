import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponent } from './main-user/main-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { VoituresComponent } from './voitures/voitures.component';
import { MotosComponent } from './motos/motos.component';
import { UtilitairesComponent } from './utilitaires/utilitaires.component';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';
import { DetailMotoComponent } from './detail-moto/detail-moto.component';
import { DetailUtilitaireComponent } from './detail-utilitaire/detail-utilitaire.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  { path: '', component: MainUserComponent, children: 
      [
          { path:'', redirectTo: 'accueil', pathMatch: 'full'},
          { path: 'accueil', component: AccueilComponent},
          { path: 'about', component: AboutComponent},
          { path: 'vehicules', children: [
            { path: '', component: VehiculesComponent },
            { path: 'voitures', children: [
              { path: '', component: VoituresComponent},
              { path: 'detailVoiture', component: DetailVoitureComponent}
            ]},
            { path: 'motos', children: [
              { path: '', component: MotosComponent},
              { path: 'detailMoto', component: DetailMotoComponent}
            ]},
            { path: 'utilitaires', children: [
              { path: '', component: UtilitairesComponent},
              { path: 'detailUtilitaire', component: DetailUtilitaireComponent}
            ]}
          ]
          },
          { path: 'blog', children: [
            { path: '', component: BlogsComponent },
            { path: 'detailsBlog', component: DetailsBlogComponent },
          ]
          },
          { path: 'contact', component: ContactComponent},
          { path: 'conditions', component: ConditionsComponent},
          { path: 'confidentialite', component: ConfidentialiteComponent},
          { path: 'login', component: LoginComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
