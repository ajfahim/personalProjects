var input = document.querySelector("#input");
var addBtn = document.querySelector("#addBtn");

var list = document.getElementById("list");





addBtn.addEventListener("click", addItem);
input.addEventListener('keypress', function(e) {
    var key = e.keyCode;
    if (key === 13) { // 13 is enter
        addItem();
    }
});






function addItem() {
    if (input.value !== "") {
        var nodeLi = document.createElement("li");



        var textnode = document.createTextNode(input.value);


        var button = document.createElement("input");
        button.value = "remove";
        button.setAttribute("type", "button");


        button.classList.add("removeBtn");
        button.addEventListener("click", removeItem);




        nodeLi.appendChild(textnode);
        nodeLi.appendChild(button);

        nodeLi.classList.add("remove");



        list.appendChild(nodeLi);

        input.value = "";


    } else {
        alert("add some value!");
    }
}


var crossOut = document.querySelector('ul');
crossOut.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('crossOut');
    }
}, false);




function removeItem() {
    this.parentElement.style.display = "none";
}