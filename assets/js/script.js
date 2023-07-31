/*age calculator 

option to select date of birth 
output of age in years,days,weeks
message that its your birthday if app is done on birdate
error message if date input is not compatible

so will have a 3 items which are date, month , year which the user will input their date of birth and our online calculater will give out data in days,months, years and if the current date is the users birthday a pop up happy birthday message will apppear*/


// decided to use the const variable for date , month and year ...input area where user will input their date of birth
let isValid = false;
const d1 = document.getElementById('date').value;
const m1 = document.getElementById('month').value;
const y1 = document.getElementById('year').value;

//output area
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");




