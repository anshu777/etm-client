import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
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

export class EmployeesComponent implements OnInit, OnDestroy, AfterViewInit {
    displayedColumns = ['id', 'name', 'designation', 'category', 'projectstatus', 'status'];
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

    constructor(private dataService: DataService, private router: Router) {
        this.bindData();
    }

    ngOnInit() {
        this.bindData();
    }
    ngOnDestroy() {
        if (!!this.dataFetchSub) {
            this.dataFetchSub.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.bindData();
    }
    bindData() {
        this.dataFetchSub = this.dataService.getList('employee')
            .subscribe(
                data => {
                    this.mapData(data);
                }
            );
    }
    mapData(data: any) {
        this.employees = new MatTableDataSource(data);
        this.employees.paginator = this.paginator;
        this.employees.sort = this.sort;
    }

    selectRecord(event: any) {
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            this.selectedRows.push(checkbox.value);
            this.isSelected = true;
        } else {
            this.selectedRows.splice(this.selectedRows.indexOf(Number(checkbox.value)), 1);
            if (this.selectedRows.length === 0) {
                this.isSelected = false;
            }
        }
        this.isSingleSelected = this.selectedRows.length === 1;
    }

    editRecrod() {
        this.employee = Object.assign({}, this.employees.filteredData.find(x => x.Id === Number(this.selectedRows)));
        this.showEditMode = true;
    }

    cancelEmployee() {
        this.showEditMode = false;
    }
    saveEmployee() {
        const emp = this.employees.filter(x => x.id === Number(this.selectedRows));
        emp[0].name = this.employee.name;
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
