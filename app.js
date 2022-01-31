                            // chapter 31-34
// Task01
var rightNow = new Date();
document.write(rightNow);
// Task2:
var days = ["Junurary", "Feburary", "March", "April", "May", "June", "July","August","september","Actomber","November","December"];
var MonthName = days[new Date().getMonth()];
document.write("Current Month:"+MonthName);
// Task-03:
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayName = days[new Date().getDay()];
document.write("Today is:"+dayName);
// Task-04:
var today = new Date();
if (today.getDay() == 6 || today.getDay() == 0) 
    alert("It's Fun day!");
else 
alert("It's Not Fun day!")

// Task-05:
var date = new Date();
if (date.getDate() < 16)
    alert("First fifteen days of the month!");
else
    alert("Last days of the month!");
// Task-06:
var today = new Date();
var today_milliSeconds = today.getTime();
var today_minutes = today.getMinutes();
var diff = today_milliSeconds - today_minutes;
var diff_min = diff / (1000 * 60 * 60);
var accurate_min = Math.floor(diff_min);
document.write("Current Date: " + today);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + today_milliSeconds);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurate_min)
// Task-07:
var today = new Date();
var d = today.getHours();
if(d<=12)
{
    document.write("It’s AM");
}
else
{
    document.write("It’s PM");
}
// Task-08:
var laterDate = new Date();
laterDate.setDate(0);
laterDate.setHours(0)
laterDate.setMinutes(0)
laterDate.setSeconds(0)
document.write("Late Date: "+laterDate);
// Task-09:

var date1 = new Date("06/18/2015");
var date2 = new Date(); 
// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();
// To calculate the no. of days between two dates
var daysPassed = Difference_In_Time / (1000 * 3600 * 24);
//To display the final no. of days (result)
document.write(Math.round(daysPassed) + " days have been passed, since 1st Ramadan,  "+date1.getFullYear());
// Task-10:
// To set two dates to two variables
var date1 = new Date("1/1/2015");
var date2 = new Date();
// To calculate the time difference of two seconds
var Difference_In_Seconds = date2.getSeconds()-date1.getSeconds();
// To calculate the no. of seconds between two dates
var secondsPassed = Difference_In_Seconds / (1000 * 3600 * 24);
//To display the final no. of seconds (result)
document.write(" On reference date "+date2+",<br> "+secondsPassed+" seconds had passed since beginning of 2015.");
// Task-11:
document.write("Current date: " + dt + " <br>");
dt.setHours(dt.getHours() -1);
document.write("1 hour ago, it was:"+ dt);
// Task-12:
var startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 100);
document.write(startDate);
// Task-13:
var age = prompt("Enter your age: ");
date.setFullYear(date.getFullYear() - age);
document.write("Your age is: "+age + "<br>");
document.write("Your Birth year is:" +date.getFullYear());
// Task-14:
var customer_Name = "ABC Customer";
var current_Month = "February";
var no_Of_Units = 410;
var charges_Per_Unit = 16;
var net_Amount_Payable = no_Of_Units * charges_Per_Unit;
 var late_Payment_Surcharge = 350;
 var gross_Amount_Payable = net_Amount_Payable + late_Payment_Surcharge;
 document.write("Customer Name: "+customer_Name+ "<br>");
 document.write('Month: '+ current_Month + "<br>");
 document.write("Number of Units: "+no_Of_Units + "<br>");
 document.write("Charges per unit: "+charges_Per_Unit + "<br>");
 document.write("Net Amount Payable(Within Due Date): "+net_Amount_Payable.toFixed(2) + "<br>")
 document.write("Late payment surcharge: "+late_Payment_Surcharge + "<br>");
 document.write("Gross Amount Payable(After Due Date): "+gross_Amount_Payable.toFixed(2));
                                // chapter 35-37
// Task-01:
function showDate()
{
    var currentDate = new Date();
    alert(currentDate);
}
showDate();
// Task-02:
function Full_NameDate()
{
   var firstName = prompt("Enter first name:");
   var lastName = prompt("Enter last name:");
   var fullName = firstName+lastName;
   document.write('Welcome '+fullName);
}
Full_NameDate();
// Task-03:
function sum()
{
   var number1 = +prompt("Enter first name:");
   var number2 = +prompt("Enter last name:");
   var sum = number1+number2;
   document.write('Sum '+sum);
}
sum();
// Task-04:

var no1 = +prompt("Enter first value:");
var no2 = +prompt("Enter second value:");
var op = prompt("Enter operator:");
function calc()
{
    if(op=='+')
    {   
        const sum = no1+no2;
        alert(sum);  
    }
    if(op=='-')
    {   
        const sum = no1-no2;
        alert(sum);  
    }
    if(op=='*')
    {   
        const sum = no1*no2;
        alert(sum);  
    }
    if(op=='/')
    {   
        const sum = no1/no2;
        alert(sum);  
    }
    if(op=='%')
    {   
        const sum = no1%no2;
        alert(sum);  
    }
               
}
    calc();
// Task-05:
function A(a)
{
    return a*a;
}
document.write(A(2));
// Task-06:
const number = parseInt(prompt('Enter a positive integer: '));
// checking if number is negative
if (number < 0) 
{
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) 
{
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else 
{
    let fact = 1;
    for (i = 1; i <= number; i++) 
    {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
// Task-07:
function sum() 
{
    var start = +prompt("Enter starting value: ")
    var end = +prompt("Enter ending value: ")
    var result = 0;
    for (var i = start; i <= end; i++) 
    {
        result += i;
    }
    return result;
}
document.write(sum());
// Task-08:
function calculateHypotenuse()
         {
            var base = +prompt("Enter the value of Base: ")
            var perpendicular = +prompt("Enter the value of Perpendicular: ")
            var hypotenuse = (squareOf(base))+(squareOf(perpendicular));
            function squareOf(num) 
            {
                 return num * num;
             }
             return hypotenuse;
         }
        document.write(calculateHypotenuse());
// Task-09:
var w = 5;
        var h = 4;
        function calcArea(width, height) 
        {
            var area =  width*height;
            return area;
        }
        document.write(calcArea(4,3) + "<br>");
        document.write(calcArea(w, h));
// Task-10:
function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// take input
const string = prompt('Enter a string: ');
// call the function
const value = checkPalindrome(string);
console.log(value);
// Task-11:
function titleCase(str) 
{
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) 
    {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}
document.write(titleCase("the quick brown fox"));
// Task-12:
function longestWord(string) 
{
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) 
    {
        if (longest < str[i].length) 
        {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write(longestWord("web Development Tutorial!"))
// Task-13:
function char_count(str, char)
        {
                var char_Count = 0;
                for (var i = 0; i < str.length; i++)
                {
                    if (str.charAt(i) == char)
                    {
                        char_Count += 1;
                    }
                }
                return char_Count;
        }
        document.write(char_count('JSResourceS.com', 'o'));
// Task-14:
function calcCircumfrence(radius) 
{
    var circumfrence = (Math.PI * radius) * 2;
    document.write("The circumfrence is: " + circumfrence.toFixed(3) + "<br>");
}
function calcArea(radius) 
{
    var area = (Math.PI * radius) * radius;
    document.write("The area is: " + area.toFixed(3) + ".");
}
calcCircumfrence(30);
calcArea(10);

//complete