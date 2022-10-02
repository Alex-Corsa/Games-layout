const btn = document.querySelector('button');

btn.addEventListener('click', gameGuessTheNumber );
function gameGuessTheNumber() {
    function random(number) {
        return Math.ceil(Math.random() * number)
    };
    
    let userName = prompt("Приветствую! Назови своё имя.");
    
    while (userName == "" || userName == " " || userName == null) {
        userName = prompt("Приветствую! Назови своё имя.");
    };
    
    alert(`${userName}, я загадал число от 1 до 100. Попробуй отгадать его, используя наименьшее количество попыток.
    После каждого ответа ты увидишь "мало"/"много"/"угадал"`
    );
    
    let number = random(100);
    let myQuestion = prompt("Какое число я загадал");
    let answer = 1;
    
    while (myQuestion != number) {
        answer = answer + 1;
        if(myQuestion > number) {
            myQuestion = prompt("Много");
        }
        else if (myQuestion < number) {
            myQuestion = prompt("Мало");
        }
    };
    
    alert(`Ты угадал!!! Это число ${number}. Тебе понадобилось ${answer} попыток`);
} 