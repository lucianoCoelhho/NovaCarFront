import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanoProfissionalComponent } from './pages/plano-profissional/plano-profissional.component';
import { MeusAnunciosComponent } from './pages/meus-anuncios/meus-anuncios.component';
import { NovaCarComponent } from './pages/nova-car/nova-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanoProfissionalComponent,
    MeusAnunciosComponent,
    NovaCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
