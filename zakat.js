import inquirer from "inquirer";
let zakatNumber = 2.5;
let goldValueInTola = 234800;
let goldWeightReq = 7.5;
let answer = await inquirer.prompt([
    {
        name: "gold",
        message: "Enter gold weight",
        type: "number",
    }
]);
let gold = answer.gold;
if (gold >= goldWeightReq) {
    let calculatezakat = (goldWeightReq * goldValueInTola) * (zakatNumber / 100);
    console.log(`The calculated value of Gold weighing ${goldWeightReq}  tola is ${calculatezakat}`);
}
else {
    console.log("zakat not applicable");
}
