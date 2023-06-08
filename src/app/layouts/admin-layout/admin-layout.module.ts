import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TreinamentosComponent }           from '../../pages/treinamentos/treinamentos.component';
import { TutoriaisComponent }      from '../../pages/tutoriais/tutoriais.component';
import { GeradorComponent }           from '../../pages/gerador/gerador.component';
import { Templates_SalvosComponent }            from '../../pages/templates_salvos/templates_salvos.component';
import { ConfiguracoesComponent }   from '../../pages/configuracoes/configuracoes.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TreinamentosComponent,
    UpgradeComponent,
    TutoriaisComponent,
    GeradorComponent,
    Templates_SalvosComponent,
    ConfiguracoesComponent,
  ]
})

export class AdminLayoutModule {}
