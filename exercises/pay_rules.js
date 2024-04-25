// //declare variables

var hoursWorked = 20;
var regularPayRate = 12.5;

// var hoursWorked = 40;
// var regularPayRate = 25;

// var hoursWorked = 45;
// var regularPayRate = 17.3;

var regularHours = 40;
var overtimePayRate = regularPayRate * 1.5;
var overtimeHours = hoursWorked - regularHours;
var regularPay;
var overtimePay;
var grossPay;

regularPay = regularPayRate * hoursWorked; //regularPay
//make calculation for regular pay
if (hoursWorked > regularHours) {
  overtimePay = overtimePayRate * overtimeHours;
} else {
  //make calculation for overtime pay
  
}

grossPay = regularPay + overtimePay;
// calculate grossPay by adding regular + overtime

//display result
console.log(grossPay);
