// Устаревший стиль JavaScript для соответствия духу 2010 года
function showWelcomeMessage() {
    alert("ДОБРО ПОЖАЛОВАТЬ НА ОФИЦИАЛЬНЫЙ САЙТ ПРОЦЕССОРОВ АЛТОН!\n\nСДЕЛАНО В РОССИИ ДЛЯ РОССИИ!\n\nСайт использует новейшие технологии. Рекомендуем Internet Explorer 6.0.");
}

// Добавляем приветственное окно
setTimeout(showWelcomeMessage, 2000);

// Счетчик посетителей (фиктивный)
function updateCounter() {
    var counter = document.querySelector('.hit-counter');
    var currentCount = parseInt(counter.innerText.replace(/[^\d]/g, ''));
    counter.innerText = "ПОСЕТИТЕЛЕЙ: " + (currentCount + Math.floor(Math.random() * 10));
    setTimeout(updateCounter, 60000); // Обновляем каждую минуту
}

// Запускаем счетчик
setTimeout(updateCounter, 10000);

// Функция для обработки формы отзыва
function submitForm() {
    var buttons = document.querySelectorAll('.button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].value === "ОТПРАВИТЬ") {
            buttons[i].onclick = function() {
                alert("СПАСИБО ЗА ВАШ ОТЗЫВ!\n\nОн будет опубликован после модерации.");
                var form = this.parentNode;
                var inputs = form.querySelectorAll('input[type="text"], textarea');
                for (var j = 0; j < inputs.length; j++) {
                    inputs[j].value = "";
                }
            }
        }
    }
}

// Инициализация обработчиков
window.onload = function() {
    submitForm();
    
    // Предупреждение при попытке покинуть страницу
    window.onbeforeunload = function() {
        return "Вы уверены, что хотите покинуть официальный сайт АЛТОН?";
    };
    
    // Перехват правого клика
    document.oncontextmenu = function() {
        alert("КОПИРОВАНИЕ ЗАПРЕЩЕНО!\nВСЕ МАТЕРИАЛЫ ЗАЩИЩЕНЫ ЗАКОНОМ РФ ОБ АВТОРСКОМ ПРАВЕ!");
        return false;
    };
};

// Мигающий текст для старых браузеров, не поддерживающих CSS-анимации
if (!document.querySelector) {
    setInterval(function() {
        var blinkElements = document.getElementsByClassName('blink');
        for (var i = 0; i < blinkElements.length; i++) {
            blinkElements[i].style.visibility = (blinkElements[i].style.visibility === 'hidden') ? 'visible' : 'hidden';
        }
    }, 500);
}

// Функция для добавления падающего снега (активируется зимой)
function checkForWinter() {
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month === 12 || month === 1 || month === 2) {
        createSnowflakes();
    }
}

function createSnowflakes() {
    var snowContainer = document.createElement('div');
    snowContainer.id = "snow-container";
    snowContainer.style.position = "fixed";
    snowContainer.style.top = "0";
    snowContainer.style.left = "0";
    snowContainer.style.width = "100%";
    snowContainer.style.height = "100%";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.zIndex = "1000";
    document.body.appendChild(snowContainer);
    
    for (var i = 0; i < 50; i++) {
        createSnowflake(snowContainer);
    }
}

function createSnowflake(container) {
    var snowflake = document.createElement('div');
    snowflake.innerHTML = "*";
    snowflake.style.position = "absolute";
    snowflake.style.color = "white";
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
    snowflake.style.top = "-20px";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.opacity = Math.random();
    container.appendChild(snowflake);
    
    var speed = Math.random() * 2 + 1;
    var posY = -20;
    var posX = parseFloat(snowflake.style.left);
    var interval = setInterval(function() {
        posY += speed;
        posX += Math.sin(posY / 30) * 2;
        snowflake.style.top = posY + "px";
        snowflake.style.left = posX + "px";
        
        if (posY > window.innerHeight) {
            clearInterval(interval);
            container.removeChild(snowflake);
            createSnowflake(container);
        }
    }, 50);
}

// Проверяем, не зима ли сейчас
checkForWinter();
