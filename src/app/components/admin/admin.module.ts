import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { AcheteursComponent } from './acheteurs/acheteurs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { DetailVendeurComponent } from './detail-vendeur/detail-vendeur.component';
import { DetailAcheteurComponent } from './detail-acheteur/detail-acheteur.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SignalementsComponent } from './signalements/signalements.component';
import { VoituresComponent } from './voitures/voitures.component';
import { MotosComponent } from './motos/motos.component';
import { UtilitairesComponent } from './utilitaires/utilitaires.component';
import { DtsVoitureComponent } from './dts-voiture/dts-voiture.component';
import { DtsMotoComponent } from './dts-moto/dts-moto.component';
import { DtsUtilitaireComponent } from './dts-utilitaire/dts-utilitaire.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UtilisateursComponent,
    VendeursComponent,
    AcheteursComponent,
    BlogsComponent,
    NewslettersComponent,
    AnnoncesComponent,
    CategoriesComponent,
    ContactsComponent,
    DetailAnnonceComponent,
    DetailVendeurComponent,
    DetailAcheteurComponent,
    AccueilAdminComponent,
    MainAdminComponent,
    SignalementsComponent,
    VoituresComponent,
    MotosComponent,
    UtilitairesComponent,
    DtsVoitureComponent,
    DtsMotoComponent,
    DtsUtilitaireComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
