let score = 501;

function throwDarts() {
    const dart1 = parseInt(document.getElementById('dart1').value) || 0;
    const dart2 = parseInt(document.getElementById('dart2').value) || 0;
    const dart3 = parseInt(document.getElementById('dart3').value) || 0;

    const turnScore = dart1 + dart2 + dart3;
    const prevScore = score;
    const status = document.getElementById('status');

    if (turnScore > score) {
        status.innerText = Bust! You scored ${turnScore} but only ${score} remaining.;
    } else if (turnScore === score) {
        if (isDouble(dart1, dart2, dart3)) {
            score = 0;
            status.innerText = 'You Win! Finished with a double.';
        } else {
            status.innerText = 'Bust! You must finish on a double.';
        }
    } else {
        score -= turnScore;
        status.innerText = You scored ${turnScore}.;
    }
    if (score !== 0 && turnScore > score) score = prevScore;
    document.getElementById('score').innerText = Score: ${score};
}

function isDouble(d1, d2, d3) {
    return d3 % 2 === 0 && d3 > 0;
}
