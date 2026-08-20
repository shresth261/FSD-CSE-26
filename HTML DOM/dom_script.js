function addParagraph() {
    const para = document.createElement("p");
    para.innerText= "This is a new paragraph added to the document.";
    para.style.color = "red";
    const parent = document.getElementById("para");
    parent.appendChild(para);
}

function removeParagraph() {
    const container = document.getElementById("para");
    if (container.lastChild) {
        container.lastChild.remove();
    }
}
function removeAllParagraph() {
    const parent = document.getElementById("para");
    const child = document.querySelectorAll("p");
    for(i of child){
        parent.removeChild(i);
    }
}
