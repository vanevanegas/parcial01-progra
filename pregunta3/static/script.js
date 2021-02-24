function checkAdd() {
    //CHECK ADD
    var name = document.getElementById("name").value;
    var side = document.getElementById("side").value;
    var cantidad = document.getElementById("cantidad").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));

    if (name !== null && name !== "") {
        if (side !== null && side !== "") {
            if (cantidad !== null && cantidad !== "") {


            } else {
                alert("debe de ingresar una cantidad");
            }
        } else {
            alert("debe de escribir su orientación");
        }
    } else {
        alert("debe de escribir su nombre);
    }
}
