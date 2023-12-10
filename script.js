var nameFirst = document.getElementById("nameFirst")

var nameSecond = document.getElementById("nameSecond")

var formm = document.getElementById("formm")

var answers = document.getElementById('answer')

formm.addEventListener("submit", function(e) {
    e.preventDefault();

        var nameVal1 = nameFirst.value;
        var nameVal2 = nameSecond.value;

    if (!nameVal1 ||!nameVal2) {
        alert("please fill in all fields");
    }
    else {
        var nameVal1 = nameFirst.value;
        var nameVal2 = nameSecond.value;

        var nameValArray1 = nameVal1.toLowerCase().split('');
        var nameValArray2 = nameVal2.toLowerCase().split('');

        var sameLetters = nameValArray1.filter(letter => nameValArray2.includes(letter));

        var seperateLettersCount = nameValArray1.filter(letter => !sameLetters.includes(letter)).length + 
        nameValArray2.filter(letter => !sameLetters.includes(letter)).length

        var for1 = seperateLettersCount % 5 === 1;
        var for2 = seperateLettersCount % 5 === 2;
        var for3 = seperateLettersCount % 5 === 3;
        var for4 = seperateLettersCount % 5 === 4;
        var for5 = seperateLettersCount % 5 === 5;

        var answer;
        if (for1) {
             answer = 'Friends'
        }
        else if (for2) {
             answer = 'Lovers'
        }
        else if (for3) {
             answer = 'Admires'
        }
        else if (for4) {
            answer = 'Married'
        }
        else {
            answer = 'Enemies'
        }
        console.log('print:',  answer)
    }

    answers.innerText = 'You guys are meant to be ' + '... ' + answer;
})