//sanity
console.log('cw.js loaded');

function main() {
    // ex1();
    // ex2();
    ex3();
    //challenge();
    //superMarioChallenge();
}

function ex1() {
    //Reference the elements of the checkbox and the label
    let checkLabel = document.querySelector('#noCheck');
    let check = document.querySelector('#check');
    //Create a function to change the label text if the checkbox is checked
    doNotClick = (event) => {
        //Changes the label if it is checked
        if (check.checked === true){
        checkLabel.innerHTML = 'I TOLD YOU NOT TO CLICK THIS!!!';
        //Reverts label to previous text
        } else {
            checkLabel.innerHTML = "DON'T CLICK THIS CHECKBOX!";
        }
    }
    //Add the above function to the checkbox as an event
    check.addEventListener('click', doNotClick);
    
}

function ex2() {
    //Reference the id of the needed elements (textarea,h2,button)
    let textBox = document.querySelector('#textBox');
    let startTxt = document.querySelector('#startTxt');
    let allowBtn = document.querySelector('#allowBtn');

    //Create a function for the allow button
    allowFunct = event => {
        //display the hidden text (h2) and hide it again if the button if clicked again
        if (startTxt.hasAttribute('hidden')===true){
            startTxt.removeAttribute('hidden');
        }
        else {
            startTxt.setAttribute('hidden',true);
        }
        //change the button text to 'Stop Typing' and back again if clicked again
        if (allowBtn.innerHTML === 'Allow Typing'){
            allowBtn.innerHTML = 'Stop Typing';
        }
        else {
            allowBtn.innerHTML = 'Allow Typing';
        }
        //enable the textarea so you can type in it and disable it if the button is clicked again
        if (textBox.hasAttribute('disabled') === true){
            textBox.removeAttribute('disabled');
        }
        else {
            textBox.setAttribute('disabled',true);
        }
        event.preventDefault();
    }



    //add the above function to the allow button as an event
    allowBtn.addEventListener('click', allowFunct);
}

function ex3() {
    //reference the elements needed by id
    let startCount = document.querySelector('#startCount');
    let countDown = document.querySelector('#countDown');

    //create a function to start the countdown timer from 10 to 'liftoff'
    liftOff = event => {
       let timerId = setInterval(ev =>{
           let count = 10;
           while (count >= 0){
           countDown.innerHTML = `${count}`;
           count -= 1;
           if (count === 0){
            clearInterval(timerId);
        }
        }
        
       },1000);
        

    }

    //add the above function to the button as an event
    startCount.addEventListener('click',liftOff);

}



main();