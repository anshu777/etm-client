import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { TeamsResolve } from './teams-resolve.service';

const teamRoutes: Routes = [
    {
        path: 'teams',
        component: TeamsComponent,
        resolve: {
            team: TeamsResolve
        }
    },
    {
        path: 'assigntask',
        component: AssignTaskComponent
    }
];

export const teamRouting = RouterModule.forChild(teamRoutes);