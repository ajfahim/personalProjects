var input = document.querySelector("#input");
var addBtn = document.querySelector("#addBtn");
var removeBtn = document.querySelector("#removeBtn");



addBtn.addEventListener("click", addItem);
removeBtn.addEventListener("click", function() {
    var isChecked = document.querySelectorAll(".isChecked");
    var remove = document.querySelectorAll(".remove");

    if (isChecked.Checked = true) {
        remove[0].parentNode.remove();
    }
});



function addItem() {
    if (input.value !== "") {
        var nodeLi = document.createElement("li");
        var nodeSpan = document.createElement("span");


        var textnode = document.createTextNode(input.value);
        var spanNode = document.createElement("input");

        spanNode.classList.add("isChecked")
        spanNode.setAttribute("type", "checkbox");
        nodeLi.appendChild(spanNode)
        nodeLi.appendChild(textnode);

        nodeLi.classList.add("remove");


        document.getElementById("list").appendChild(nodeSpan);
        document.getElementById("list").appendChild(nodeLi);

        input.value = "";
    } else {
        alert("add some value!");
    }
}