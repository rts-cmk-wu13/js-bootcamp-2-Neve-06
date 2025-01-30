

function skjulElementViaCssSelector(cssSelector){

    let element = document.querySelector(cssSelector);
    if (element !== null)
        if (element) element.style.display = "none"
}

skjulElementViaCssSelector(".headline");