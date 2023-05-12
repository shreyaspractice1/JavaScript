  var compony = " Persistent Systems";

  var hobby1 = " Listening Spiritual Songs";
  var hobby2 = " Car Driving";
  var hobby3 = " Trecking on Mountains";
  //-------------------------------------------------
function stringBasics()    // Functions
  {
    console.log("My dream compony is :",compony);
  }
  function myHobbies() {
    console.log("My hobbies are =>",hobby1,hobby2,hobby3);
  }
  function charSum() {
    var hobby1Lenght = hobby1.length;
    var hobby2Lenght = hobby2.length;
    var hobby3Lenght = hobby3.length;
   
    var sum = hobby1.length+hobby2.length+hobby3.length;
  
    console.log("Sum of total number of character in Hobbies are => ",sum);
  }
  //--------------------------------------------------------
  console.log("---------------------------------------------------------------------------");


  console.log("1)");
  stringBasics()    //function call 1)
  console.log("---------------------------------------------------------------------------");

  console.log("2)"); 
  console.log("2.1");

  myHobbies()       //function call 2.1)
  console.log("2.2");
   charSum();       //function call 2.2)
   console.log("---------------------------------------------------------------------------");


  