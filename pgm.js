function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    //to display question
    var element = document.getElementById('questions');
    element.innerHTML = quiz.getQuestionIndex().text;
    

    //to display choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i=0; i<choices.length; i++){
      var element = document.getElementById('choice'+i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populate();
    }
}

function showProgress() {
  var currentQuestionNum = quiz.questionIndex +1;
  var element = document.getElementById('progress');
  element.innerHTML = "Question " +currentQuestionNum + "of" +quiz.questions.length;
}



function showScores() {
  var gameOverHTML = "<h1>Result</h1>"
      gameOverHTML += "<h2 id='score'> Score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;  
}



var questions = [
  new Question("Pedology is the science related to the study of ________ ", [ "atmosphere", "soil", "pollutants", "seeds"],"soil"),
  new Question("Who is the president of the Council of Scientific and Industrial Research?",["President of India","Vice-President of India","Prime Minister of India","Union Minister of Science and Technology"],"Prime Minister of India"),
  new Question("Which country developed Julang-2 ballistic missile? ", [ "U.K.", "Nepal", "China", "Malaysia"],"China"),
  new Question("'DTP' computer abbreviation usually means ? ", [ "Digital Transmission Protocol", "DeskTop Publishing", "Data Type Programming", "Document Type Processing"],"DeskTop Publishing"),
  new Question("Which of the following is a non metal that remains liquid at room temperature?", [ "Phosphorous", "Bromine", "Chlorine", "Helium"],"Bromine"),
  new Question("In what state is the Elephant Falls located? ", [ "Mizoram", "Orissa", "Manipur", "Meghalaya"],"Meghalaya"),
  new Question("The staple food of the Vedic Aryan was ", [ " Barley and rice", "Milk and its products", "Rice and pulses", "Vegetables and fruits"],"Milk and its products"),
  new Question("The paintings in the Ajanta and Ellora caves are indicative of the development of art under the ", [ "Pallavas", "Chalukyas", " Pandyas", "Rashtrakutas"],"Chalukyas"),
  new Question("Which is the largest producer and exporter of Rubber in the world? ", [ "India", "Thailand", "Sri Lanka", "China"],"Thailand"),
  new Question("Entomology is the science that studies ", [ "Behaviour of human beings", " Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],"Insects")
];

var quiz = new Quiz(questions);

populate();

