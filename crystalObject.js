$( document ).ready(function() {

    /*Here we declare variables in global scope
      The problem calls for random numbers to be generated
      within a range, for which we utilize Math.random() */
    

    var solution = Math.floor(Math.random() * 101 + 19);
    var redCrystal = Math.floor(Math.random()*11 + 1);
    var blueCrystal = Math.floor(Math.random()*11 + 1);
    var yellowCrystal = Math.floor(Math.random()*11 + 1);
    var greenCrystal = Math.floor(Math.random()*11 + 1);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#solutionDiv").text(solution);

    // Here we create the function to start a new game.

    function reset() {
       totalScore = 0;
       solution = Math.floor(Math.random() * 101 + 19);
       redCrystal = Math.floor(Math.random()* 11 + 1);
       blueCrystal = Math.floor(Math.random()* 11 + 1);
       yellowCrystal = Math.floor(Math.random()* 11 + 1);
       greenCrystal = Math.floor(Math.random()* 11 + 1);
      $("#totalScore").text(totalScore);
    };

    // This is the control structure used to determine if the game is over.

    function isGameOver() {
      $("#totalScore").text(totalScore);
      if (totalScore === solution) {
        wins ++;
        $("#wins").text(wins);
        reset();
      } else if (totalScore > solution) {
        losses ++;
        $("#losses").text(losses);
        reset();
      }
    };

    
    /* Here we use Jquery to select the elements in our HTML file which correspond
       to the gems of different value */

    $("#redCrystal").click(function() {
      totalScore = totalScore + redCrystal;
      isGameOver();
      console.log(totalScore);
    });
    $("#blueCrystal").click(function() {
      totalScore = totalScore + blueCrystal;
      isGameOver();
    });
    $("#yellowCrystal").click(function() {
      totalScore = totalScore + yellowCrystal;
      isGameOver();
    });
    $("#greenCrystal").click(function() {
      totalScore = totalScore + greenCrystal;
      isGameOver();
    });

});