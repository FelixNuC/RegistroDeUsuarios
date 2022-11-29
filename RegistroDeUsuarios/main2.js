//************VARIABLES************/
matrizusuarios = [
    {'nif':'12345678Q',
    'apellido1':'Predefinido',
    'apellido2':'Predefinido1',
    'nombre':'Predefinido',
    'departamento':'1',
    'telefono':'000000000',
    'mail':'mailpredefinido@predefinido.com',
    'antigudad':'1'},
    {'nif':'12345673Q',
    'apellido1':'Predefinido',
    'apellido2':'Predefinido2',
    'nombre':'Predefinido2',
    'departamento':'1',
    'telefono':'000000000',
    'mail':'mailpredefiiinido@predefinido.com',
    'antigudad':'1'}
];
var nif_in;
var apellido1_in;
var apellido2_in;
var nombre_in;
var departamento_in;
var telefono_in;
var mail_in;
var antiguedad_in;

var patername = /^[A-Z][a-z]{1,25}$/;
var paternnif = /^[0-9]{8}[A-Z]$/;
var paterntelefono = /^[9|6|7][0-9]{8}$/;
var paternmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

var encontrado;
var consulta;
//************FUNCIONES************/
function recogerdatos() {
    nif_in = document.getElementById('nif').value;
    nombre_in = document.getElementById('nombre').value;
    apellido1_in = document.getElementById('apellido1').value;
    apellido2_in = document.getElementById('apellido2').value;
    departamento_in = document.getElementById('departamento').value;
    antiguedad_in = document.getElementById('antiguedad').value;
    telefono_in = document.getElementById('telefono').value;
    mail_in = document.getElementById('mail').value;
    comprobardatos();
}
function ver() {
    consulta = document.getElementById('consultaver').value;
    let tabla ='<table border="1" border-style: "double" color="white" class="tabla">'
+'<tr style="height:60px;">'
+'<th scope ="col" style="width:8%"; height:150%;">NIF</th>'
+'<th scope ="col" style="width:8%"; height:150%;">NOMBRE</th>'
+'<th scope ="col" style="width:8%"; height:150%;">APE 1</th>'
+'<th scope ="col" style="width:8%"; height:150%;">APE 2</th>'
+'<th scope ="col" style="width:8%"; height:150%;">TLFN</th>'
+'<th scope ="col" style="width:8%"; height:150%;">EMAIL</th>'
+'<th scope ="col" style="width:8%"; height:150%;">DEPARTAMENTO</th>'
+'<th scope ="col" style="width:8%"; height:150%;">ANTIGUEDAD</th>'
+'</tr>';
    for (let i = 0; i < matrizusuarios.length; i++) {
        if (consulta==matrizusuarios[i].apellido1) {
            tabla +='<tr>'
            +'<td>'+matrizusuarios[i].nif + '</td>'
            +'<td>'+matrizusuarios[i].nombre + '</td>'
            +'<td>'+matrizusuarios[i].apellido1 + '</td>'
            +'<td>'+matrizusuarios[i].apellido2 + '</td>'
            +'<td>'+matrizusuarios[i].telefono + '</td>'
            +'<td>'+matrizusuarios[i].mail + '</td>'
            +'<td>'+matrizusuarios[i].departamento + '</td>'
            +'<td>'+matrizusuarios[i].antigudad + '</td>' 
            +'</tr>';
            document.getElementById("mostrarconsulta").innerHTML=tabla;
        }  
    }
    for (let i = 0; i < matrizusuarios.length; i++) {
        if (consulta==matrizusuarios[i].nif) {
            tabla +='<tr>'
            +'<td>'+matrizusuarios[i].nif + '</td>'
            +'<td>'+matrizusuarios[i].nombre + '</td>'
            +'<td>'+matrizusuarios[i].apellido1 + '</td>'
            +'<td>'+matrizusuarios[i].apellido2 + '</td>'
            +'<td>'+matrizusuarios[i].telefono + '</td>'
            +'<td>'+matrizusuarios[i].mail + '</td>'
            +'<td>'+matrizusuarios[i].departamento + '</td>'
            +'<td>'+matrizusuarios[i].antigudad + '</td>' 
            +'</tr>';
            document.getElementById("mostrarconsulta").innerHTML=tabla;
            i = matrizusuarios.length;
        }   
    }
}
function comprobardatos() {
    var usuario=new Object();
    encontrado=false;
    for (var index = 0; index < matrizusuarios.length; index++) {
        if (nif_in == matrizusuarios[index].nif) {
            alert("usuario ya registrado");
            encontrado=true;
        }
    }
    alert(encontrado);
    if (!encontrado) {
        if (paternnif.test(nif_in)) {
            if (patername.test(nombre_in)) {
                if (patername.test(apellido1_in)) {
                    if (patername.test(apellido2_in)) {
                        if (paterntelefono.test(telefono_in)) {
                            usuario.nif=nif_in;
                            usuario.nombre=nombre_in;
                            usuario.apellido1=apellido1_in;
                            usuario.apellido2=apellido2_in;
                            usuario.telefono=telefono_in;
                            usuario.departamento=departamento_in;
                            usuario.antigudad=antiguedad_in;
                            usuario.mail=mail_in;
                            usuario.enalta=true;
                            matrizusuarios.push(usuario);
                            alert("Usuario dado de alta correctamente");

                            nif_in = document.getElementById('nif').value="";
                            nombre_in = document.getElementById('nombre').value="";
                            apellido1_in = document.getElementById('apellido1').value="";
                            apellido2_in = document.getElementById('apellido2').value="";
                            departamento_in = document.getElementById('departamento').value="";
                            antiguedad_in = document.getElementById('antiguedad').value="";
                            telefono_in = document.getElementById('telefono').value="";
                            mail_in = document.getElementById('mail').value="";
                            encontrado=true; 
                        } else {
                            alert('telefono incorrecto');
                            document.getElementById('telefono').value="";
                            document.getElementById('telefono').focus;  
                        }
                    }else{
                        alert('apellido2 incorrecto');
                        document.getElementById('apellido2').value="";
                        document.getElementById('apellido2').focus;
                    }
                }else{
                    alert('apellido1 incorrecto');
                    document.getElementById('apellido1').value="";
                    document.getElementById('apellido1').focus;
                }
            }else{
                alert('nombre incorrecto');
                document.getElementById('nombre').value="";
                document.getElementById('nombre').focus;
            }
            }else{
            alert('nif incorrecto')
            document.getElementById('nif').value="";
            document.getElementById('nif').focus;
             }
    }else{
    alert("El usuario ya fue registrado antes");
}
}
function eliminardatos() {
    consulta = document.getElementById('consulta').value;
     for (k = 0; k < matrizusuarios.length; k++) {
         if ((matrizusuarios[k].nif)==consulta) {
             confirm("Desea eliminar este Usuario");
             matrizusuarios.splice(k,1);
             document.getElementById('consulta')="";
             document.getElementById('consulta').focus;
         }
    }
 }
 function modificardatos(){
    let consultamod = document.getElementById('consultamod').value;
     for (k = 0; k < matrizusuarios.length; k++) {
         if ((matrizusuarios[k].nif)==consultamod) {
             confirm("Desea modificar este Usuario");
           let respuesta = prompt("Que desea modificar?(mail/telefono/departamento)");
           respuesta.trim();
           respuesta.toLocaleLowerCase();

            if (respuesta="mail") {
                let nuevomail =prompt("Introduice el nuevo mail del usuario"+[k]);
                if (paternmail.test(nuevomail)) {
                    matrizusuarios[k].mail=nuevomail;                    
                }else{
                    alert("el mail introducido es incorrecto")
                }
            }else if (respuesta="telefono") {
                let nuevotelefono =prompt("Introduice el nuevo telefono del usuario"+[k]);
                if (paterntelefono.test(nuevotelefono)) {
                    matrizusuarios[k].telefono=nuevotelefono;
                }else{
                    alert("El telefono introducido es incorrecto");
                }
            }else if (respuesta="departamento") {
                let nuevodepartamento =prompt("Introduice el nuevo departamento del usuario"+[k]);
                if (isNaN(respuesta)) {
                    alert("El departamento esta enumerado, introduzca el numero del departamento")
                }
                matrizusuarios[k].departamento=nuevodepartamento;
            }else{
                alert("Eso no lo podemos modificar");
            }
        }
    }
}
function mostrarpredefinido() {
    document.getElementById('capa2').style.visibility = "hidden";
    document.getElementById('capa3').style.visibility = "hidden";
    document.getElementById('capa4').style.visibility = "hidden";
    document.getElementById('capa5').style.visibility = "hidden";      
}
function mostrarcapa2() {
    document.getElementById('capa2').style.visibility = "visible";
    document.getElementById('capa3').style.visibility = "hidden";
    document.getElementById('capa4').style.visibility = "hidden";
    document.getElementById('capa5').style.visibility = "hidden";      
}
function mostrarcapa3() {
    document.getElementById('capa2').style.visibility = "hidden";
    document.getElementById('capa3').style.visibility = "visible";
    document.getElementById('capa4').style.visibility = "hidden";
    document.getElementById('capa5').style.visibility = "hidden";      
}
function mostrarcapa4() {
    document.getElementById('capa2').style.visibility = "hidden";
    document.getElementById('capa3').style.visibility = "hidden";
    document.getElementById('capa4').style.visibility = "visible";
    document.getElementById('capa5').style.visibility = "hidden";
    ver(); 
}
function mostrarcapa5() {
    document.getElementById('capa2').style.visibility = "hidden";
    document.getElementById('capa3').style.visibility = "hidden";
    document.getElementById('capa4').style.visibility = "hidden";
    document.getElementById('capa5').style.visibility = "visible";      
}
function cerraraplicacion() {
    mostrarpredefinido();   
    window.close();
}
//*******************LLAMADAS**************/
mostrarpredefinido();