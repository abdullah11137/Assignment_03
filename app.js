// Chapter 5: Math Expressions


// Q1


// var num1 = 5;
// var num2 = 3;
// var result = num1 + num2;
// document.write("Sum of "+  num1 + " and " + num2 + " is "+ result );


// Q2

// Subtraction

// var num1 = 5;
// var num2 = 3;

// var result = num1 - num2;

// document.write("Difference of "+ num1 + " and " + num2 + " is "+ result );


// Multiplication


// var num1 = 5;
// var num2 = 3;

// var result = num1 * num2;

// document.write("Product of "+ num1 + " and " + num2 + " is "+ result );


// Division


// var num1 = 5;

// var num2 = 3;

// var result = num1 / num2;

// document.write("Quotient of "+ num1 + " and " + num2 + " is "+ result );


// Modulus

// var num1 = 5;

// var num2 = 3;

// var result = num1 % num2;

// document.write("Remainder of "+ num1 + " divided by " + num2 + " is "+ result );


// Q3


// var num;

// document.write("Value after variable declaration is: "+ num );

// num = 5;

// document.write("<br>Initial value: "+ num );

// num = ++num;

// document.write("<br>Value after increment: "+ num );
// num = num + 7;

// document.write("<br>Value after addition: "+ num );

// num = --num;

// document.write("<br>Value after decrement: "+ num );

// var remainder = num % 3;

// document.write("<br>The remainder is "+ remainder );


// Q4


// var ticketPrice = 600;
// var tickets = 5;

// var totalPrice = ticketPrice * tickets;

// document.write("Total price of " + tickets + " tickets is " + totalPrice);


// Q5

// var mult = 4 ;
// document.write("Table of 4");

// document.write("<br>4 x 1 = "+ mult);
// mult = 4 * 2;

// document.write("<br>4 x 2 = "+ mult);

// mult = 4 * 3;

// document.write("<br>4 x 3 = "+ mult);

// mult = 4 * 4;

// document.write("<br>4 x 4 = "+ mult);

// mult = 4 * 5;

// document.write("<br>4 x 5 = "+ mult);

// mult = 4 * 6;

// document.write("<br>4 x 6 = "+ mult);

// mult = 4 * 7;

// document.write("<br>4 x 7 = "+ mult);

// mult = 4 * 8;

// document.write("<br>4 x 8 = "+ mult);

// mult = 4 * 9;

// document.write("<br>4 x 9 = "+ mult);

// mult = 4 * 10;

// document.write("<br>4 x 10 = "+ mult);


// Q6


// var celsius = 30;

// var fahrenheit = (celsius * 9/5) + 32; 

// document.write(celsius + "°C is equal to " + fahrenheit + "°F");

// var fahrenheitTemp = 86;

// var celsiusTemp = (fahrenheitTemp - 32) * 5/9;

// document.write("<br>" + fahrenheitTemp + "°F is equal to " + celsiusTemp + "°C");


// Q7


// var priceItem1 = 500;
// var quantityItem1 = 3;
// var priceItem2 = 800;
// var quantityItem2 = 5;
// var shippingCharges = 100;
// var totalCost = priceItem1*quantityItem1 + priceItem2*quantityItem2 + shippingCharges;

// document.write("<b>Shopping Cart");
// document.write("<br><br><br><br><br><br>Price of Item 1 is "+ priceItem1 + "<br>Quantity of Item 1 is "+ quantityItem1 +"<br>Price of Item 2 is " +priceItem2+
//     "<br>Quantity of Item 2 is "+ quantityItem2 + "<br>Shipping Charges "+ shippingCharges + "<br><br><br>Total cost of your order is "+ totalCost);


//     Q8


// var totalMarks = 1100;
// var obtainedMarks = 980;
// var percentage = obtainedMarks/totalMarks * 100;

// document.write("<b>Mark Sheet");
// document.write("<br><br><br><br><br>Total marks: "+ totalMarks + "<br>Marks obtained: "+ obtainedMarks + "<br>Percentage: "+ percentage);



// Q9


// var dollar10 = 10*104.80;
// var riyal25 = 25*28;
// var totalCurrency = dollar10 + riyal25;

// document.write("<b>Currency in PKR");
// document.write("<br><br><br><br>Total Currency in PKR: "+ totalCurrency);


// Q10


// var num = 5;
// num = num + 5;
// num = num*10;
// num = num/2;
// document.write("Result is: "+ num);


// Q11


// var currentYear = 2024;
// var birthYear = 2003;
// var age = currentYear - birthYear;

// document.write("<b>Age Calculator");
// document.write("<br><br><br><br>Current Year: "+ currentYear + "<br>Birth Year: "+ birthYear + "<br>Your age is: "+age);


// Q12


// var radius = 4;
// var circumference = 2 * Math.PI * radius;
// document.write("The circumference is: "+ circumference);

// var area = Math.PI * radius * radius;
// document.write("<br>The area is: "+ area); 


// Q13


// var favouriteSnack = "Chocolate";
// var currentAge = 20;
// var maxAge = 60;
// var dailyAmount = 4;
// var totalAmount = (maxAge - currentAge) * 365 * dailyAmount;

// document.write("<b>The Lifetime Supply Calsulator");
// document.write("<br><br><br><br><br>Favourite Snack: "+ favouriteSnack + "<br>Current age: "+ currentAge + "<br>Estimated Maximum Age: "+ maxAge +
//     "<br>Amount of snacks per day: "+ dailyAmount + "<br>You will need "+ totalAmount + " " + favouriteSnack + " to last you until the ripe old age of "+ maxAge
// );


// Chapter 6 - 9


// Q1


// var a = 10;
// document.write("Result: <br>The value of a is: "+ a + "<br>............................................................");

// a = ++a;
// document.write("<br><br>The value of ++a is: "+ a + "<br>Now the value of a is: "+ a + "<br>............................................................");

// a$ = a++;
// document.write("<br><br>The value of a++ is: "+ a$ );
// document.write("<br>Now tha value of a is: "+ a)
// document.write("<br>............................................................");

// a = --a;
// document.write("<br><br>The value of --a is: "+ a );
// document.write("<br>Now tha value of a is: "+ a)
// document.write("<br>............................................................");

// a$ = a--;
// document.write("<br><br>The value of --a is: "+ a$ );
// document.write("<br>Now tha value of a is: "+ a);



// Q2



// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;


// 1. --a;

// Pre-decrement operator: Decrements the value of a by 1 before using it in the expression.
// a becomes 1.
// 2. --a - --b;

// --a: Pre-decrement operator: Decrements a to 0.
// --b: Pre-decrement operator: Decrements b to 0.
// 0 - 0 = 0.
// 3. --a - --b + ++b;

// --a - --b: Already calculated as 0.
// ++b: Pre-increment operator: Increments b to 1.
// 0 + 1 = 1.
// 4. --a - --b + ++b + b--;

// --a - --b + ++b: Already calculated as 1.
// b--: Post-decrement operator: Uses the current value of b (1) in the expression and then decrements it.
// 1 + 1 = 2.


// document.write("a is "+ a + "<br>b is "+ b + "<br>result is "+ result);



// Q3


// var name = prompt("Please enter your name:");
// alert("Welcome");


// Q5


// function displayMultiplicationTable() {
//     const number = parseInt(prompt("Enter a number (or leave blank for default):"));
  
//     if (isNaN(number)) {
//       // If the input is not a number, use the default value (5)
//       generateTable(5);
//     } else {
//       // Generate the multiplication table for the entered number
//       generateTable(number);
//     }
//   }
  
//   function generateTable(num) {
//     const table = document.createElement("table");
//     table.style.borderCollapse = "collapse";
  
//     for (let i = 1; i <= 10; i++) {
//       const row = document.createElement("tr");
//       const cell1 = document.createElement("td");
//       const cell2 = document.createElement("td");
  
//       cell1.textContent   
//    = num;
//       cell2.textContent = num * i;
  
//       row.appendChild(cell1);
//       row.appendChild(cell2);
//       table.appendChild(row);
//     }
  
//     document.body.appendChild(table);
//   }
  
//   displayMultiplicationTable();



// Q6


// Get subject names from the user
// const subject1 = prompt("Enter the name of the first subject:");
// const subject2 = prompt("Enter the name of the second subject:");
// const subject3 = prompt("Enter the name of the third subject:");

// // Total marks for each subject
// const totalMarksPerSubject = 100;

// // Get obtained marks for each subject
// const obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
// const obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
// const obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// // Calculate total marks and percentage
// const totalMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// const percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

// // Display the results in a table
// const table = document.createElement("table");
// table.style.borderCollapse = "collapse";

// const headerRow = document.createElement("tr");
// const subjectHeader = document.createElement("th");
// const obtainedMarksHeader = document.createElement("th");
// const totalMarksHeader = document.createElement("th");
// const percentageHeader = document.createElement("th");

// subjectHeader.textContent = "Subject";
// obtainedMarksHeader.textContent = "Obtained Marks";
// totalMarksHeader.textContent = "Total Marks";
// percentageHeader.textContent = "Percentage";

// headerRow.appendChild(subjectHeader);
// headerRow.appendChild(obtainedMarksHeader);
// headerRow.appendChild(totalMarksHeader);
// headerRow.appendChild(percentageHeader);

// table.appendChild(headerRow);

// const row1 = document.createElement("tr");
// const subject1Cell = document.createElement("td");
// const obtainedMarks1Cell = document.createElement("td");
// const totalMarks1Cell = document.createElement("td");
// const percentage1Cell = document.createElement("td");

// subject1Cell.textContent = subject1;
// obtainedMarks1Cell.textContent = obtainedMarks1;
// totalMarks1Cell.textContent = totalMarksPerSubject;
// percentage1Cell.textContent = ((obtainedMarks1 / totalMarksPerSubject) * 100).toFixed(2);

// row1.appendChild(subject1Cell);
// row1.appendChild(obtainedMarks1Cell);
// row1.appendChild(totalMarks1Cell);
// row1.appendChild(percentage1Cell);

// table.appendChild(row1);

// // Add rows for the remaining subjects in a similar manner

// document.body.appendChild(table);



// Chapter 6 (Math Expression II)


// Q1


// Post-increment operator: x++

// Pre-increment operator: x--


// Q2


// var x = 100;
// x = x - 1;
// document.write(x);


// Q3


// var x = 50;
//  var y = x++;
//  document.write(y);



// Q4



// var y = 50;
// var z = --y;
// document.write(z);


// Q5


// var num = 10;
// var newNum = num--;
// document.write(num); 



// Q6


// var num = 10;
// var newNum = num++;
// document.write(num); 


// Q7


// var num = 10;
// num = ++num;
// alert(num);


// Chapter 7 (Math Expression III)


// Q1



// var calculatedNum = 2 + (2 * 6);
// document.write(calculatedNum);


// Q2


// var calculatedNum = (2 + 2) * 6;
// document.write(calculatedNum);


// Q3


// var calculatedNum = (2 + 2) * (4 + 2);
// document.write(calculatedNum);


// Q4


// var calculatedNum = ((2 + 2) * 4) + 2;
// document.write(calculatedNum);


// Q5


// var cost = (10 + (9 * 4)) + 10;
// document.write(cost);


// Q6



// var units = (2 + 2) * 4 + 10;
// document.write(units);


// Q7


// var pressure = 4 / (2 * 4);
// document.write(pressure);


// Chapter 8 (Concatenating Text Strings)


// Q1


// var num = "2" + "2";
// document.write(num);


// Q2


// message = ("Hello," + "Dolly");
// alert(message);


// Q3



// alert("33" + 3);



// Q4


// var pak1 = "Pakistan";
// var pak2 = "Zindabad";
// alert(pak1 + " " + pak2);


// Q5


// var a = "Welcome home";
// var num = 123;
// document.write(a + num);


// Q6


// var string1 = "Hello";
// var string2 = "World";
// var concatenatedString = string1 + string2;
// document.write(concatenatedString);



// Chapter 9 (Prompts)


// Q1


// var firstName = prompt("Enter first name");



// Q2



// var country = prompt("Country? (default: China): ");
// if (!country) {
//     country = "China";
// }



// Q3



// var yourName = prompt("Enter Your Name");



// Q4



// let defaultInput = "This is the default input.";
// let userInput = prompt("Enter a string (default: {}): ".format(defaultInput));
// if (!userInput) {
//     userInput = defaultInput;
// }



// Q5


// let message = "Enter a string: ";
// let defaultResponse = "This is the default response.";

// let userResponse = prompt(message + "(default: {}): ".format(defaultResponse));
// if (!userResponse) {
//     userResponse = defaultResponse;
// }


// Q6


// let message = "Enter a string: ";
// let defaultResponse = "This is the default response.";

// let userResponse = prompt(message + "(default: {}): ".format(defaultResponse));
// if (!userResponse) {
//     userResponse = defaultResponse;
// }

// alert("You entered: " + userResponse);




