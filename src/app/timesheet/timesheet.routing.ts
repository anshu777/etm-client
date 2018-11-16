import { Routes, RouterModule } from '@angular/router';

import { TimesheetComponent }    from './timesheet.component';

//import { DashboardResolve }   from './dashboard-resolve.service';

const timesheetRoutes: Routes = [
    {   path: 'timesheet',  
        component: TimesheetComponent,
        resolve: {
           // dashboard: DashboardResolve
        } 
    }
];

export const timesheetRouting = RouterModule.forChild(timesheetRoutes);