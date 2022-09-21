const messages = [
    "Why did I pick today, of all days, to turn it this hard?",
    "Boots. Boots, tea. Honey, boots and tea.",
    "And I said, 'Congressman! Is that your wife? By the trash? Gobbling up submarine sandwiches?'",
    "I was described as a tank barreling down a muddy hill that could be derailed by a twig.",
    "You can't judge a fish by its ability to transcribe.",
    "And you know what the lesson was? Everybody's different.",
    "What's the matter? You never seen a 50-year-old man before?",
    "Tire rotation. Four wheel drive.",
    "You look like a potholder.",
    "I'm in my 20's...... UNHHHHH 20'ssssss!",
    "If the lord can lead you to it, he can lead you through it."
];

const colours = ['#4681f4', '#5783db', '#55c2da', '#5dbea3', '#5adbb5', '#a881af', '#dd7973', '#ffbd03']

const button = document.querySelector("#quote-button");
const box = document.querySelector("#quote");
var lastIndex;
button.addEventListener("click", (e) => {
    let selectedIndex = Math.floor(Math.random() * messages.length);
    while (lastIndex === selectedIndex) {
        selectedIndex = Math.floor(Math.random() * messages.length);
    }
    
    box.innerText = messages[selectedIndex];
    let colourIndex = Math.floor(Math.random() * colours.length);
    button.style.backgroundColor = colours[colourIndex];

    lastIndex = selectedIndex;
});