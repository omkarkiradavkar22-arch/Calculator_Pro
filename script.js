let display= document.getElementById("display");
let historyList=document.getElementById("historyList");
function append(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function backspace(){
    display.value=display.value.slice(0,-1);
}
function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        historyList.innerHTML += `<li>${expression} = ${result}</li>`;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
function toggleMode(){
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}
document.addEventListener("keydown",function(e){
    if(!isNaN(e.key)||"+-*/.%".includes(e.key)){
        append(e.key);
    }else if(e.key==="Enter"){
        calculate();
    }else if(e.key==="Backspace"){
        backspace();
    }else if(e.key==="Escape"){
        clearDisplay();
    }
});
function clearHistory() {
    historyList.innerHTML = '';
}
function append(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    if (operators.includes(lastChar) && operators.includes(value)) {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}
