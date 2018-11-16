import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';

import { TasksResolve } from './tasks-resolve.service';

const taskRoutes: Routes = [
    {
        path: 'tasks',
        component: TasksComponent,
        resolve: {
            tasks: TasksResolve
        }
    }
];

export const tasksRouting = RouterModule.forChild(taskRoutes);