import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Employee } from '../employee.model';
import { SkillSet } from '../../models/skill-set.model';

@Component({
    selector: 'app-create-employee',
    templateUrl: './employee-create.html',
    styleUrls: ['./employee-create.css']
})

export class CreateEmployeeComponent implements OnInit, OnDestroy {
    private designations;
    private categorys;
    private employee: Employee = new Employee();
    private employeeId: number;
    private designationFetchSub: Subscription;
    private emplooyeeFetchSub: Subscription;
    private categoryFetchSub: Subscription;
    private skillFetchSub: Subscription;
    private primarySkillsArray: Array<any> = [];
    private secondarySkillsArray: Array<any> = [];
    selectedPrimarySkills: SkillSet[] = [];
    selectedSecondarySkills: SkillSet[] = [];
    settings = {};
    private takeAction: boolean;
    private actionHire: boolean;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {

    }

    ngOnInit() {
        this.activatedRoute.params.forEach(params => {
            this.employeeId = params['employeeId'];
        });

        if (this.employeeId) {
            this.emplooyeeFetchSub = this.dataService.get('employee/get/' + this.employeeId)
                .subscribe(
                    data => {
                        this.employee = data;
                    }
                );
        }

        this.settings = {
            text: '--Select Skill--',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class'
        };
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
        this.skillFetchSub = this.dataService.getList('skillset/getlist')
            .subscribe(
                data => {
                    this.primarySkillsArray = [];
                    this.secondarySkillsArray = [];
                    data.forEach(item => {
                        if (item.IsPrimary === 1) {
                            this.primarySkillsArray.push({ id: item.Id, itemName: item.Name });
                        } else {
                            this.secondarySkillsArray.push({ id: item.Id, itemName: item.Name });
                        }

                    });
                }
            );
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
        this.dataService.save('employee/post', this.employee)
            .subscribe(() => {
                this.router.navigate(['employees']);
            });

    }

    cancel() {
        this.router.navigate(['employees']);
    }

    /* skill set */

    onItemSelect(item: any) {
        this.selectedPrimarySkills.push(item);
    }
    OnItemDeSelect(item: any) {
        this.selectedPrimarySkills.reduce(item);
    }
    onSelectAll(items: any) {
        this.selectedPrimarySkills.push(items);
    }
    onDeSelectAll(items: any) {
        this.selectedPrimarySkills.reduce(items);
    }

    selectStatus(id: string) {
        this.takeAction = id === '3';
    }

    selectCategory(id: string) {
        this.takeAction = id === '1';
    }

    selectAction(actionId: string) {
        this.actionHire = actionId === '1';
    }

}
