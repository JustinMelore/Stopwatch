$(document).ready(function() {
  
  //Variables
  var interval;

  //Units of measurement for time
  var ms = 0;
  var s = 0;
  var m = 0;
  var h = 0;

  var hasStarted = false;
  var paused = false;

  //Functions
  function startLoop() {
    let startingTime = Date.now();
    interval = setInterval(function() {
      ms = Date.now() - startingTime;
      if(ms>=1000) {
          ms = 0;
          startingTime = Date.now();
          s++;
          if(s>= 60) {
              s = 60;
              m++;
              if(m>=60) {
                  m = 0;
                  h++;
              }
          }
      }
      if(!paused) {$("h1").eq(1).text(`${h} : ${m} : ${s} : ${ms}`);}
    },1);
  }

  function stopLoop() {clearInterval(interval);}

  //Event Handlers/Listeners
  $("button").eq(0).on("mousedown",function() {
    if(hasStarted) {
      stopLoop();
      hasStarted = false;
      $("button").eq(0).text("Start").css("border-color","#090").css("color","#090");
      $("button").eq(1).text("Clear").css("border-color","#009").css("color","#009");
    }else{
      startLoop();
      hasStarted = true;
      $("button").eq(0).text("Stop").css("border-color","#900").css("border-color","#900").css("color","#900");
      $("button").eq(1).text("Pause").css("border-color","#900").css("color","#900");
      paused = false;
    }
  })

  $("button").eq(1).on("mousedown",function() {
    if(hasStarted) {
      paused = !paused;
      if(paused) {
        $("button").eq(1).text("Resume").css("border-color","#090").css("color","#090");
      }else{
        $("button").eq(1).text("Pause").css("border-color","#900").css("color","#900");
      }
    }else{
      ms = 0;
      s = 0;
      m = 0;
      h = 0;
      $("h1").eq(1).text(`${h} : ${m} : ${s} : ${ms}`);
    }
  })
})



  