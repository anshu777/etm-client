import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeeComponent } from './employee-create/employee-create.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';

const employeesRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employees/employee-create',
        component: CreateEmployeeComponent
    },
    {
        path: 'employees/employee-edit/:employeeId',
        component: CreateEmployeeComponent
    },
    {
        path: 'employees/assign-team',
        component: AssignTeamComponent
    }
];

export const employeesRouting = RouterModule.forChild(employeesRoutes);
