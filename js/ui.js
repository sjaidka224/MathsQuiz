/*---------------------------------------------ui.js--------------------------------------------------*/
/*----consists of a common function being used throughout the application to create HTML elements-----*/

/*
 1. createElement is a global function which can be called from throughout the application.
 2. Purpose of this function is to create elements through js and append in document's body.
 3. typeOfHtmlTag refers to type of HTML tag we want to create, is a mandatory parameter.
 4. textString refers to text we want to show in that tag, can be left empty.
 5. idOfElement, sets id of the HTML tag, can be left empty.
 6. classOfElement, sets class of the HTML tag, can be left empty.
 7. Usage Example:
 8. Function Call - createElement("div","I am an Example Div","example-div","")
 9. Data returned - <div id="example-div">I am an Example Div</div>
*/

window.createElement = function (typeOfHtmlTag, textString, idOfElement, classOfElement) {

    var element = document.createElement(typeOfHtmlTag);
    var textNode = document.createTextNode(textString);
    element.appendChild(textNode);
    if (idOfElement != "" || idOfElement > 0) {
        element.setAttribute("id", idOfElement);
    }
    if (classOfElement != "" || classOfElement > 0) {
        element.setAttribute("class", classOfElement);
    }
    if (typeOfHtmlTag == "button") {
        element.onclick = playButtonAudio;
    }
    document.body.appendChild(element);
    return element;

}
