import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { MainVendeurComponent } from './main-vendeur/main-vendeur.component';
import { AnnoncesVendeursComponent } from './annonces-vendeurs/annonces-vendeurs.component';
import { ProfilVendeurComponent } from './profil-vendeur/profil-vendeur.component';
import { DetailAnnoncePropComponent } from './detail-annonce-prop/detail-annonce-prop.component';

const routes: Routes = [
  { path: '', component: MainVendeurComponent, children: 
    [
      { path: 'Accueil_Proprietaire', component: AnnoncesVendeursComponent},
      { path: 'mes_annonces', children: [
          { path: '', component: AnnoncesVendeursComponent },
          { path: 'detailAnnonce', component: DetailAnnoncePropComponent },
      ]},
      { path: 'detailAnnonce', component: DetailAnnoncePropComponent },
      { path: 'mon_profil', component: ProfilVendeurComponent},
      { path: 'mes_annonces/detailAnnonce', component: DetailAnnoncePropComponent},
      { path: '', redirectTo: 'mes_annonces', pathMatch: 'full'}

    ]
  }
]

// component: AnnoncesVendeursComponent

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProprietaireRoutingModule { }
