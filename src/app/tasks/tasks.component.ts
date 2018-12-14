import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Task } from './task.model';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../shared/services/data.service';
import { ModalWindowComponent } from '../shared/modal-window/modal-window.component';

@Component({
    selector: 'et-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.css']
})

export class TasksComponent implements OnInit {
    displayedColumns = ['id', 'name', 'createdBy', 'createdDate'];
    tasks: MatTableDataSource<Task>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    errorMessage: string;
    title = 'Tasks';
    private getTeamsSub: Subscription;
    private getTaskSub: Subscription;
    private saveDataSub: Subscription;
    private showEditMode = false;
    private task: Task = new Task();
    private teams: Array<any> = [];
    private taskTypes: Array<any> = [];
    @ViewChild('taskCrudComponent')
    private taskCrudComponent: ModalWindowComponent;
    constructor(private dataService: DataService) { }

    ngOnInit() {


        this.bindList();

    }

    bindList() {
        /* Initialize this.* bindable members with data.* members */
        this.getTaskSub = this.dataService.getList('task/getlist')
            .subscribe(pData => this.mapData(pData));
    }

    mapData(pData: any) {
        this.tasks = new MatTableDataSource(pData);
        this.tasks.paginator = this.paginator;
        this.tasks.sort = this.sort;
    }

    addTask() {
        this.task = new Task();
        this.taskTypes = [
            { 'id': 1, 'name': 'Developer' },
            { 'id': 2, 'name': 'QA' },
            { 'id': 3, 'name': 'Both' }
        ];
        this.showEditMode = true;
    }

    cancel() {
        this.showEditMode = false;
    }

    saveTask() {

        this.saveDataSub = this.dataService.save('task/post', this.task)
            .subscribe(
                (success) => {
                    // this.onSuccess(success);
                    this.showEditMode = false;
                    this.bindList();
                },
                err => {
                    // this.handleError(err);
                    console.log(err);
                });
    }
}
