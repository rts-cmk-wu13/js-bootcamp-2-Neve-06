

function skjulElementerViaCssSelector(cssSelector){

    let elements = document.querySelectorAll(cssSelector);
    elements.forEach(function(elements){

        skjulElementer(elements)
    })
}

function skjulElementer (element)
{
    if (element !== null) element.style.display = "none"
}

skjulElementerViaCssSelector(".bodycopy");