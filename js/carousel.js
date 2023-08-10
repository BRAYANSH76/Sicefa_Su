var text = '{"Sicefa": [' +
   '{"Nombre":"Medicamos tu vida","informacion":"Es una empresa dedicada a la venta de medicamentos genéricos y de patente. Actualmente es reconocida en el mercado farmacéutico estatal, motivo por el cual ha logrado un rápido crecimiento y actualmente cuenta con tres sucursales de venta repartidas en la ciudad de León"},' +
   '{"Nombre":"Vision","informacion":"Nos esforzamos por ser su destino confiable para todas sus necesidades relacionadas con la salud y el cuidado personal, y trabajamos incansablemente para superar sus expectativas en términos de calidad, servicio y variedad de productos"},' +
   '{"Nombre":"Mision","informacion":"Nuestra misión es ser un punto de referencia en servicios de salud y bienestar, ofreciendo productos y servicios de calidad, accesibles y centrados en el cliente. A través de la renovación de herramientas de comunicación, la mejora de la eficiencia y productividad, y la ampliación de nuestra cobertura a nivel nacional, buscamos impactar positivamente en la salud y el bienestar de la comunidad"},' +
   '{"Nombre":"Valores","informacion":"Respeto,Buen ambiente laboral,Calidad"}' +
   ']}';

var obj = JSON.parse(text);

document.getElementById("text1").innerHTML = obj.Sicefa[0].Nombre;
document.getElementById("text2").innerHTML = obj.Sicefa[0].informacion;
document.getElementById("text3").innerHTML = obj.Sicefa[1].Nombre;
document.getElementById("text4").innerHTML = obj.Sicefa[1].informacion;
document.getElementById("text5").innerHTML = obj.Sicefa[2].Nombre;
document.getElementById("text6").innerHTML = obj.Sicefa[2].informacion;
document.getElementById("text7").innerHTML = obj.Sicefa[3].Nombre;
document.getElementById("text8").innerHTML = obj.Sicefa[3].informacion;

