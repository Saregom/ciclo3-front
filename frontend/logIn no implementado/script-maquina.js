//---------------MENU---------------
function clic(opc, opc2){
    $('.div').css('display', 'none')
    $(opc).css('display', 'block');

    $('.i').css('background', 'transparent')
    $(opc2).css('background', '#474747');
}

//----------------AJAX--------------
const getOrtopedic = () => {
    $.ajax({
        url: "http://144.22.242.102/api/Ortopedic/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyOrt").empty();
            for(let item of datos){
                let idCa=null, idMe=[], idRe=[];
                for(let i in item.category){
                    idCa=item.category[i]; break;
                }
                for(let i of item.messages){
                    idMe.push(i.idMessage)
                }
                for(let i of item.reservations){
                    idRe.push(i.idReservation)
                }
                if(idMe.length==0){
                    idMe.push("null")
                }
                if(idRe.length==0){
                    idRe.push("null")
                }
                $('#tbodyOrt').append('<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.brand + '</td><td>' + item.year + '</td><td>' + item.description + '</td><td>' + idCa + '</td><td>' + idMe + '</td><td>' + idRe + '</td><td><input type="radio" name="ortopedic" value="' + item.id + '"></td></tr>');
            }
        }
    })
}
const getCategory = () => {
    $.ajax({
        url:"http://144.22.242.102/api/Category/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyCat").empty();
            for(let item of datos){
                let idOr=[];
                for(let i of item.ortopedics){
                    idOr.push(i.id)
                }
                if(idOr.length==0){
                    idOr.push("null")
                }
                $('#tbodyCat').append('<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.description + '</td><td>' + idOr + '</td><td><input type="radio" name="category" value="' + item.id + '"></td></tr>');
            }
        }
    })
}
const getClient = () => {
    $.ajax({
        url: "http://144.22.242.102/api/Client/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyClient").empty();
            console.log(datos)
            for(let item of datos){
                console.log(item)
                let idMe=[], idRe=[];
                for(let i of item.messages){
                    idMe.push(i.idMessage)
                }
                for(let i of item.reservations){
                    idRe.push(i.idReservation)
                }
                if(idMe.length==0){
                    idMe.push("null")
                }
                if(idRe.length==0){
                    idRe.push("null")
                }
                $('#tbodyClient').append('<tr><td>' + item.idClient + '</td><td>' + item.email + '</td><td>' + item.password + '</td><td>' + item.name + '</td><td>' + item.age + '</td><td>' + idMe + '</td><td>' + idRe + '</td><td><input type="radio" name="client" value="' + item.idClient + '"></td></tr>');
            }
        }
    })
}
const getMessage = () => {
    $.ajax({
        url:"http://144.22.242.102/api/Message/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyMess").empty();
            for(let item of datos){
                let idOr=null, idCl=null;
                for(let i in item.ortopedic){
                    idOr=item.ortopedic[i]; break;
                }
                for(let i in item.client){
                    idCl=item.client[i]; break;
                }
                $('#tbodyMess').append('<tr><td>' + item.idMessage + '</td><td>' + item.messageText + '</td><td>' + idOr + '</td><td>' + idCl + '</td><td><input type="radio" name="message" value="' + item.idMessage + '"></td></tr>');
            }
        }
    })
}
const getReservation = () => {
    $.ajax({
        url: "http://144.22.242.102/api/Reservation/all",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyRes").empty();
            for(let item of datos){
                let idOr=null, idCl=null, idSc=null;
                for(let i in item.ortopedic){
                    idOr=item.ortopedic[i]; break;
                }
                for(let i in item.client){
                    idCl=item.client[i]; break;
                }
                for(let i in item.score){
                    idSc=item.score[i]; break;
                }
                $('#tbodyRes').append('<tr><td>' + item.idReservation + '</td><td>' + item.startDate + '</td><td>' + item.devolutionDate + '</td><td>' + item.status + '</td><td>' + idOr + '</td><td>' + idCl + '</td><td>' + idSc +  '</td><td><input type="radio" name="reservation" value="' + item.idReservation + '"></td></tr>');
                
            }
        }
    })
}
const getReportDates = () => {
    let dateOne = $("#dateOne").val();
    let dateTwo = $("#dateTwo").val();
    $.ajax({
        url:"http://144.22.242.102/api/Reservation/report-dates/"+dateOne+"/"+dateTwo,
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyRepDate").empty();
            for(let item of datos){
                let idOr=null, idCl=null, idSc=null;
                for(let i in item.ortopedic){
                    idOr=item.ortopedic[i]; break;
                }
                for(let i in item.client){
                    idCl=item.client[i]; break;
                }
                for(let i in item.score){
                    idSc=item.score[i]; break;
                }
                $('#tbodyRepDate').append('<tr><td>' + item.idReservation + '</td><td>' + item.startDate + '</td><td>' + item.devolutionDate + '</td><td>' + item.status + '</td><td>' + idOr + '</td><td>' + idCl + '</td><td>' + idSc + '</td></tr>');
            }
        }
    })
}
const getReports = () => {
    $.ajax({
        url:"http://144.22.242.102/api/Reservation/report-clients",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyRepClient").empty();
            for(let item of datos){
                let idMe=[], idRe=[];
                for(let i of item.client.messages){
                    idMe.push(i.idMessage)
                }
                for(let i of item.client.reservations){
                    idRe.push(i.idReservation)
                }
                if(idMe.length==0){
                    idMe.push("null")
                }
                if(idRe.length==0){
                    idRe.push("null")
                }
                $('#tbodyRepClient').append('<tr><td>' + item.total + '</td><td>' + item.client.idClient + '</td><td>' + item.client.email + '</td><td>' + item.client.password + '</td><td>' + item.client.name + '</td><td>' + item.client.age + '</td><td>' + idMe + '</td><td>' + idRe + '</td></tr>');
                
            }
        }
    })
    $.ajax({
        url:"http://144.22.242.102/api/Reservation/report-status",
        method: "GET",
        dataType: "json",
        success: function (datos) {
            $("#tbodyRepStatus").empty();
            $('#tbodyRepStatus').append('<tr><td>' + datos.completed + '</td><td>' + datos.cancelled + '</td></tr>');
        }
    })
}


function vacios(myData){
    for(const dato in myData){
        if(myData[dato]==""){
            myData[dato]=null
        }
    }
}
var myData, id, url, alerta;
const PostPutDelOrtopedic = (opc) =>{
    myData={
        id:$("#idOrt").val(),
        name:$("#nameOrt").val(),
        brand:$("#brandOrt").val(),
        year:$("#yearOrt").val(),
        description:$("#descripOrt").val()
    };
    myData2={
        category:{id:$("#idCatOrt").val()}
    };
    if(myData2.category.id!=""){
        myData = Object.assign(myData,myData2)
    }
    vacios(myData)
    id = $('input:radio[name=ortopedic]:checked').val()
    switch(opc){
        case "POST":
            url="http://144.22.242.102/api/Ortopedic/save"
            alerta="Datos Guardados!"; break;
        case "PUT":
            url="http://144.22.242.102/api/Ortopedic/update"
            alerta="Datos Actualizados!"; break;
        case "DELETE":
            url="http://144.22.242.102/api/Ortopedic/"+id
            alerta="Datos Borrados!"; break;
    }
    $.ajax({
        url: url,
        type:opc,
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            $(".inp").val("")
            getOrtopedic();
            alert(alerta)
        }
    });
}
const PostPutDelCategory = (opc) =>{
    let myData={
        id:$("#idCat").val(),
        name:$("#nameCat").val(),
        description:$("#descripCat").val()
    };
    vacios(myData)
    id = $('input:radio[name=category]:checked').val()
    switch(opc){
        case "POST":
            url="http://144.22.242.102/api/Category/save"
            alerta="Datos Guardados!"; break;
        case "PUT":
            url="http://144.22.242.102/api/Category/update"
            alerta="Datos Actualizados!"; break;
        case "DELETE":
            url="http://144.22.242.102/api/Category/"+id
            alerta="Datos Borrados!"; break;
    }
    $.ajax({
        url: url,
        type:opc,
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            $(".inp").val("")
            getCategory();
            alert(alerta)
        }
    });
}
const PostPutDelClient = (opc) =>{
    myData={
        idClient:$("#idCli").val(),
        email:$("#emailCli").val(),
        password:$("#passCli").val(),
        name:$("#nameCli").val(),
        age:$("#ageCli").val(),
    };
    vacios(myData)
    id = $('input:radio[name=client]:checked').val()
    switch(opc){
        case "POST":
            url="http://144.22.242.102/api/Client/save"
            alerta="Datos Guardados!"; break;
        case "PUT":
            url="http://144.22.242.102/api/Client/update"
            alerta="Datos Actualizados!"; break;
        case "DELETE":
            url="http://144.22.242.102/api/Client/"+id
            alerta="Datos Borrados!"; break;
    }
    $.ajax({
        url: url,
        type:opc,
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            $(".inp").val("")
            getClient();
            alert(alerta)
        }
    });
}
const PostPutDelMessage = (opc) =>{
    myData={
        idMessage:$("#idMess").val(),
        messageText:$("#messageMess").val()
    };
    myData2={
        ortopedic:{id:$("#idOrtMess").val()}
    };
    myData3={
        client:{idClient:$("#idCliMess").val()}
    };
    if(myData2.ortopedic.id!=""){
        myData = Object.assign(myData,myData2)
    }
    if(myData3.client.idClient!=""){
        myData = Object.assign(myData,myData3)
    }
    vacios(myData)
    id = $('input:radio[name=message]:checked').val()
    switch(opc){
        case "POST":
            url="http://144.22.242.102/api/Message/save"
            alerta="Datos Guardados!"; break;
        case "PUT":
            url="http://144.22.242.102/api/Message/update"
            alerta="Datos Actualizados!"; break;
        case "DELETE":
            url="http://144.22.242.102/api/Message/"+id
            alerta="Datos Borrados!"; break;
    }
    $.ajax({
        url: url,
        type:opc,
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            $(".inp").val("")
            getMessage();
            alert(alerta)
        }
    });
}
const PostPutDelReservation = (opc) =>{
    myData={
        idReservation:$("#idRes").val(),
        startDate:$("#startRes").val(),
        devolutionDate:$("#devoRes").val(),
        status:$("#statusRes").val()
    };
    myData2={
        ortopedic:{id:$("#idOrtRes").val()}
    };
    myData3={
        client:{idClient:$("#idCliRes").val()}
    };
    if(myData2.ortopedic.id!=""){
        myData = Object.assign(myData,myData2)
    }
    if(myData3.client.idClient!=""){
        myData = Object.assign(myData,myData3)
    }
    vacios(myData)
    id = $('input:radio[name=reservation]:checked').val()
    switch(opc){
        case "POST":
            url="http://144.22.242.102/api/Reservation/save"
            alerta="Datos Guardados!"; break;
        case "PUT":
            url="http://144.22.242.102/api/Reservation/update"
            alerta="Datos Actualizados!"; break;
        case "DELETE":
            url="http://144.22.242.102/api/Reservation/"+id
            alerta="Datos Borrados!"; break;
    }
    $.ajax({
        url: url,
        type:opc,
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            $(".inp").val("")
            getReservation();
            alert(alerta)
        }
    });
}