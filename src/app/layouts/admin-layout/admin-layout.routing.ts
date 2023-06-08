import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TreinamentosComponent } from '../../pages/treinamentos/treinamentos.component';
import { TutoriaisComponent } from '../../pages/tutoriais/tutoriais.component';
import { GeradorComponent } from '../../pages/gerador/gerador.component';
import { Templates_SalvosComponent } from '../../pages/templates_salvos/templates_salvos.component';
import { ConfiguracoesComponent } from '../../pages/configuracoes/configuracoes.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'treinamentos',          component: TreinamentosComponent },
    { path: 'tutoriais',     component: TutoriaisComponent },
    { path: 'gerador',          component: GeradorComponent },
    { path: 'templates_salvos',           component: Templates_SalvosComponent },
    { path: 'configuracoes',  component: ConfiguracoesComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
