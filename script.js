const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices');
const shareButton = document.getElementById('share-btn');

const story = [
    {
        text: "Максим вернулся в родной город. Что он сделает?",
        choices: [
            { text: "Пойти в парк", nextScene: 1 },
            { text: "Пойти в центр города", nextScene: 2 }
        ]
    },
    {
        text: "Максим идет в парк. Он встречает старых знакомых.",
        choices: [
            { text: "Поговорить с ними", nextScene: 3 },
            { text: "Игнорировать и уйти", nextScene: 4 }
        ]
    },
    {
        text: "Максим идет в центр города и встречает старых знакомых.",
        choices: [
            { text: "Поздороваться и поговорить", nextScene: 3 },
            { text: "Избежать их и продолжить путь", nextScene: 4 }
        ]
    },
    {
        text: "Максим решает наладить отношения и заходит в кафе, чтобы поговорить.",
        choices: [
            { text: "Пойти с ними в бар", nextScene: 5 },
            { text: "Отказаться и уйти", nextScene: 6 }
        ]
    },
    {
        text: "Максим уходит, чувствуя себя одиноким. Что будет дальше?",
        choices: [
            { text: "Пойти искать работу", nextScene: 7 },
            { text: "Покопаться в старых вещах", nextScene: 8 }
        ]
    },
    // Добавьте остальные сцены
];

let currentScene = 0;

function renderScene() {
    const scene = story[currentScene];
    storyText.textContent = scene.text;
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.nextScene;
            renderScene();
        };
        choicesContainer.appendChild(button);
    });
}

function showShareButton() {
    shareButton.style.display = 'block';
    shareButton.onclick = () => {
        const result = `Мой финал игры: ${story[currentScene].text}`;
        alert(`Я прошел игру! Вот мой результат: ${result}`);
    };
}

renderScene();
