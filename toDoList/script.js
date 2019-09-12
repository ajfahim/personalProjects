var input = document.querySelector("#input");
var addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", addItem);

function addItem() {
    if (input.value !== "") {
        var node = document.createElement("li");
        var textnode = document.createTextNode(input.value);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        input.value = "";
    } else {
        alert("add some value!");
    }
}