let screen = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
let = screenValue = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.value;
        console.log(buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if(buttonText == "AC"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "DEL"){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText
            screen.value = screenValue;
        }
    })
    
}

