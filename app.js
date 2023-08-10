const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


const bedroomJokes = [
    "Why did the pillow go to therapy? It had too many emotional issues.",
    "I told my computer I needed more sleep, and it responded with 'YAWN'!",
    "Why did the blanket go to the gym? It wanted to get a little more snug-fit.",
    "Why did the bed frame break? It couldn't handle the pressure.",
    "My lamp told me a shocking secret: It's been living a double-light!",
    "Why did the pillow put on sunscreen? It didn't want to get pillow burn.",
    "Why did the nightstand get a promotion? Because it had excellent bedside manner.",
    "My alarm clock and I are in a committed relationship. It's time-consuming, but it wakes me up.",
    "Why did the wardrobe apply for a job? It wanted to organize its closeted desires.",
    "I told my bed a joke, and it laughed so hard, it fell apart.",
    "Why did the dresser become a motivational speaker? It had plenty of drawers of inspiration.",
    "Why did the curtains break up? They just couldn't find common ground.",
    "My closet said it's feeling a bit crowded. I guess it's coming out of the closet!",
    "Why did the bedspread blush? Because it saw the sheets without their covers!",
    "Why did the bedside table feel left out? Because everyone kept their distance.",
    "Why did the lamp shade file a complaint? It was tired of always being overshadowed.",
    "Why did the pillowcase go on a date? It wanted to find a pillow to rest its case.",
    "Why did the blanket refuse to make a bed? It was tired of being stepped on.",
    "Why did the alarm clock break up with the calendar? It felt time was passing too quickly.",
    "Why did the bed refuse to apologize? It just couldn't lie down its pride.",
    "Why did the nightstand turn off the TV? It wanted to have a quiet night in.",
];




app.get('/', (req, res) => {
    // To randomly select and display a joke from the array
    const randomBedroomJoke =  bedroomJokes[Math.floor(Math.random() * bedroomJokes.length)];
    
    res.render("index", {
        value: randomBedroomJoke})

});

app.listen(9000, () => {
    console.log('app started')
});

