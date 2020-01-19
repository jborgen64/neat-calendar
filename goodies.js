//implementing Moment
    //getting date to post at top of page
    $("#currentDay").append(moment().format('MMMM Do YYYY'));

    //getting the scheduler to change each hour based on time of day

  var currentHour = parseInt(moment().format('HH'));
  console.log(currentHour);

  //function changing color of planner based on time of day for hour 9

    function Display9() {
      if (currentHour < 9) {
        $("#9a").removeClass("present past");
      }
      else if (currentHour === 9) {
        $("#9a").removeClass("future past");
      }
      else {
        $("#9a").removeClass("future present");
      }
    }

      Display9()

    //function changing color of planner based on time of day for hour 10

    function Display10() {
      if (currentHour < 10) {
        $("#10a").removeClass("present past");
      }
      else if (currentHour === 10) {
        $("#10a").removeClass("future past");
      }
      else {
        $("#10a").removeClass("future present");
      }
    }

      Display10()


    //function changing color of planner based on time of day for hour 11

    function Display11() {
      if (currentHour < 11) {
        $("#11a").removeClass("present past");
      }
      else if (currentHour === 11) {
        $("#11a").removeClass("future past");
      }
      else {
        $("#11a").removeClass("future present");
      }
    }

      Display11()

    
    //function changing color of planner based on time of day for hour 12
    function Display12() {
      if (currentHour < 12) {
        $("#12p").removeClass("present past");
      }
      else if (currentHour === 12) {
        $("#12p").removeClass("future past");
      }
      else {
        $("#12p").removeClass("future present");
      }
    }

      Display12()

    //function changing color of planner based on time of day for hour 13
    function Display1() {
      if (currentHour < 13) {
        $("#1p").removeClass("present past");
      }
      else if (currentHour === 13) {
        $("#1p").removeClass("future past");
      }
      else {
        $("#1p").removeClass("future present");
      }
    }

      Display1()

    //function changing color of planner based on time of day for hour 14
    function Display2() {
      if (currentHour < 14) {
        $("#2p").removeClass("present past");
      }
      else if (currentHour === 14) {
        $("#2p").removeClass("future past");
      }
      else {
        $("#2p").removeClass("future present");
      }
    }

      Display2()

    //function changing color of planner based on time of day for hour 15
    function Display3() {
      if (currentHour < 15) {
        $("#3p").removeClass("present past");
      }
      else if (currentHour === 15) {
        $("#3p").removeClass("future past");
      }
      else {
        $("#3p").removeClass("future present");
      }
    }

      Display3()

    //function changing color of planner based on time of day for hour 16
      function Display4() {
        if (currentHour < 16) {
          $("#4p").removeClass("present past");
        }
        else if (currentHour === 16) {
          $("#4p").removeClass("future past");
        }
        else {
          $("#4p").removeClass("future present");
        }
      }
  
        Display4()

         //function changing color of planner based on time of day for hour 17
      function Display5() {
        if (currentHour < 17) {
          $("#5p").removeClass("present past");
        }
        else if (currentHour === 17) {
          $("#5p").removeClass("future past");
        }
        else {
          $("#5p").removeClass("future present");
        }
      }
  
        Display5()
      
     
  
  

//getting text to be input by user on each hour
//when "save" button is clicked text should be stored locally
