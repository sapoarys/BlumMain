// ==UserScript== 
// @name        blum/main
// @namespace   Violentmonkey Scripts
// @match       https://telegram.blum.codes/*
// @grant       none
// @version     1
// @description 
// ==/UserScript==

// Флаг для отслеживания статуса выполнения скрипта
let isFirstTabClicked = false;
let isSecondTabClicked = false;

// Функция ожидания
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Ждем, пока первая вкладка появится и выполняем клик
const waitForFirstTab = setInterval(async () => {
    if (isFirstTabClicked) {
        clearInterval(waitForFirstTab); // Останавливаем проверку, если клик уже выполнен
        return;
    }

    const firstTabElement = document.querySelector('.tab');
    if (firstTabElement) {
        clearInterval(waitForFirstTab); // Останавливаем проверку
        firstTabElement.click(); // Кликаем по первой вкладке
        isFirstTabClicked = true; // Устанавливаем флаг выполнения
        console.log("Первая вкладка была нажата.");
    }
}, 10000); // Проверяем каждые 10000 мс
