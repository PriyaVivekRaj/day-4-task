//Task 1: Simple programs to do for variables:
    //1.Declare four variables without assigning values and print them in console:
    
const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
 inp.on("close", () => {
     var a, b, c, d;//declared 4 variables without assigning
    console.log(a,b,c,d);//print 4 variables
 });

// 2. How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");


const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
 inp.on("close", () => {
    var myvar= 1;
    console.log("myvar",myvar);//myvar as output
       
 });

// 3.Declare variables to store your first name, last name, marital status, country and age in multiple lines*

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput;
    var firstName, lastName, maritalStatus, country, age;
    firstName = data[0];
    lastName = data[1];
    maritalStatus = data[2];
    country = data[3];
    age = parseInt(data[4]);
    console.log(firstName, lastName, maritalStatus,country, age);
 
});

// 4. Declare variables to store your first name, last name, marital status, country and age in single lines

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var d = userInput[0]+split("");
    var firstName= data[0];
    var lastName = data[1];
  var maritalStatus = data[2];
    var country = data[3];
    var age = data[4];
    console.log("Enter your firstName, lastName, maritalStatus,country,age:",firstName, lastName, maritalStatus,country, age);
    
 
 
});


// 5. Declare variables and assign string, boolean, undefined and null data types

const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
 inp.on("close", () => {
 var a="kanna";
console.log(a,typeof(a));
var bool=true;
console.log(bool,typeof(bool));
var b;
console.log(b,typeof(b));
var num=null;
console.log(num,typeof(num));
 });

// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)

const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
inp.on("close", () => {
    var n1="12345";//string
    var n2=23456;//number
    var n3 = + n1;
    //console.log(n3,typeof(n3));
    var n5=Number(n1);//Number()
    console.log(n1,typeof(n1));
    console.log(n5,typeof(n5));
   
    //var n3=parseInt(n1);//string to number
    
   //  console.log(n1,typeof(n1));

 });




// 7. Write 6 statement which provide truthy & falsey values.

const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
inp.on("close", () => {
    var a=4, b=5, c=6, d=7,e=7,f=7,g=3;
    console.log(a == b);
    console.log(b == c);
    console.log(c == d);
    console.log(d == e);
    console.log(e == f);
    console.log(f == g);
 });


//task 2:Task 2: Simple Programs todo for Operators
    
//1. Square of a number

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var n= parseInt(userInput[0]);  
    console.log(n*n);
 
});

// 2. Swapping 2 numbers:

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var data = userInput;
    var a = parseInt(data[0]);
    var b = parseInt(data[1]);
    var temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a, b);
});

// 3. Addition of 3 numbers

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var a = parseInt(userInput[0]);
    var b = parseInt(userInput[1]);
    var b = parseInt(userInput[2]);
    //var d=parseInt(a+b+c);
    //console.log(d);
    console.log(a+b+c);
});

//4. Celsius to Fahrenheit conversion

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var Celsius = parseInt(userInput[0]);
   var Fahrenheit = parseInt(userInput[1]);
     Fahrenheit = (Celsius * 1.8) + 32;
    console.log(Fahrenheit);
    });

// 5. Meter to miles

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var meter = parseInt(userInput[0]);
    //var miles = parseInt(userInput[0]);
    var miles = meter / 1609.344;
    console.log(Fahrenheit);
    });


// 6. Pounds to kg

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var pounds = parseInt(userInput[0]);
    var kiloGrams = parseInt(userInput[1]);
    kiloGrams = pounds * 0.453592;
    console.log(kiloGrams);
});
    
// 7. Calculate Batting Average

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var runs= parseInt(userInput[0]);
    var matches = parseInt(userInput[1]);
    var notOut=parseInt(userInput[2]); 
    var disMissed = matches - notOut;
    var battingAverage = runs / disMissed;
  console.log(battingAverage);
    });

// 8. Calculate five test scores and print their average:
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var data = userInput[0];
  var acc = parseInt(userInput[0]);
  var cur = parseInt(userInput[1]);
  const sum = acc + cur;
  const average = sum / arr.length;
  


  console.log("Average:"+average);
});

//9. Power of any number x ^ y.:

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var x= parseInt(userInput[0]);
    var y = parseInt(userInput[1]);   
    console.log(Math.pow(x,y));
    });



//10.Calculate Simple Interest


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var p= parseInt(userInput[0]);
    var n = parseInt(userInput[1]); 
    var r = parseInt(userInput[2]); 
    var simpleIntrest = parseInt(userInput[3]);
    simpleIntrest = (p * n * r) / 100;
    console.log(simpleIntrest);
    });

//11. Calculate area of an equilateral triangle

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var p= parseInt(userInput[0]);
    const areaOftriangle = Math.sqrt(3) / 4 * (a * a); 
    console.log(areaOftriangle);
    });

//12. Area Of Isosceles Triangle

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var base = parseInt(userInput[0]);
    var height= parseInt(userInput[1]);
    const area= (b * h) / 2; 
    console.log(area);
    });


//13.Volume Of Sphere

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
    var r = parseInt(userInput[0]);
   
    const v= (4/3) * Math.PI * Math.pow(r,3); 
    console.log("volume of sphere : ",v);
});
    
//14. Volume Of Prism


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var base = parseInt(userInput[0]);
    var height = parseInt(userInput[1]);
    console.log("Volume of Prism : ",base*height);
    });


//15. Find area of a triangle.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var base = parseInt(userInput[0]);
    var height= parseInt(userInput[1]);
    console.log("Area of triangle:",(base * height) / 2);
});
    
//16. Give the Actual cost and Sold cost, Calculate Discount Of Product

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
  
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
  
    var actualCost = parseInt(userInput[0]);
    var salePrice = parseInt(userInput[1]);
    var discount = (actualCost - salePrice) / actualCost * 100;
    console.log("Calculate Discount of Product: ",discount);
    });
//--------------------------------------------------------------------------------------------------------------------------------------------------
//17. Given their radius of a circle and find its diameter, circumference and area.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var radius = parseInt(userInput[0]);
    var Diameter = parseInt(userInput[1]);
    var circumFerence = parseInt(userInput[2]);
    console.log("Diameter of Circle : ", radius * radius);
    console.log("circumference of Circle : ", Math.round( 2 * Math.PI * radius).toFixed(2));
    console.log("Area of Circle : ", Math.PI * radius * radius);
    
});
    

//-------------------------------------------------------------------------------------------------------------------------------------------------


//18. Given two numbers and perform all arithmetic operations.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

 var a = parseInt(userInput[0]);
 var b = parseInt(userInput[1]);
   console.log("Addition: ", a + b);
    console.log("Subtraction: ", a - b);
    console.log("Division: ", a / b);
    console.log("Modulus: ", a % b);
    console.log("Multiplication: ", a * b);
});
    

// 19. Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
    
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
//------------------------------------------------------------------------------------------------------------------------------------------------------    
//20. Calculate electricity bill?
    // For example, a consumer consumes 100 watts per hour daily for one month.Calculate the total energy bill of that consumer if per unit rate is 10 ?
  // Enter electricity unit and calculate amount to pay.
    
  const readline = require('readline');
  const inp = readline.createInterface({
    input: process.stdin
  
  });
  const userInput = [];
  inp.on("line", (data) => {
   userInput.push(data);
  });
  inp.on("close", () => {
    
    var units = parseInt(userInput[0]);
    var rupees = 10;
    var month = 30;
    var totHours = 24 * month;
    var totalUnits = totHours * units * rupees;
    console.log("Amount to pay: ",totalUnits );     
  });
  
//------------------------------------------------------------------------------------------------------------------------------------------
        
//21. Program To Calculate CGPA:

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var english = parseInt(userInput[0]);
    var tamil = parseInt(userInput[1]);
    var maths = parseInt(userInput[2]);
    var science = parseInt(userInput[3]);
    var socialScience = parseInt(userInput[4]);    
    var CGPA = ( english + tamil + maths + science + socialScience ) / 5;  
    console.log("Volume of CGPA : ",CGPA);
    });

/----------------------------------------------------------------------------------------------------------------------------------------    
//     Task 3: Simple Programs todo for Condition, Looping and Arrays
//    1. Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);
});

-//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // 2. Iterate through the string array and print it contents
    
  // var strArray = ["<option>Jazz</option>",
  //   , "<option>Blues</option>",
  //   , "<option>New Age</option>",
  //   , "<option>Classical</option>",
  //   , "<option>Opera</option>"]
  
  // const readline = require('readline');
  // const inp = readline.createInterface({
  //   input: process.stdin
  // });
  // const userInput = [];
  // inp.on("line", (data) => {
  //   userInput.push(data);
  // });
  // inp.on("close", () => {
    var strArray = ["<option>Jazz</option>", "<option>Blues</option>", "<option>New Age</option>", "<option>Classical</option>", "<option>Opera</option>"]
    for (var i in strArray)
      console.log(strArray[i]);
  //});

  //---------------------------------------------------------------------------------------------------------- 
  //3. Arrays:
 // ----------------------------------------------------------------------------------------------------------
  
  // var myarray = [11, 22, 33, 44, 55]
    
  //   write a code to count the elements in the array.Don’t use length property
    
  //   Declare an empty array;

    // const readline = require('readline');
    // const inp = readline.createInterface({
    //   input: process.stdin
    // });
    // const userInput = [];
    // inp.on("line", (data) => {
    //  userInput.push(data);
    // });
    //   inp.on("close", () => {
        var myarray = [11, 22, 33, 44, 55];
        var s=0;
        var a = parseInt(myarray);
        for (var i in myarray) {
         s=s+myarray[i];
        }
      
    console.log(s);
    
   // });

  //------------------------------------------------------------------------------------------------------------------------------------------
    // 4. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
    
  
    let foods = ['Idly', 'Dosa', 'Avalakki', 'Adai', 'Idiyappam', 'Puttu', 'obbuttu',
      'IceBiriyani', 'Pesarattu', 'Pori', 'Pongal', 'Vada', 'chappati', 'sambarrice', 'upma', 'chitranna', 'Payasam', 'rasamrice', 'curdrice', 'Sojji'];
    console.log(foods);
  
    
//------------------------------------------------------------------------------------------------------------------------------------------    
    
    //5. Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
    
    let foods = ['Idly', 'Dosa', 'Avalakki', 'Adai', 'Idiyappam', 'Puttu', 'obbuttu',
      'IceBiriyani', 'Pesarattu', 'Pori', 'Pongal', 'Vada', 'chappati', 'sambarrice', 'upma', 'chitranna', 'Payasam', 'rasamrice', 'curdrice', 'Sojji'];
    console.log(foods[4]);

  
//---------------------------------------------------------------------------------------------------------------------------------------------    
    // Find the length of your foods array

    // 6. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
//------------------------------------------------------------------------------------------------------------------------------------------------    

let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
    function dataHandling(input) {
        for (var i = 0; i < input.length; i++) {
 
    {
    if (input[i] == 'Mari')
    {
          input[i] = 'Munnabai';
          console.log(input);
        }
      }
    
    }
    
    } 
  dataHandling(friends);
  
//-------------------------------------------------------------------------------------------------------------------------------------------------
        // 7. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
//----------------------------------------------------------------------------------------------------------------------------------------------------    
        let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input) {
 
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 'CaptianAmerica') { break; }
    console.log(input[i]);
             
       
  }
   
        
}
   
    dataHandling(friends);  
//-----------------------------------------------------------------------------------------------------------------------------------------------
   //8. Find the person is ur friend or not.
    
    // const friends = [
    // “Mari”,
    // “MaryJane”,
    // “CaptianAmerica”,
    // “Munnabai”,
    // “Jeff”,
    // “AAK chandran”
    // ];
    
    let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "Jeff"];
function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    input.includes(name, 0);
    return `${name} is MyFriend.`;
  }
    
} 
        
      let found = dataHandling(friends,'Jeff');
       console.log(found);
       
// /-----------------------------------------------------------------------------------------------------------------------------------------------
    
  //1. Get the first item, the middle item and the last item of the array
  
  const readline = require('readline');
  const inp = readline.createInterface({
    input: process.stdin
  });
  const userInput = [];
  inp.on("line", (data) => {
   userInput.push(data);
  });
  inp.on("close", () => {
    var friends = ['kalai', 'manju', 'kamali', 'janu', 'ram'];
    var a = Math.round(friends.length / 2)-1;
    // getting first element from existing array.
    console.log(friends[0]);
    // gettin middle element from existing array.
    console.log(friends[a]);
    // gettin last element from existing array.
    console.log(friends.pop());
  });



//--------------------------------------------------------------------------------------------------------------------------------------
  // 2. Add your name to the end of the friends array, and add another name to beginning.
  
    
 var friends = ['kalai', 'manju', 'kamali'];
  console.log(friends);
  // Adding elements to existing array at first
  friends.splice(0, 0, 'janu');
  // Adding elements to existing array at last
  friends.push("ram");
    console.log(friends);  


//-------------------------------------------------------------------------------------------------------------------------------------------                 
  //  3. Add Mr or Ms to the names in the friends array.


  var friendsF = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
    
  var friendsM = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
 
  var k = [" "];var l=[" "];
  for (var i in friendsM)
  {
     k = 'Ms.' + friendsF[i] ;
    console.log(k);
    l ='Mr.' + friendsM[i];
    console.log(l);
    
    }

 
    

//--------------------------------------------------------------------------------------------------------------------------------------------------    
      5. Find the friends names who has letter ‘a’ and return the list.

      let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "Jeff"];
               for (var i = 0; i < friends.length; i++)
         {
         if( friends[i].includes('a', 0))
            console.log(friends[i]); 
           
         }
//------------------------------------------------------------------------------------------------------------------------------------------------------