randomJokes = [
    'I used to be addicted to the hokey pokey… but then I turned myself around.', 
    'What\’s the most terrifying word in nuclear physics?...“Oops!”',
    'I was wondering why the ball kept getting bigger and bigger...And then it hit me.',
    'I got fired from my job at the bank today...An old lady came in and asked me to check her balance, so I pushed her over.'
]

const randomNum = Math.floor(Math.random() * 4);


const message = randNum => {
    console.log(randomJokes[randNum]);
}

message(randomNum);