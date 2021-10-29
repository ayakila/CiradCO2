import { Routes ,RouterModule} from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'calcul-ges', loadChildren: () => import('../../pages/calcul-ges/calcul-ges.module').then(m => m.CalculGesModule) },
    { path: 'mes-resultats', loadChildren: () => import('../../pages/mes-resultats/mes-resultats.module').then(m => m.MesResultatsModule) },
];
