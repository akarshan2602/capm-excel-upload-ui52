namespace excel;

entity Employees {
    key ID       : UUID;
        EMPID    : String(20);
        NAME     : String(100);
        LOCATION : String(100);
}