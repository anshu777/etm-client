import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeeComponent } from './employee-create/employee-create.component';

const employeesRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employees/employee-create',
        component: CreateEmployeeComponent
    }
];

export const employeesRouting = RouterModule.forChild(employeesRoutes);
