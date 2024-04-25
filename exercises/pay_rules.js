// declare variables

//Test 1
// var hoursWorked = 20;
// var regularPayRate = 12.5;

//Test 2
var hoursWorked = 40;
var regularPayRate = 25;

//Test 3
// var hoursWorked = 45;
// var regularPayRate = 17.3;

var regularHours = 40;
var overtimeHours = hoursWorked - regularHours;
var overtimePayRate = regularPayRate * 1.5;
var overtimePay = overtimePayRate * overtimeHours;
var grossPay;

if (hoursWorked <= 40) {
  grossPay = regularPayRate * hoursWorked;
} else {
  grossPay = regularPayRate * regularHours + overtimePay;
}

console.log(grossPay);
