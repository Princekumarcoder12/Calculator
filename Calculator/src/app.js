let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.onclick = ()=>{
        if(button.innerHTML == 'C'){
            setTimeout(() => {
                input.value = '';
            }, 1);
        }else if(button.innerHTML == '='){
            input.value += '';
            try{
                let string = eval(input.value);
                input.value = string;
            }
            catch{
                input.value = 'Error'
                setTimeout(() => {
                    input.value = '';
                }, 1500);
            }
        }
        input.value += button.innerHTML;
    }
})