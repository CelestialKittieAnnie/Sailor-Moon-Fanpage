document.addEventListener('DOMContentLoaded', () => {
    // Polls
    const pollForm = document.getElementById('poll-form');
    const pollResults = document.getElementById('poll-results');

    pollForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(pollForm);
        const favoriteScout = formData.get('scout');
        pollResults.textContent = `Thanks for voting! Your favorite Sailor Scout is ${favoriteScout}.`;
    });

    // Character Quiz
    const generateCharacterButton = document.getElementById('generate-character');
    const characterResult = document.getElementById('character-result');
    const characters = ['Usagi', 'Ami', 'Rei', 'Makoto', 'Minako'];

    generateCharacterButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        characterResult.textContent = `You are most like ${characters[randomIndex]}!`;
    });

    // Trivia
    const generateTriviaButton = document.getElementById('generate-trivia');
    const triviaQuestion = document.getElementById('trivia-question');
    const triviaAnswer = document.getElementById('trivia-answer');
    const triviaQuestions = [
        { question: 'What is Sailor Moon\'s real name?', answer: 'Usagi Tsukino' },
        { question: 'Who is Sailor Mercury?', answer: 'Ami Mizuno' },
        // Add more trivia questions and answers as needed
    ];

    generateTriviaButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
        triviaQuestion.textContent = triviaQuestions[randomIndex].question;
        triviaAnswer.textContent = `Answer: ${triviaQuestions[randomIndex].answer}`;
    });

    // Sailor Scout Name Generator
    const scoutForm = document.getElementById('scout-form');
    const scoutNameResult = document.getElementById('scout-name-result');

    scoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(scoutForm);
        const name = formData.get('name');
        const birthSign = formData.get('birth-sign');
        const zodiac = formData.get('zodiac');
        const birthstone = formData.get('birthstone');
        scoutNameResult.textContent = `Your Sailor Scout name is Sailor ${name} of ${birthSign} ${zodiac} ${birthstone}!`;
    });
});