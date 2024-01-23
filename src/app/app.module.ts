import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { VendeurSubscribeComponent } from './components/auth/vendeur-subscribe/vendeur-subscribe.component';
import { AcheteurSubscribeComponent } from './components/auth/acheteur-subscribe/acheteur-subscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendeurSubscribeComponent,
    AcheteurSubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
