let playerScore = 0;
let computerScore = 0;
document.getElementById('playerS').textContent = playerScore;
document.getElementById('computerS').textContent = computerScore;

function playerOptionSelection(option){
    if(option == '✊'){
        document.getElementById('forPlayer').textContent = option;
        let ce = computerSelection();
        if(ce == '✊'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✋'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 1;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✌'){
            playerScore = playerScore + 1;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
    }
    else if(option == '✋'){
        document.getElementById('forPlayer').textContent = option;
        let ce = computerSelection();
        if(ce == '✋'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✌'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 1;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✊'){
            playerScore = playerScore + 1;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
    }
    else if(option == '✌'){
        document.getElementById('forPlayer').textContent = option;
        let ce = computerSelection();
        if(ce == '✌'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✊'){
            playerScore = playerScore + 0;
            computerScore = computerScore + 1;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
        else if(ce == '✋'){
            playerScore = playerScore + 1;
            computerScore = computerScore + 0;
            document.getElementById('playerS').textContent = playerScore;
            document.getElementById('computerS').textContent = computerScore;
        }
    }
}

const emojis = ["✊", "✋", "✌"];

function computerSelection(){
    let compEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('forComputer').textContent = compEmoji;
    return compEmoji;
}