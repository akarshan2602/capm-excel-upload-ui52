const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {

    this.on("uploadEmployees", async (req) => {

        const employees = req.data.employees;

        console.log("================================");
        console.log("RECEIVED FROM UI");
        console.log(JSON.stringify(employees, null, 2));
        console.log("================================");

        const db = await cds.connect.to("db");

        await db.run(
            INSERT.into("excel.Employees").entries(
                employees.map(emp => ({
                    EMPID: String(emp.EMPID),
                    NAME: String(emp.NAME),
                    LOCATION: String(emp.LOCATION)
                }))
            )
        );

        return "Success";

    });
}); 