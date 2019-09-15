var input = document.querySelector("#input");
var addBtn = document.querySelector("#addBtn");

var list = document.getElementById("list");




addBtn.addEventListener("click", addItem);





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


function removeItem() {

    this.parentElement.style.display = "none";



}