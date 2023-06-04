const changeDiv = (opc) => {
    $('.div').css('display', 'none')
    $(opc).css('display', 'block');
}

const verificarClient = () => {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            for(let item of datos){
                if(item.email==$("#email1").val() && item.password==$("#pass1").val()){
                    console.log("1")
                    window.location.href="index.html"
                }else{
                    alert("Usuario y/o contraseña incorrectos")
                }
                break;
            }
        }
    })
}

const registerClient = (opc) =>{
    myData={
        email:$("#email").val(),
        password:$("#pass").val(),
        name:$("#name").val(),
        age:$("#age").val(),
    };
    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type:"POST",
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            alert("Registro exitoso")
            window.location.href="index.html"
        }
    });
}