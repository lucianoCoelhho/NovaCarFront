import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoProfissionalComponent } from './pages/plano-profissional/plano-profissional.component';
import { MeusAnunciosComponent } from './pages/meus-anuncios/meus-anuncios.component';
import { NovaCarComponent } from './pages/nova-car/nova-car.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NotificacoesComponent } from './pages/notificacoes/notificacoes.component';

const routes: Routes = [
  { path: '', component: NovaCarComponent },
  { path: 'planoProfissional', component: PlanoProfissionalComponent },
  { path: 'meusAnuncios', component: MeusAnunciosComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'notificacoes', component: NotificacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
