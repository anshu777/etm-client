import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data-service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Employee } from '../employee.model';

@Component({
    selector: 'app-create-employee',
    templateUrl: './employee-create.html',
    styleUrls: ['./employee-create.css']
})

export class CreateEmployeeComponent implements OnInit, OnDestroy {
    private designations;
    private categorys;
    private employee: Employee = new Employee();
    private designationFetchSub: Subscription;
    private categoryFetchSub: Subscription;

    constructor(private router: Router, private dataService: DataService) {
        this.designationFetchSub = this.dataService.getList('designation')
            .subscribe(
                data => {
                    this.designations = data;
                }
            );
        this.categoryFetchSub = this.dataService.getList('category')
            .subscribe(
                data => {
                    this.categorys = data;
                }
            );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (!!this.designationFetchSub) {
            this.designationFetchSub.unsubscribe();
        }
        if (!!this.categoryFetchSub) {
            this.categoryFetchSub.unsubscribe();
        }
    }
    addNewEmployee() {
        this.dataService.post('http://localhost/etm/api/employee', this.employee)
        .subscribe(() => {
            this.router.navigate(['employees']);
        });

    }
    cancel() {
        this.router.navigate(['employees']);
    }
}
