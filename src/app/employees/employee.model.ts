export class Employee {
    id: number;
    name: string;
    designationId: number;
    designation: string;
    dateOfJoin: Date;
    categoryId: number;
    category: string;
    projectStatus: number;
    projectStatusName: string;
    joiningCtc: number;
    status: number;
    statusName: string;
    teamId: number;
    teamName: string;
    experienceBeforeJoining: number;
    remarks: string;
    constructor() {
        this.id = null;
        this.name = '';
        this.designationId = 0;
        this.designation = '';
        this.dateOfJoin = null;
        this.categoryId = 0;
        this.category = '';
        this.projectStatus = 0;
        this.projectStatusName = '';
        this.joiningCtc = null;
        this.status = 0;
        this.statusName = '';
        this.teamId = 0;
        this.teamName = '';
    }
}
