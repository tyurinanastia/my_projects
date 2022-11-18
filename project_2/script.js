var calcButtons=document.querySelectorAll(".calc-button")
//получаем все элементы с классом calc-button

var result=document.querySelector(".calc-result")
//получаем поле вывода

function onPressButton(event) {
    
    if(event.target.innerText == "C") {

        result.innerText = ""
        return
    } 

    if(event.target.innerText == "=") {

        if(result.innerText == "") {

            return
        }
                        //он принимает строку с выражением
                        //возвращает результат выражения
        result.innerText = eval(result.innerText)
        return
    } 

    result.innerText += event.target.innerText
    //полю вывода добавляем текст кнопки
}

for(let i = 0; i < calcButtons.length; i++) {

   calcButtons[i].addEventListener("click", onPressButton)
   //кнопке из массива привязываем обработчик событий
}

