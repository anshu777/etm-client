import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalWindowComponent } from '../shared/modal-window/modal-window.component';
import { Employee } from './employee.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'et-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.css']
})

export class EmployeesComponent implements OnInit, AfterViewInit {
    displayedColumns = ['id', 'name', 'office', 'position', 'sex'];
    employees: MatTableDataSource<Employee>;

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

    @ViewChild('employeeComponent')
    private employeeComponent: ModalWindowComponent;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        const eData = this.route.snapshot.data['employees'];
        this.employees = new MatTableDataSource(eData);
    }

    ngAfterViewInit() {
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
        this.employee = Object.assign({}, this.employees.filteredData.find(x => x.id === Number(this.selectedRows)));
        this.showEditMode = true;
    }

    cancelEmployee() {
        this.showEditMode = false;
    }
    saveEmployee() {
        let emp = this.employees.filteredData.filter(x => x.id === Number(this.selectedRows));
        emp[0].firstName = this.employee.firstName;
        emp[0].office = this.employee.office;
        emp[0].position = this.employee.position;
        emp[0].sex = this.employee.sex;
        this.showEditMode = false;
    }
    deleteRecord() {
        // let removeIndex = this.employees.filteredData.findIndex(x => x.id === Number(this.selectedRows));
        // this.employees.filteredData = this.employees.filteredData.splice(removeIndex, 1);
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
}
