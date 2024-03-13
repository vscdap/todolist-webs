const addColor = document.getElementById("addColor");
const addbackcolor = document.getElementById("addbackcolor");
const addList = document.getElementById("addList");
const textContainer = document.getElementById("textontainer");
const ullist = document.getElementById("ullist");


function colorChanger () {
if (addColor.value==="rojo"){
    document.getElementById("ullist").style.color="red"}

   else if (addColor.value==="azul"){
        document.getElementById("ullist").style.color="blue"}

        else if (addColor.value==="negro"){
            document.getElementById("ullist").style.color="black"}

            else if (addColor.value==="blanco"){
                document.getElementById("ullist").style.color="white"}

                else if (addColor.value==="marron"){
                    document.getElementById("ullist").style.color="brown"}

                    else if (addColor.value==="verde"){
                        document.getElementById("ullist").style.color="green"}

    else if (addColor.value==="amarillo"){
    document.getElementById("ullist").style.color="yellow"}   
    
    else if (addColor.value==="dorado"){
        document.getElementById("ullist").style.color="gold"}

        else if (addColor.value==="gris"){
            document.getElementById("ullist").style.color="gray"}

            else if (addColor.value==="rosa"){
                document.getElementById("ullist").style.color="pink"}

                else if (addColor.value==="naranja"){
                    document.getElementById("ullist").style.color="orange"}

                    addColor.value=""
}


function bacoChangr() {
    if (addbackcolor.value==="azul"){
    document.getElementById("text-container").style.background="blue"}

    else if (addbackcolor.value==="rojo"){
        document.getElementById("text-container").style.background="red"}

        else if (addbackcolor.value==="amarillo"){
            document.getElementById("text-container").style.background="yellow"}

            else if (addbackcolor.value==="dorado"){
                document.getElementById("text-container").style.background="gold"}

                else if (addbackcolor.value==="naranja"){
                    document.getElementById("text-container").style.background="orange"}

    else if (addbackcolor.value==="gris"){
    document.getElementById("text-container").style.background="gray"}

    else if (addbackcolor.value==="rosa"){
        document.getElementById("text-container").style.background="pink"}

        else if (addbackcolor.value==="verde"){
            document.getElementById("text-container").style.background="green"}

            else if (addbackcolor.value==="negro"){
                document.getElementById("text-container").style.background="black"}

                else if (addbackcolor.value==="blaco"){
                    document.getElementById("text-container").style.background="white"}

                    addbackcolor.value=""

   
}
    
    function Btntext () {
        if (addList.value===""){alert("Escribir un text antes de hacer click")}

    else{
        let li = document.createElement("li");
        ullist.appendChild(li);
        li.innerHTML=addList.value
        
        let span = document.createElement("span");
        li.appendChild(span)
        span.innerHTML="\u00d7"
    }
    addList.value=""
    SavePro ()
    }

    ullist.addEventListener("click", function (e) {
        if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        }
      else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove ();
    }
    value=""
    SavePro ()
    }, false);

    function SavePro () { localStorage.setItem("ulli",ullist.innerHTML)}

    function ShowPro () {ullist.innerHTML=localStorage.getItem("ulli")}

    ShowPro ()
