let indexClientesSeleccionado; // es el índice del arreglo
let obj = []; // arreglo que se llenará de objetos JSON
let ultimoCodigo;

let jsonData = '{"clientes":[ ' +
   // clientes 1
   '{"codigo" : "15060011", "fechaIngreso" : "2015-06-15", "estatus" : "Activo", ' +
   // objeto persona
   ' "persona" : {"nombre" : "Roberto", "apellidoPaterno" : "Martínez", "apellidoMaterno" : "Pérez",   "genero": "Masculino", ' +
   ' "fechaNacimiento" : "1970-02-14", "rfc" : "MAPO700214CCA","curp" : "MAPO700214CCA", "foto" : "cara1.jpg", "domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   // objeto usuario
   ' "usuario" : {"Email" : "robert@gmail.com" },' +
   // objeto sucursal
   ' "sucursal" : {"nombre" : "Centro" }' +
   '},' +
   // clientes 2 
   '{"codigo" : "19010012", "fechaIngreso" : "2019-01-14", "estatus" : "Activo", ' +
   ' "persona": {"nombre" : "Lucia",   "apellidoPaterno" : "Juárez",   "apellidoMaterno" : "Briones", "genero": "Femenino", ' +
   ' "fechaNacimiento" : "1980-12-05", "rfc" : "JUBL801205PPT","curp" : "MARI83DH382H", "foto" : "cara2.jpg","domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   ' "usuario" : { "Email" : "luci@gmail.com"},' +
   ' "sucursal" : {"nombre" : "Centro" }' +
   '},' +
   // Clientes 3
   '{"codigo" : "21080013", "fechaIngreso" : "2021-08-24", "estatus" : "Activo",' +
   ' "persona" : {"nombre" : "Rosaura", "apellidoPaterno" : "López",    "apellidoMaterno" : "Bonilla", "genero": "Femenino", ' +
   ' "fechaNacimiento" : "1990-05-21", "rfc" : "LOBR900521GTU","curp" : "MARI83DH382H", "foto" : "cara3.jpg","domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   ' "usuario" : {"Email" : "rosaura@gmail.com"}, ' +
   ' "sucursal" : {"nombre" : "Mx" }' +
   '} ] }';



   function init() {
      obj = JSON.parse(jsonData);
      console.log(obj);
      actualizaTabla();
  }
  
function actualizaTabla() {
   let cuerpo = "";
   obj.clientes.forEach(function (elemento,) {
      let registro =
      '<tr onclick="selectEmpleado(' + obj.clientes.indexOf(elemento) + ');">' +
      '<td>' + obj.clientes.indexOf(elemento) + '</td>' +
      '<td>' + elemento.codigo + '</td>' +
      '<td>' + elemento.persona.nombre + " " + elemento.persona.apellidoPaterno +  " " + elemento.persona.apellidoMaterno +'</td>' +
      '<td>' + elemento.persona.genero + '</td>' +
      '<td>' + elemento.persona.fechaNacimiento + '</td>' +
      '<td>' + elemento.persona.rfc + '</td>' + 
      '<td>' + elemento.persona.curp + '</td>' +
      '<td> <img src="img/' + elemento.persona.foto + ' " width="100" > </td>' +
      '<td>' + elemento.persona.domicilio + '</td>' +
      '<td>' + elemento.persona.postal + '</td>' +
      '<td>' + elemento.persona.ciu + '</td>' +
      '<td>' + elemento.persona.esta + '</td>' +
      '<td>' + elemento.persona.tel + '</td>' +
      '<td>' + elemento.fechaIngreso + '</td>' +
      '<td>' + elemento.usuario.Email + '</td>' +
      '<td>' + elemento.estatus + '</td></tr>';
ultimoCodigo=elemento.codigo;
cuerpo += registro;      
   });

   document.getElementById("tblClientes").innerHTML = cuerpo;
}

// selección del producto de acuerdo al índice del arreglo
function selectEmpleado(index) {
   document.getElementById("txtCodigo").value = obj.clientes[index].codigo;
   document.getElementById("txtNombreSucursal").value = obj.clientes[index].sucursal.nombre;
   document.getElementById("txtNombre").value = obj.clientes[index].persona.nombre;
   document.getElementById("txtApellidoP").value = obj.clientes[index].persona.apellidoPaterno;
   document.getElementById("txtApellidoM").value = obj.clientes[index].persona.apellidoMaterno;
   document.getElementById("txtGenero").value = obj.clientes[index].persona.genero;
   document.getElementById("txtFechaNacimiento").value = obj.clientes[index].persona.fechaNacimiento;
   document.getElementById("txtRFC").value = obj.clientes[index].persona.rfc;
   document.getElementById("txtCurp").value = obj.clientes[index].persona.curp;
   document.getElementById("txtDomicilio").value = obj.clientes[index].persona.domicilio;
   document.getElementById("txtPostal").value = obj.clientes[index].persona.postal;
   document.getElementById("txtCiudad").value = obj.clientes[index].persona.ciu;
   document.getElementById("txtEstado").value = obj.clientes[index].persona.esta;
   document.getElementById("txtTelefono").value = obj.clientes[index].persona.tel;
   document.getElementById("txtFechaIngreso").value = obj.clientes[index].fechaIngreso;
   document.getElementById("txtEmail").value = obj.clientes[index].usuario.Email;
   let ruta='img/';
   document.getElementById("txtfoto").src = ruta + obj.clientes[index].persona.foto;
    document.getElementById("txtFotoRuta").value =  "";

   document.getElementById("btnModificar").classList.remove("disabled");
   document.getElementById("btnEliminar").classList.remove("disabled");
   document.getElementById("btnAgregar").classList.add("disabled");
   indexClientesSeleccionado = index;

}


//Método limpiar
function limpiar() {
   document.getElementById("txtCodigo").value = "";
   document.getElementById("txtNombreSucursal").value = "";
   document.getElementById("txtNombre").value = "";
   document.getElementById("txtApellidoP").value = "";
   document.getElementById("txtApellidoM").value = "";
   document.getElementById("txtGenero").value = "";
   document.getElementById("txtFechaNacimiento").value = "";
   document.getElementById("txtRFC").value = "";
   document.getElementById("txtCurp").value = "";
   document.getElementById("txtfoto").value = "";
   document.getElementById("txtDomicilio").value = "";
   document.getElementById("txtPostal").value = "";
   document.getElementById("txtCiudad").value = "";
   document.getElementById("txtEstado").value = "";
   document.getElementById("txtTelefono").value = "";
   document.getElementById("txtFechaIngreso").value = "";
   document.getElementById("txtEmail").value = "";

   document.getElementById("txtfoto").src= "img/nada.jpg";
    document.getElementById("txtFotoRuta").value= "";

   document.getElementById("btnModificar").classList.add("disabled");
   document.getElementById("btnEliminar").classList.add("disabled");
   document.getElementById("btnAgregar").classList.remove("disabled");
   indexClientesSeleccionado = 0;
}

function obtenerNombreFoto(){
   let nombreFoto;
   nombreFoto= document.getElementById("txtFotoRuta").value;
   nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\")+1);   
   return nombreFoto;
}

//Método para agregar un nuevo producto

function agregarCliente() {
   let nombre, codigo, apellidoP, apellidoM, genero, fechaN,
      rfc, curp, fotoNueva, domicilio, postal, ciu, esta, tel, fechaI, Email, sucursal;

   codigo = document.getElementById("txtCodigo").value;
   sucursal = document.getElementById("txtNombreSucursal").value;
   nombre = document.getElementById("txtNombre").value;
   apellidoP = document.getElementById("txtApellidoP").value;
   apellidoM = document.getElementById("txtApellidoM").value;
   genero = document.getElementById("txtGenero").value;
   fechaN = document.getElementById("txtFechaNacimiento").value;
   rfc = document.getElementById("txtRFC").value;
   curp = document.getElementById("txtCurp").value;
   fotoNueva = obtenerNombreFoto();
   domicilio = document.getElementById("txtDomicilio").value;
   postal = document.getElementById("txtPostal").value;
   ciu = document.getElementById("txtCiudad").value;
   esta = document.getElementById("txtEstado").value;
   tel = document.getElementById("txtTelefono").value;
   fechaI = document.getElementById("txtFechaIngreso").value;
   Email = document.getElementById("txtEmail").value;
   

   let newCliente = {}; // creamos objeto principal

   newCliente.codigo = codigo;
   newCliente.fechaIngreso = fechaI;
   
   newCliente.estatus = "Activo";

   newCliente.persona = {};
   newCliente.persona.nombre = nombre;
   newCliente.persona.apellidoPaterno = apellidoP;
   newCliente.persona.apellidoMaterno = apellidoM;
   newCliente.persona.genero = genero;
   newCliente.persona.fechaNacimiento = fechaN;
   newCliente.persona.rfc = rfc;
   newCliente.persona.curp = curp;
   newCliente.persona.foto = fotoNueva;
   newCliente.persona.domicilio = domicilio;
   newCliente.persona.postal = postal;
   newCliente.persona.ciu = ciu;
   newCliente.persona.esta = esta;
   newCliente.persona.tel = tel;

   newCliente.usuario = {}; // creamos objeto anidado usuaeio
   newCliente.usuario.Email = Email;   

   newCliente.sucursal = {}; // creamos objeto anidado sucursal
   newCliente.sucursal.nombre = sucursal; //El nombre de la sucursal en la que accediste al sistema

   obj.clientes.push(newCliente);

   let jsonData = JSON.stringify(obj.clientes);

   limpiar();
   actualizaTabla();
}


//Eliminar un producto
function eliminarCliente() {

   var opcion = confirm("¿Quieres eliminar el empleado seleccionado?");
   if (opcion) {
      obj.clientes[indexClientesSeleccionado].estatus = "Inactivo";
      limpiar();
      actualizaTabla();
      alert('Eliminado con exito!');
   }

}


// Pregunta si quiere moddificar
function modificaCliente() {
   var opcion = confirm("¿Quieres modificar el empleado seleccionado?");
   if (opcion) {
      modificarRegistro();
      actualizaTabla();
      limpiar();
      alert('Registro modificado con exito!');
   }
}



function modificarRegistro() {
   let nombre, codigo, apellidoP, apellidoM, genero, fechaN,
   rfc, curp, fotoNueva, domicilio, postal, ciu, esta, tel, fechaI, Email,sucursal;

codigo = document.getElementById("txtCodigo").value;
sucursal = document.getElementById("txtNombreSucursal").value;
nombre = document.getElementById("txtNombre").value;
apellidoP = document.getElementById("txtApellidoP").value;
apellidoM = document.getElementById("txtApellidoM").value;
genero = document.getElementById("txtGenero").value;
fechaN = document.getElementById("txtFechaNacimiento").value;
rfc = document.getElementById("txtRFC").value;
curp = document.getElementById("txtCurp").value;
fotoNueva  = obtenerNombreFoto();
domicilio = document.getElementById("txtDomicilio").value;
postal = document.getElementById("txtPostal").value;
ciu = document.getElementById("txtCiudad").value;
esta = document.getElementById("txtEstado").value;
tel = document.getElementById("txtTelefono").value;
fechaI = document.getElementById("txtFechaIngreso").value;
Email = document.getElementById("txtEmail").value;


let newCliente = {}; // creamos objeto principal

newCliente.codigo = codigo;
newCliente.fechaIngreso = fechaI;
newCliente.estatus = "Activo";

newCliente.persona = {};
newCliente.persona.nombre = nombre;
newCliente.persona.apellidoPaterno = apellidoP;
newCliente.persona.apellidoMaterno = apellidoM;
newCliente.persona.genero = genero;
newCliente.persona.fechaNacimiento = fechaN;
newCliente.persona.rfc = rfc;
newCliente.persona.curp = curp;
newCliente.persona.foto = fotoNueva;
newCliente.persona.domicilio = domicilio;
newCliente.persona.postal = postal;
newCliente.persona.ciu = ciu;
newCliente.persona.esta = esta;
newCliente.persona.tel = tel;

newCliente.usuario = {}; // creamos objeto anidado usuaeio
newCliente.usuario.Email = Email;   

newCliente.sucursal = {}; // creamos objeto anidado sucursal
newCliente.sucursal.nombre = sucursal; //El nombre de la sucursal en la que accediste al sistema

   obj.clientes[indexClientesSeleccionado] = newCliente;

}

function despliegaFoto(fotoRuta){
   let nombreFoto = obtenerNombreFoto();
   let ruta='img/';
   document.getElementById("txtfoto").src = ruta + nombreFoto;
}

function generaCodigo(fecha) {
   let codigo = 0;

   console.log("fecha", fecha);

   let anio = fecha.substring(2, 4);
   console.log("año", anio);

   let mes = fecha.substring(5, 7);
   console.log("mes", mes);

   ultimoCodigo = Number(ultimoCodigo.substring(4, 8)) + 1;
   console.log("ultimoCodigo", ultimoCodigo);

   if (ultimoCodigo < 10)
      codigo = anio + mes + "000" + ultimoCodigo;
   else if (ultimoCodigo < 100)
      codigo = anio + mes + "00" + ultimoCodigo;
   else if (ultimoCodigo < 1000)
      codigo = anio + mes + "0" + ultimoCodigo;
   else
      codigo = anio + mes + ultimoCodigo;

   console.log("codigo", codigo);

   document.getElementById("txtCodigo").value = codigo;

}


init();