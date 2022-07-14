const button = document.querySelector('.sign-up');
const blur = document.querySelector('.blur');
const labelAnimation = document.querySelector('#nameLabel');
const inputAnimation = document.querySelector('.input');
const phoneAnimation = document.querySelector('.phoneInput');
const phoneLabelAnimation = document.querySelector('.phoneLabel');
const orEmailButton = document.querySelector('.orEmail');
const close = document.querySelector('.x-button');
var isEmpty = true;

if (button) {
    button.addEventListener('click', () => {
        openForm();
        blur.style.opacity = '90%';
        blockBackground();
    });
}

function blockBackground() {
    blur.classList.add("blocked");
}

close.addEventListener('click', () => {
    document.getElementById("mainArea").style.display = "none";
    blur.classList.remove("blocked");
    blur.style.opacity = '100%';
});

labelAnimation.addEventListener('click', () => {
    nameLabelTransform();
    inputAnimation.focus();
    counter();
    counterChange();
});

phoneLabelAnimation.addEventListener('click', () => {
    phoneLabelTransform();
    phoneAnimation.focus();
    counter();
    counterChange();
});

function defaultBorder() {
    if (inputAnimation.value.length != 0) {
        document.querySelector(".input").style = "border: default;";
        document.getElementById("nameLabel").style = "transform: scale(0.7); padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
        document.getElementById("counterNum").style = "display: none;";
        document.getElementById("counter").style = "display: none;";
    }else if (document.getElementById("errorMsg").style.display != "block") {
        removeDecor();
    }
}

function phoneDefaultBorder() {
    if (phoneAnimation.value.length != 0) {
        document.querySelector(".phoneInput").style = "border: default;";
        document.querySelector(".phoneLabel").style = "transform: scale(0.7); padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
    }else {
        removePhoneDecor();
    }
}

function focusLabel() {
    if (document.getElementById("errorMsg").style.display === "block") {
        document.getElementById("nameLabel").style = "transform: scale(0.7); color: red; padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
        counter();
        counterChange();
    }else if (inputAnimation.value != 0) {
        counter();
        counterChange();
    }else {
        document.getElementById("nameLabel").style = "transform: scale(0.7); color: rgb(29, 155, 240); padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
    }
}

function focusPhoneLabel() {
    phoneLabelAnimation.style = "transform: scale(0.7); color: rgb(29, 155, 240); padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
}

inputAnimation.addEventListener('click', () => {
    nameLabelTransform();
    counter();
    counterChange();
}); 

orEmailButton.addEventListener('click', () => {
    if (phoneLabelAnimation.innerHTML === 'Phone') { 
        phoneLabelAnimation.innerHTML = 'Email';
        orEmailButton.innerHTML = 'Use phone instead';
    }else if (phoneLabelAnimation.innerHTML === 'Email') {
        phoneLabelAnimation.innerHTML = 'Phone';
        orEmailButton.innerHTML = 'Use email instead';
    }
});

phoneAnimation.addEventListener('click', () => {
    phoneLabelTransform();
    counter();
    counterChange();
}); 

function focusOut() {
    if (phoneAnimation.value.length != 0) {
        document.querySelector(".input").style = "border: default;";
        document.getElementById("nameLabel").style = "transform: scale(0.7); padding: 0px; transition-duration: 0.1s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
    }
} 

document.addEventListener('click', function(event) {
    var isClickInsideElement = inputAnimation.contains(event.target);
    var isClickInsideElementLabel = labelAnimation.contains(event.target);
    var isClickInsideElementPhone = phoneAnimation.contains(event.target);
    var isClickInsideElementPhoneLabel = phoneLabelAnimation.contains(event.target);
    
    if (!(isClickInsideElement) && !(isClickInsideElementLabel)) {
        if (inputAnimation.value === ''){
            removeDecor();
        }else if (inputAnimation.value != '') {
            document.getElementById("nameLabel").style = "transform: scale(0.7); padding: 0; transition-duration: .1s; margin-top: -55px; margin-left: -8px; font-weight: 600;"
            document.getElementById("counterNum").style = "display: none;";
            document.getElementById("counter").style = "display: none;";
        }
    }
    
    if (!(isClickInsideElementPhone) && !(isClickInsideElementPhoneLabel)) {
        if (phoneAnimation.value === ''){
            removePhoneDecor();
        }else if (phoneAnimation.value != '') {
            phoneLabelAnimation.style = "transform: scale(0.7); padding: 0; transition-duration: .1s; margin-top: -55px; margin-left: -8px; font-weight: 600;"
            document.getElementById("counterNum").style = "display: none;";
            document.getElementById("counter").style = "display: none;";
        }
    }
});

function nameLabelTransform() {
    document.getElementById("nameLabel").style = "transform: scale(0.7); padding: 0; color: rgb(29, 155, 240); transition-duration: .2s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
}

function phoneLabelTransform() {
    document.querySelector(".phoneLabel").style = "transform: scale(0.7); padding: 0; color: rgb(29, 155, 240); transition-duration: .2s; margin-top: -55px; margin-left: -8px; font-weight: 600;";
}

function counter() {
    document.getElementById("counter").style = "display: block;";
}

function counterChange() {
    document.getElementById("counterNum").innerHTML = `${inputAnimation.value.length}`;
    if (inputAnimation.value.length > 9) {
        document.getElementById("counterNum").style = "margin-left: -52px;";
    }
    else if (!inputAnimation.value.length < 10) {
        document.getElementById("counterNum").style = "margin-left: -45px;";
    }
}

function checkEmpty() {
    if (inputAnimation.value.length === 0) {
        inputAnimation.style.outline = "none";
        inputAnimation.style.border = "2px solid red";
        labelAnimation.style.color = "red";
        document.getElementById("errorMsg").style.display = "block";
        document.querySelector(".nextBar").style = "margin-top: 40.1px;";
    }else {
        inputAnimation.style = "border: 2px solid rgb(29, 155, 240)";
        labelAnimation.style.color = "rgb(29, 155, 240)";
        document.getElementById("errorMsg").style.display = "none";
        document.querySelector(".nextBar").style = "margin-top: 59.6px;";
    }
}

function enterValue() {
    document.querySelector(".year").options[document.querySelector(".year").options.selectedIndex].selected = true;
    console.log("DONE");
}

function removeDecor() {
    document.getElementById("nameLabel").style = "color: gray; font-size: large; margin-top: -43px; margin-left: 10px; position: absolute; width: 100px; height: 20px; border: none; transition-duration: .2s;";
    document.getElementById("counter").style = "display: none;";
    document.getElementById("counterNum").style = "display: none;";
}

function removePhoneDecor() {
    phoneLabelAnimation.style = "color: gray; font-size: large; margin-top: -43px; margin-left: 10px; position: absolute; width: 100px; height: 20px; border: none; transition-duration: .2s;";
    document.getElementById("counter").style = "display: none;";
    document.getElementById("counterNum").style = "display: none;";
}

function openForm() {
    document.getElementById("mainArea").style.display = "block";
}

var first = false;
var second = false;
var third = false;
var fourth = false;
var fifth = false;

function nameSet() {
    if (inputAnimation.value.length != 0) {
        first = true;
    }
}

function phoneSet() {
    if (phoneAnimation.value.length != 0) {
        second = true;
    }
}

function monthSet() {
    if (document.querySelector(".month").options[document.querySelector(".month").options.selectedIndex].selected === true) {
        third = true;
    }
}

function daySet() {
    if (document.querySelector(".day").options[document.querySelector(".day").options.selectedIndex].selected === true) {
        fourth = true;
    }
}

function yearSet() {
    if (document.querySelector(".year").options[document.querySelector(".year").options.selectedIndex].selected === true) {
        fifth = true;
    }
}

function enableNextButton() {
    if (first === true && second === true && third === true && fourth === true && fifth === true) {
        document.querySelector(".nextButton").disabled = false;
    }
}
