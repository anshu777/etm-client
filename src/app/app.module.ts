import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidatorDirective } from './shared/equal.validator.directive';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layout/sidebar.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';
import { TeamsModule } from './teams/teams.module';
import { TasksModule } from './tasks/tasks.module';

const myRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', redirectTo: '/dashboard', canActivate: [AuthGuard] },
  { path: 'timesheet',  redirectTo: '/timesheet'  },
  { path: 'employees',  redirectTo: '/employees'  },
  { path: 'projects', redirectTo: '/projects' },
  { path: 'teams',  redirectTo: '/teams', canActivate: [AuthGuard]  },
  { path: 'tasks',  redirectTo: '/tasks', canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    SidebarComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
    DashboardModule, SharedModule, TimesheetModule, EmployeesModule, ProjectsModule, TeamsModule, TasksModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
