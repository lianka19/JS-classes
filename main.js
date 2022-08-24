////////////////////////////////////TASK1//////////////////////////////////////
const $but=document.querySelector('button#butColor')

//змінює колір на зелений
const colorGreen = ()=>{
    $but.innerText = "Red";
    $but.setAttribute('style', 'color:  #f44336;  background-color: #4CAF50')
}

//змінює колір на червоний 
const colorRed = ()=>{
    $but.innerText = "Green";
    $but.setAttribute('style', 'color:  #4CAF50; background-color: #f44336')
}

//змінює колір
const colorCh = () =>{
    if (NumClick) {
        colorRed()
        NumClick = false;
    } else {
        colorGreen()
        NumClick = true
    }
}


let NumClick = false; //визначає перший чи другий клік
$but.addEventListener("click", colorCh)

////////////////////////////////////TASK2//////////////////////////////////////
const $butRes=document.querySelector('button#butResult')

const calculator = () => {
    const $spaceOfRes=document.querySelector('span#spaceForResult') //поле для результату
    
    let ValCheck = false; //перевірка валідації даних
    let num1 = Number(document.querySelector('input#num1').value);// перше число
    let num2 = Number(document.querySelector('input#num2').value);// другое число
    let act = document.querySelector('input#act').value;// дія
    let res;// для результату

    if( !isNaN(num1) && !isNaN(num2) && (act === '+' || act === '-' ||act === '*' || act === '/')) {
        ValCheck=true
    }//перевірка валідації даних

    if(ValCheck){//при коректних даних
        //
        switch(act){
            case '+':
                res=num1+num2;
                break;
            case '-':
                res=num1-num2;
                break;
            case '*':
                res=num1*num2;
                break;
            case '/':
                res=num1/num2;
                break;
        }

        //перевірка на існування елементу
        if($spaceOfRes){
            $spaceOfRes.textContent=res;
        }

    }else { //при некоректних даних
        //перевірка на існування елементу
        if($spaceOfRes){
            $spaceOfRes.innerText='Uncorrect data';
        }
    }
}

$butRes.addEventListener("click", calculator)



