function checkingEntetValue (){
    const value1 = prompt()
    if(isNaN(value1) || value1.includes(' ')){
        console.log('Некорректный ввод!')
        return
    }

    const value2 = prompt()
    if(isNaN(value2) || value2.includes(' ')){
        console.log('Некорректный ввод!')
        return
    }

    console.log(`Ответ: ${Number(value1)+Number(value2)}, ${Number(value1)/Number(value2)}`)
}

checkingEntetValue();
