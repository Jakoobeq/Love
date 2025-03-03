quotes = [
    "Love you more than any words can describe it, I hope that you can smile when you see it.", 
    "Hello Little Mousie, hope you are having great day ! Remeber that I love you very much and miss you all the time",
    "You know baby, secret to happy marriage is finding person with whom you love to spent all time, and i feel that about you.", 
    "True love is very rare, but when I felt emotions again and how you made me alive again, i knew that this is real.",
    "Do you know why i know that we are meant for each other ? Because I felt like ours souls know each others for decades, like they met in past lives.",
    "I love you very deeply, not only for who you are but also for who I am next to you, you make me better person and I am very grateful for that.",
    "It's amazing how I know you so short time, yet im at peace and I know I can trust you with everything. That whatever doors we will face we will open them together.",
    "My little princess I love you in every minute I have, I love you most basic simple and pure form of love that doesnt judge. I love you for everything you are, and for everything you are not.",
    "Baby I desire you because i deeply miss you when I can't talk with you, or see you. I am obsessed with you and I love it. Let's be obssesed with each other whole life.",
    "My sweet sweet baby, I cannot wait to travel whole world with you, to be able to hold you in my arms, to feel your warmth, to taste your lips and smell your skin, I cannot wait for our meeting, it will be epic. Trully time of my life.",
];

quotes[0]
random = Math.floor(Math.random() * quotes.length);
randomq = quotes[random];

function generateQuote() {
    document.getElementById("display").innerHTML = randomq;
}
