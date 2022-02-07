
let number = 0;
let string = 0;

function add7 () {

    number = prompt("which number should get added by 7?")
    let newNumber = parseInt(number);
    number = newNumber + 7;
    alert(number);
}

function multiply (){

    let promtNumber1 = prompt("input your first number")
    let promtNumber2 = prompt("Input your 2nd Number")
    number = promtNumber1 * promtNumber2;
    alert(number);
}

function capitalize(){

    string = prompt("input your string");
    let newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    alert(newString);
}

function lastLetter() {
    string = "asdf";
    let newString = string.slice(3);
    alert (newString);
}

function fizzBuzz (){

    let answer = parseInt(prompt("Input your number to FizzBuzz"))
    

    for (let i = 1; i <= answer; i++)
    {

        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log ("Buzz")
        }
        else {
            console.log(i);
        }
    }
    
}
fizzBuzz();
//add7();
//multiply();
//capitalize ();
//lastLetter();