
   
let indexEmpleadoSeleccionado; // es el índice del arreglo
let obj = []; // arreglo que se llenará de objetos JSON
let ultimoCodigo;

let jsonData = '{"empleados":[ ' +
   // EMPLEADO 1 (Gerente)
   '{"codigo" : "15060011", "fechaIngreso" : "2015-06-15", "puesto" : "Gerente", "salarioBruto" : "90,000", "estatus" : "Activo", ' +
   // objeto persona
   ' "persona" : {"nombre" : "Roberto", "apellidoPaterno" : "Martínez", "apellidoMaterno" : "Pérez",   "genero": "Masculino", ' +
   ' "fechaNacimiento" : "1970-02-14", "rfc" : "MAPO700214CCA","curp" : "MAPO700214CCA", "foto" : "cara1.jpg", "domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   // objeto usuario
   ' "usuario" : {"nombreUsuario" : "rmartinez", "Email" : "robert@gmail.com",  "contrasena" : "RMartinez35", "rol" : "ADMS" },' +
   // objeto sucursal
   ' "sucursal" : {"nombre" : "Centro" }' +
   '},' +
   // EMPLEADO 2 (Atención a clientes)
   '{"codigo" : "19010012", "fechaIngreso" : "2019-01-14", "puesto" : "Atención a clientes", "salarioBruto" : "40,000", "estatus" : "Activo", ' +
   ' "persona": {"nombre" : "Lucia",   "apellidoPaterno" : "Juárez",   "apellidoMaterno" : "Briones", "genero": "Femenino", ' +
   ' "fechaNacimiento" : "1980-12-05", "rfc" : "JUBL801205PPT","curp" : "MARI83DH382H", "foto" : "cara2.jpg","domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   ' "usuario" : {"nombreUsuario" : "ljuárez",  "Email" : "luci@gmail.com",   "contrasena" : "lucy28_jz",   "rol" : "EMPS"},' +
   ' "sucursal" : {"nombre" : "Centro" }' +
   '},' +
   // EMPLEADO 3 (Atención a clientes)
   '{"codigo" : "21080013", "fechaIngreso" : "2021-08-24", "puesto" : "Atención a clientes", "salarioBruto" : "20,000", "estatus" : "Activo",' +
   ' "persona" : {"nombre" : "Rosaura", "apellidoPaterno" : "López",    "apellidoMaterno" : "Bonilla", "genero": "Femenino", ' +
   ' "fechaNacimiento" : "1990-05-21", "rfc" : "LOBR900521GTU","curp" : "MARI83DH382H", "foto" : "cara3.jpg","domicilio" : "Jovita", "postal" : "37876", "ciu" : "Leon", "esta" : "Guanajuato", "tel" : "477638293"  }, ' +
   ' "usuario" : {"nombreUsuario" : "rlópez", "Email" : "rosaura@gmail.com",  "contrasena" : "rosaura&123",   "rol" : "EMPS" }, ' +
   ' "sucursal" : {"nombre" : "mx" }' +
   '} ] }';



   function init() {
      obj = JSON.parse(jsonData);
      console.log(obj);
      actualizaTabla();
  }
  
function actualizaTabla() {
   let cuerpo = "";
   obj.empleados.forEach(function (elemento,) {
      let registro =
      '<tr onclick="selectEmpleado(' + obj.empleados.indexOf(elemento) + ');">' +
      '<td>' + obj.empleados.indexOf(elemento) + '</td>' +
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
      '<td>' + elemento.puesto + '</td>' +
      '<td>' + elemento.salarioBruto + '</td>' +
      '<td>' + elemento.usuario.Email + '</td>' +
      '<td>' + elemento.usuario.rol + '</td>' +
      '<td>' + elemento.estatus + '</td></tr>';
ultimoCodigo=elemento.codigo;
cuerpo += registro;      
   });

   document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

// selección del producto de acuerdo al índice del arreglo
function selectEmpleado(index) {
   document.getElementById("txtCodigo").value = obj.empleados[index].codigo;
   document.getElementById("txtNombreSucursal").value = obj.empleados[index].sucursal.nombre;
   document.getElementById("txtNombre").value = obj.empleados[index].persona.nombre;
   document.getElementById("txtApellidoP").value = obj.empleados[index].persona.apellidoPaterno;
   document.getElementById("txtApellidoM").value = obj.empleados[index].persona.apellidoMaterno;
   document.getElementById("txtGenero").value = obj.empleados[index].persona.genero;
   document.getElementById("txtFechaNacimiento").value = obj.empleados[index].persona.fechaNacimiento;
   document.getElementById("txtRFC").value = obj.empleados[index].persona.rfc;
   document.getElementById("txtCurp").value = obj.empleados[index].persona.curp;
   document.getElementById("txtDomicilio").value = obj.empleados[index].persona.domicilio;
   document.getElementById("txtPostal").value = obj.empleados[index].persona.postal;

   let ruta='img/';
   document.getElementById("txtfoto").src = ruta + obj.empleados[index].persona.foto;
    document.getElementById("txtFotoRuta").value =  "";

   document.getElementById("txtCiudad").value = obj.empleados[index].persona.ciu;
   document.getElementById("txtEstado").value = obj.empleados[index].persona.esta;
   document.getElementById("txtTelefono").value = obj.empleados[index].persona.tel;
   document.getElementById("txtFechaIngreso").value = obj.empleados[index].fechaIngreso;
   document.getElementById("txtPuesto").value = obj.empleados[index].puesto;
   document.getElementById("txtSalarioBruto").value = obj.empleados[index].salarioBruto;
   document.getElementById("txtEmail").value = obj.empleados[index].usuario.Email;

   document.getElementById("txtNomUsuario").value = obj.empleados[index].usuario.nombreUsuario;
   document.getElementById("txtContrasena").value = obj.empleados[index].usuario.contraseña;
   document.getElementById("txtRol").value = obj.empleados[index].usuario.rol;

   document.getElementById("btnModificar").classList.remove("disabled");
   document.getElementById("btnEliminar").classList.remove("disabled");
   document.getElementById("btnAgregar").classList.add("disabled");
   indexEmpleadoSeleccionado = index;

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

   document.getElementById("txtfoto").src= "img/nada.jpg";
   document.getElementById("txtFotoRuta").value= "";

   document.getElementById("txtCiudad").value = "";
   document.getElementById("txtEstado").value = "";
   document.getElementById("txtTelefono").value = "";
   document.getElementById("txtFechaIngreso").value = "";
   document.getElementById("txtPuesto").value = "";
   document.getElementById("txtSalarioBruto").value = "";
   document.getElementById("txtEmail").value = "";

   document.getElementById("txtNomUsuario").value = "";
   document.getElementById("txtContrasena").value = "";
   document.getElementById("txtRol").value = "";

   document.getElementById("btnModificar").classList.add("disabled");
   document.getElementById("btnEliminar").classList.add("disabled");
   document.getElementById("btnAgregar").classList.remove("disabled");
   indexEmpleadoSeleccionado = 0;
}

function obtenerNombreFoto(){
   let nombreFoto;
   nombreFoto= document.getElementById("txtFotoRuta").value;
   nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\")+1);   
   return nombreFoto;
}

function despliegaFoto(fotoRuta){
   let nombreFoto = obtenerNombreFoto();
   let ruta='img/';
   document.getElementById("txtfoto").src = ruta + nombreFoto;
}
//Método para agregar un nuevo producto

function agregarEmpleado() {
   let nombre, codigo, apellidoP, apellidoM, genero, fechaN,
      rfc, curp, fotoNueva, domicilio, postal, ciu, esta, tel, fechaI, puesto, sabru, Email, nomUsuario, contrasena, rol, sucursal;

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
   puesto = document.getElementById("txtPuesto").value;
   sabru = document.getElementById("txtSalarioBruto").value;
   Email = document.getElementById("txtEmail").value;
   nomUsuario = document.getElementById("txtNomUsuario").value;
   contrasena = document.getElementById("txtContrasena").value;
   rol = document.getElementById("txtRol").value;

   let newEmpleado = {}; // creamos objeto principal

   newEmpleado.codigo = codigo;
   newEmpleado.fechaIngreso = fechaI;
   newEmpleado.puesto = puesto;
   newEmpleado.salarioBruto = sabru;
   newEmpleado.estatus = "Activo";

   newEmpleado.persona = {};
   newEmpleado.persona.nombre = nombre;
   newEmpleado.persona.apellidoPaterno = apellidoP;
   newEmpleado.persona.apellidoMaterno = apellidoM;
   newEmpleado.persona.genero = genero;
   newEmpleado.persona.fechaNacimiento = fechaN;
   newEmpleado.persona.rfc = rfc;
   newEmpleado.persona.curp = curp;
   newEmpleado.persona.foto = fotoNueva;
   newEmpleado.persona.domicilio = domicilio;
   newEmpleado.persona.postal = postal;
   newEmpleado.persona.ciu = ciu;
   newEmpleado.persona.esta = esta;
   newEmpleado.persona.tel = tel;

   newEmpleado.usuario = {}; // creamos objeto anidado usuaeio
   newEmpleado.usuario.Email = Email;   
   newEmpleado.usuario.nombreUsuario = nomUsuario;
   newEmpleado.usuario.contraseña = contrasena;
   newEmpleado.usuario.rol = rol;

   newEmpleado.sucursal = {}; // creamos objeto anidado sucursal
   newEmpleado.sucursal.nombre = sucursal; //El nombre de la sucursal en la que accediste al sistema

   obj.empleados.push(newEmpleado);

   let jsonData = JSON.stringify(obj.empleados);

   limpiar();
   actualizaTabla();
}


//Eliminar un producto
function eliminarEmpleado() {

   const opcion = confirm("¿Quieres eliminar el empleado seleccionado?");
   if (opcion) {
      obj.empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
      limpiar();
      actualizaTabla();
      alert('Eliminado con exito!');
   }

}


// Pregunta si quiere moddificar
function modificaEmpleado() {
   const opcion = confirm("¿Quieres modificar el empleado seleccionado?");
   if (opcion) {
      modificarRegistro();
      actualizaTabla();
      limpiar();
      alert('Registro modificado con exito!');
   }
}



function modificarRegistro() {
   let nombre, codigo, apellidoP, apellidoM, genero, fechaN,
   rfc, curp, fotoNueva, domicilio, postal, ciu, esta, tel, fechaI, puesto, sabru, Email, nomUsuario, contrasena, rol, sucursal;

codigo = document.getElementById("txtCodigo").value;
sucursal = document.getElementById("txtNombreSucursal").value;
nombre = document.getElementById("txtNombre").value;
apellidoP = document.getElementById("txtApellidoP").value;
apellidoM = document.getElementById("txtApellidoM").value;
genero = document.getElementById("txtGenero").value;
fechaN = document.getElementById("txtFechaNacimiento").value;
rfc = document.getElementById("txtRFC").value;
curp = document.getElementById("txtCurp").value;
fotoNueva = document.getElementById("txtfoto").value;
domicilio = document.getElementById("txtDomicilio").value;
postal = document.getElementById("txtPostal").value;
ciu = document.getElementById("txtCiudad").value;
esta = document.getElementById("txtEstado").value;
tel = document.getElementById("txtTelefono").value;
fechaI = document.getElementById("txtFechaIngreso").value;
puesto = document.getElementById("txtPuesto").value;
sabru = document.getElementById("txtSalarioBruto").value;
Email = document.getElementById("txtEmail").value;
nomUsuario = document.getElementById("txtNomUsuario").value;
contrasena = document.getElementById("txtContrasena").value;
rol = document.getElementById("txtRol").value;

let newEmpleado = {}; // creamos objeto principal

newEmpleado.codigo = codigo;
newEmpleado.fechaIngreso = fechaI;
newEmpleado.puesto = puesto;
newEmpleado.salarioBruto = sabru;
newEmpleado.estatus = "Activo";

newEmpleado.persona = {};
newEmpleado.persona.nombre = nombre;
newEmpleado.persona.apellidoPaterno = apellidoP;
newEmpleado.persona.apellidoMaterno = apellidoM;
newEmpleado.persona.genero = genero;
newEmpleado.persona.fechaNacimiento = fechaN;
newEmpleado.persona.rfc = rfc;
newEmpleado.persona.curp = curp;
newEmpleado.persona.foto = fotoNueva;
newEmpleado.persona.domicilio = domicilio;
newEmpleado.persona.postal = postal;
newEmpleado.persona.ciu = ciu;
newEmpleado.persona.esta = esta;
newEmpleado.persona.tel = tel;

newEmpleado.usuario = {}; // creamos objeto anidado usuaeio
newEmpleado.usuario.Email = Email;   
newEmpleado.usuario.nombreUsuario = nomUsuario;
newEmpleado.usuario.contraseña = contrasena;
newEmpleado.usuario.rol = rol;

newEmpleado.sucursal = {}; // creamos objeto anidado sucursal
newEmpleado.sucursal.nombre = sucursal; //El nombre de la sucursal en la que accediste al sistema

   obj.empleados[indexEmpleadoSeleccionado] = newEmpleado;

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