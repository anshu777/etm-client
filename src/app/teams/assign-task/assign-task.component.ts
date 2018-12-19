import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../../tasks/task.model';
import { DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    selector: 'et-assign-task',
    templateUrl: './assign-task.html',
    styleUrls: ['./assign-task.css']
})

export class AssignTaskComponent implements OnInit, OnDestroy {
    private selectedTask = [];
    settings = {};

    @Output() teamIdChange = new EventEmitter();
    @Output() selectedEmpChange = new EventEmitter();

    private teams;
    private taskArray: Array<any> = [];
    private dataFetchSub: Subscription;
    private taskFetchSub: Subscription;

    constructor(private router: Router, private dataService: DataService) {

    }

    ngOnInit() {
        this.settings = {
            text: '--Select Tasks--',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class'
        };
        this.dataFetchSub = this.dataService.getList('team/getlist')
            .subscribe(
                data => {
                    this.teams = data;
                }
            );

        this.taskFetchSub = this.dataService.getList('task/getlist')
            .subscribe(
                data => {
                    this.taskArray = [];
                    data.forEach(item => {
                        this.taskArray.push({ id: item.id, itemName: item.name });
                    });
                }
            );
    }
    ngOnDestroy() {
        if (!!this.dataFetchSub) {
            this.dataFetchSub.unsubscribe();
        }
    }
    selectTeam(id: number) {
        this.teamIdChange.emit(id);
    }


    onItemSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedTask);
    }
    OnItemDeSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedTask);
    }
    onSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedTask);
    }
    onDeSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedTask);
    }

    cancel() {
        this.router.navigate(['teams']);
    }
}
