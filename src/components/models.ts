export interface IEmployee {
  id: number;
  name: string;
  designation: string;
  department: string;
}

export interface IEmployeeList {
  employee: IEmployee[];
}
