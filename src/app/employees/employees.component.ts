import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalWindowComponent } from '../shared/modal-window/modal-window.component';
import { Employee } from './employee.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../shared/service/data-service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    selector: 'et-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.css']
})

export class EmployeesComponent implements OnInit, OnDestroy {
    displayedColumns = ['id', 'name', 'office', 'position', 'sex'];
    employees: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    errorMessage: string;
    title = 'Employees';
    // employees: Employee[];
    private isSelected: boolean;
    private isSingleSelected: boolean;
    private selectedRows: Array<any> = [];
    private disableSave = false;
    private showEditMode = false;
    private employee: Employee = new Employee();

    private showAssignTeam = false;
    private selectedEmp = [];
    private teamId: number;

    private dataFetchSub: Subscription;

    @ViewChild('employeeComponent')
    private employeeComponent: ModalWindowComponent;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataFetchSub = this.dataService.getList('employee')
            .subscribe(
                data => {
                    this.mapData(data);
                }
            );
    }
    ngOnDestroy() {
        if (!!this.dataFetchSub) {
            this.dataFetchSub.unsubscribe();
        }
    }
    mapData(data: any) {
        this.employees = new MatTableDataSource(data);
        this.employees.paginator = this.paginator;
        this.employees.sort = this.sort;
    }

    selectRecord(event: any) {
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            this.selectedRows.push(checkbox.id);
            this.isSelected = true;
        } else {
            this.selectedRows.splice(this.selectedRows.indexOf(Number(checkbox.id)), 1);
            if (this.selectedRows.length === 0) {
                this.isSelected = false;
            }
        }
        this.isSingleSelected = this.selectedRows.length === 1;
    }

    editRecrod() {
        this.employee = Object.assign({}, this.employees.find(x => x.id === Number(this.selectedRows)));
        this.showEditMode = true;
    }

    cancelEmployee() {
        this.showEditMode = false;
    }
    saveEmployee() {
        const emp = this.employees.filter(x => x.id === Number(this.selectedRows));
        emp[0].firstName = this.employee.firstName;
        emp[0].office = this.employee.office;
        emp[0].position = this.employee.position;
        emp[0].sex = this.employee.sex;
        this.showEditMode = false;
    }
    deleteRecord() {
        // let removeIndex = this.employees.findIndex(x => x.id === Number(this.selectedRows));
        // this.employees = this.employees.splice(removeIndex, 1);
    }
    assignTeam() {
        this.showAssignTeam = true;
    }
    saveTeam() {
        // Write logic to save.
        // Both Team and Employee present here.
        this.showAssignTeam = false;
    }
    cancelAssign() {
        this.showAssignTeam = false;
    }
    addNewEmployee() {
        this.router.navigate(['employees/employee-create']);
    }
}
