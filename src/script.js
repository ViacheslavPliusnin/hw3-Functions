//Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
function countLetter(charNeeded = "а", stringRepeat = "Урбанізація") {
    let charCounterRepeat = 0;
    for (let i = 0; i < stringRepeat.length; i++) {
        if(charNeeded === stringRepeat.charAt(i).toLowerCase(i)) {
            charCounterRepeat++;
        }
    }
    return charCounterRepeat;
}

//Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function formatName(stringName = "viAchesLav") {
    const stringLowerCase = stringName.toLowerCase();
    const stringNewName = stringLowerCase.charAt(0).toUpperCase() + stringLowerCase.slice(1);
    return stringNewName;
}

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function convertCurrency(stringCurrency = "100$") {
    const currencyUsd = 27.85;
    const caseСurrency = stringCurrency.toLowerCase();
    if (caseСurrency.includes("uah")) {
        return (parseInt(stringCurrency) / currencyUsd).toFixed(2) + "$";
    } else if (caseСurrency.includes("$")) {
        return (parseInt(stringCurrency) * currencyUsd).toFixed(2) + "грн";
    } else {
        return "Помилка, необхідно ввести коректну валюту: $ або UAH";
    }
}

console.log(`Функція №1: ${countLetter()}
Функція №2: ${formatName()}
Функція №2: ${convertCurrency()}`)