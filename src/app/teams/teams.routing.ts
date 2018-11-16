import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent }    from './teams.component';

import { TeamsResolve }   from './teams-resolve.service';

const teamRoutes: Routes = [
    {   path: 'teams',  
        component: TeamsComponent,
        resolve: {
            team: TeamsResolve
        } 
    }
];

export const teamRouting = RouterModule.forChild(teamRoutes);