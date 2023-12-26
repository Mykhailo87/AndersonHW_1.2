function checkValueValidation(checkingValue) {
    return (isNaN(checkingValue) || checkingValue.trim() === '');
}

function checkingEnterValue() {
    const value1 = prompt();

    if (checkValueValidation(value1)) {
        return console.log('Некорректный ввод!');
    }

    const value2 = prompt()

    if (checkValueValidation(value2)) {
        return console.log('Некорректный ввод!');
    }

    console.log(`Ответ: ${Number(value1) + Number(value2)}, ${Number(value1) / Number(value2)}`);
}

checkingEnterValue();
