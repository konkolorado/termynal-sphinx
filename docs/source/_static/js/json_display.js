// When loaded onto a page, this will look for elements with of class json-data
// and sets their contents to the prettified JSON object defined using the
// custom attribute 'data-name'. For the display to work, both need to be
// defined.

function setContent(container) {
    var dataName = container.getAttribute("data-name");
    container.textContent = JSON.stringify(eval(dataName), undefined, 2);
}

var containers = document.getElementsByClassName("json-data")
Array.from(containers).forEach(setContent);