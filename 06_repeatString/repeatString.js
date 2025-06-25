

const repeatString = function (phrase, numberOfRepeats) {
    let finishedPhrase = "";
    if (numberOfRepeats < 0 ) {
        return "ERROR";
    }
    
    for (i = 0; i < numberOfRepeats; i++) {
        console.log('number of repeats: ' + numberOfRepeats);
        finishedPhrase += phrase;
        console.log('phrase: ' + phrase);
        console.log('finished phrase: ' + finishedPhrase);
    }
    return finishedPhrase;
};

// Do not edit below this line
module.exports = repeatString;
