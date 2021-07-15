function rpsGame (yourChoice) {
    var humanChoice, botChoice; //was bot choice
    humanChoice = yourChoice.id;
    botChoice = numberSelect(randRPSInt()); //was bot choice
    results = decideWinner(humanChoice, botChoice); //was bot choice
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message); //was bot choice
}
function randRPSInt () {
    return Math.floor(Math.random() * 3); // eliminate floats  
}

function numberSelect(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage ([yourScore]) {
    if (yourScore === 0) {
        return {'message': '씨발', 'colour': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': '괜찮아', 'colour': 'yellow'};
    }
    else {
        return {'message': '아싸', 'colour': 'green'};
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imgData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove;
    document.getElementById('paper').remove;
    document.getElementById('scissors').remove;

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src'" + imgData[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba:(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='colour: " + finalMessage['colour'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src'" + imgData[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba:(243, 38, 24, 1);'>"
    
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    

}