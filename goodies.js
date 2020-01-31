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
      
//when "save" button is clicked text should be stored locally


//setting and getting text for 9a div from local storage
$(".saveBtn").on("click", function() {
  var nineText = $("#9a").val().trim();
  console.log(nineText);
  localStorage.setItem("9atext", nineText);
});

var getNineText = localStorage.getItem("9atext");
console.log(getNineText)
$("#9a").val(getNineText);

//setting and getting text for 10a div from local storage
$(".saveBtn").on("click", function() {
  var tenText = $("#10a").val().trim();
  console.log(tenText);
  localStorage.setItem("10atext", tenText);
});

var getTenText = localStorage.getItem("10atext");
console.log(getTenText)
$("#10a").val(getTenText);

//setting and getting text for 11a div from local storage
$(".saveBtn").on("click", function() {
  var elevenText = $("#11a").val().trim();
  console.log(elevenText);
  localStorage.setItem("11atext", elevenText);
});

var getElevenText = localStorage.getItem("11atext");
console.log(getElevenText)
$("#11a").val(getElevenText);

//setting and getting text for 12p div from local storage
$(".saveBtn").on("click", function() {
  var twelveText = $("#12p").val().trim();
  console.log(twelveText);
  localStorage.setItem("12ptext", twelveText);
});

var getTwelveText = localStorage.getItem("12ptext");
console.log(getTwelveText)
$("#12p").val(getTwelveText);

//setting and getting text for 1p div from local storage
$(".saveBtn").on("click", function() {
  var oneText = $("#1p").val().trim();
  console.log(oneText);
  localStorage.setItem("1ptext", oneText);
})

var getOneText = localStorage.getItem("1ptext");
console.log(getOneText)
$("#1p").val(getOneText);

//setting and getting text for 2p div from local storage
$(".saveBtn").on("click", function() {
  var twoText = $("#2p").val().trim();
  console.log(twoText);
  localStorage.setItem("2ptext", twoText);
})

var getTwoText = localStorage.getItem("2ptext");
console.log(getTwoText)
$("#2p").val(getTwoText);

//setting and getting text for 3p div from local storage
$(".saveBtn").on("click", function() {
  var threeText = $("#3p").val().trim();
  console.log(threeText);
  localStorage.setItem("3ptext", threeText);
})

var getThreeText = localStorage.getItem("3ptext");
console.log(getThreeText)
$("#3p").val(getThreeText);

//setting and getting text for 4p div from local storage
$(".saveBtn").on("click", function() {
  var fourText = $("#4p").val().trim();
  console.log(fourText);
  localStorage.setItem("4ptext", fourText);
})

var getFourText = localStorage.getItem("4ptext");
console.log(getFourText)
$("#4p").val(getFourText);

//setting and getting text for 5p div from local storage
$(".saveBtn").on("click", function() {
  var fiveText = $("#5p").val().trim();
  console.log(fiveText);
  localStorage.setItem("5ptext", fiveText);
})

var getFiveText = localStorage.getItem("5ptext");
console.log(getFiveText)
$("#5p").val(getFiveText);