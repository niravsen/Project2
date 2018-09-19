//Declaring the quiz variables
var question1 = 
{
    question: "Where can you find HTML?",
    answer: "Internet",
    choices: ["Newspaper", "Internet", "Movies"],
    correctAnswer: 1,
    // correctImg: "assets/images/question1.jpg"
};

var question2 = 
{
    question: "Can you create your own HTML?",
    answer: "Yes",
    choices: ["Yes", "Maybe", "No"],
    correctAnswer: 0,
    // correctImg: "assets/images/question2.jpg"
};

var question3 = 
{
    question: "Do you think you can create games online?",
    answer: "100%",
    choices: ["NO no no", "Not Sure", "100%"],
    correctAnswer: 2,
    // correctImg: "assets/images/question3.jpg"
};

var question4 = 
{
    question:"Do you like surfing on Internet, or playing games?",
    answer: "Yessssss",
    choices: ["NO", "Yessssss", "Not sure"],
    correctAnswer: 1,
    // correctImg: "assets/images/question4.jpg"
};

var question5 = 
{
    question: "What does HTML shows on Internet?",
    answer: "Document",
    choices: ["Color", "Document", "Game"],
    correctAnswer: 1,
    // correctImg: "assets/images/question5.jpg"
};


//Array of questions
var QuestionsArray = [question1, question2, question3, question4, question5];

var indexQuestion = 0;


//Game scores
var gameScores = 
{
answeredCorrect: 0,
answeredWrong: 0,
missed: 0
};

function resetVariables() 
{
console.log("resetVariables function reached");
gameScores.answeredCorrect = 0;
gameScores.answeredWrong = 0;
gameScores.missed = 0;
indexQuestion = 0;

$("#scoreboard").html("");
$("#reset").hide();
$("#nextBtn").hide();
}

//move to next question function

function nextQuestion()
{
indexQuestion++;

if (indexQuestion < QuestionsArray.length)
{
    displayQuestion();
    $('#quizContent').hide();
    $('#timerDisplay').show();
    $('.btn').show();
    timer.stop();
    timer.reset();
    timer.start();
}

//Display scoreboard when game ends
else
{
    $('#quizContent').hide();
    $('#question').hide();
    $("#scoreboard").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
    "<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + 
    "<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>" +
    "<div>"+ "Missed Questions: " + gameScores.missed +"</div>" 
    );

    timer.stop();
    $('#timerDisplay').html('00:00');

    $("#reset").show();
    $("#nextBtn").show();

    $('.resetme').click(function()
    {
        $('#quizContent').hide();
        resetVariables();
        displayQuestion();
        $('#question').show();
        $('.btn').show();
        $('#timerDisplay').show();
        $('#nextBtn').hide();

    });
    
}


}
//Timer Countdown 

var timer = 
{
time:20,

reset: function()
{
    timer.time = 30;

},

start: function()
{
    //Use setInterval to start the count here
    counter = setInterval(timer.count, 1000);
},

stop: function()
{
    //Use clearInterval to stop the count here
    clearInterval(counter);
},

 count: function()
{ 
    if (timer.time == 0)
    {
        //Display correct answer if timer runs out and question is missed
        $('#quizContent').show(); //show the correct img div
        $('#timerDisplay').hide();
        $('.btn').hide();
        $('#quizContent').html("<h2><p>Time's up! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</p></h2>");
        gameScores.missed++;

        setTimeout(nextQuestion, 10000);
    }

},

 timeConverter: function(t)
{ //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    if (minutes === 0){
        minutes = "00";
    } else if (minutes < 10){
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

};

//Display Question

function displayQuestion()
{
    $("#question").html("<h3>" + QuestionsArray[indexQuestion].question + "</h3>");
    $("#button0").text(QuestionsArray[indexQuestion].choices[0]);
    $("#button1").text(QuestionsArray[indexQuestion].choices[1]);
    $("#button2").text(QuestionsArray[indexQuestion].choices[2]);
    $("#button3").text(QuestionsArray[indexQuestion].choices[3]);

}
//Start game on button press


$(document).ready(function()


{	//hide all until start button is pressed
$('#timerDisplay').hide();
$('.btn').hide();
$("#reset").hide();
$("#nextBtn").hide();

$('#startme').on("click", function() 

    {
        displayQuestion();
        timer.reset();
        timer.start();
        //show timer and buttons
        $('#timerDisplay').show();
        $('.btn').show();
        $("#reset").hide();
        $("#startme").hide();
        $("#nextBtn").hide();
    });



//User input check answer
$('.btn').click(function() 
{


if (indexQuestion < QuestionsArray.length)
{
    var userButtonValue = ($(this).attr("data-value"));
    console.log(userButtonValue);
    //Check for win
    if (userButtonValue == QuestionsArray[indexQuestion].correctAnswer)
    {
        
        $('#quizContent').html("<h2><p>Correct!</p></h2><img src='" + QuestionsArray[indexQuestion].correctImg + "' height = 150 width = 150 alt='correct'>");
        gameScores.answeredCorrect ++;//increment score
        console.log("correct answer " + gameScores.answeredCorrect);
        
        //reset timer
        timer.stop();
        timer.reset();						
    

    }
    //Else loss
    else
    {
    
        $('#quizContent').html("<h2><p>Wrong! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</p></h2>");
        gameScores.answeredWrong ++;
        console.log("wrong answer " + gameScores.answeredWrong);

        //reset timer
        timer.stop();
        timer.reset();	


    }

    $('#quizContent').show(); //show the correct img div
    $('#timerDisplay').hide();
    $('.btn').hide();
    $('#nextBtn').hide();

    setTimeout(nextQuestion, 3000);
    
}
});


// end document.ready function
});