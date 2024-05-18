const $ = document.querySelectorAll.bind(document);

const items = $('.wrapper__item');

const answer = document.querySelector('.answer');
const answerH = document.querySelector('.answer-h');
const button = document.querySelector('button');

items.forEach(element => {
    element.addEventListener('click', (event) => {
        answer.style.display = 'flex';
        if (event.target == items[1]) {
            answerH.innerHTML = 'Ты угадал!! Кликни на кнопку слева)';
        } else {
            answerH.innerHTML = 'Ты не угадал... иди нахуй';
            button.style.display = 'none';
        }
    })
});

button.addEventListener('click', () => {
    button.style.display = 'none';
    answerH.style.color = 'black';
    answer.style.backgroundColor = 'white';
})

button.addEventListener('click', () => {
    let linkOne = document.createElement('a');
    linkOne.href = 'https://i1.wp.com/devkis.club/uploads/posts/2022-12/thumbs/1672143207_72-devkis-club-p-porno-pyanie-bomzhikhi-78.jpg?;ssl=1';  // Вставьте нужный URL!
    linkOne.download = 'download_me.jpg';  // И выберите имя файла для загрузки!
    document.body.appendChild(linkOne);
    linkOne.click();
})