// declare variables

//Test 1
// var hoursWorked = 20;
// var payRate = 12.5;

//Test 2
// var hoursWorked = 40;
// var payRate = 25;

//Test 3
var hoursWorked = 45;
var payRate = 17.3;

var regularHours = 40;
var overtimeHours = hoursWorked - regularHours;
var overtimePayRate = payRate * 1.5;
var overtimePay = overtimePayRate * overtimeHours;
var grossPay;

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
} else {
  grossPay = payRate * regularHours + overtimePay;
}

console.log(grossPay);
