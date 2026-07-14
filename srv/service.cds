using excel from '../db/schema';

service ExcelService {

    entity Employees as projection on excel.Employees;

    action uploadEmployees(
        employees : many EmployeeInput
    ) returns String;

}

type EmployeeInput {
    EMPID    : String;
    NAME     : String;
    LOCATION : String;

}
