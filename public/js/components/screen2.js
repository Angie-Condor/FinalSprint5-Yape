'use strict';

const Screen2 = (update) => {
  const container = $('<div class="container margin-container"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-phone" src="img/icons/phone.png" alt="phone"></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Para comenzar validamos tu número</span><p>Recibirás un SMS con un código de validación</p></div>');
  const row3 = $('<div class="row input-phone"></div>');
  const inputField = $('<div class="input-field col s12"><input value="" id="phone" type="text" class="validate text-center"><img class="phone-number" src="img/icons/phoneandnumber.png" alt="Phone and number"></div>');
  const inputCheck = $('<div class="input-check"><input type="checkbox" class="filled-in" id="filled-in-box"><label for="filled-in-box">Acepto los <span>Términos y Condiciones</span></label></div>');
  const continuar = $('<a><div class="btn waves-effect waves-light btn-continue">CONTINUAR</div></a>');

  container.append(row);
  container.append(row2);
  container.append(row3);
  container.append(continuar);

  row.append(img);
  row2.append(span);
  row3.append(inputField);
  row3.append(inputCheck);

  // $('#phone').on('keydown', function(e) {
  //
  // });

  // continuar.addEventListener("click", function(evento){
  //   evento.preventDefault();
  //   var validarNumeros =  function(n){
  //     var codigoTecla = n.keyCode;
  //     console.log(codigoTecla);
  //     var longitud = this.value.length;
  //
  //     if(codigoTecla >= 48 && codigoTecla <= 57 && longitud < 10){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //
  //   document.getElementById('phone').onkeypress = validarNumeros;
  // })

  continuar.on('click',(e)=>{
    e.preventDefault();
    state.screen1 = null;
    state.screen2 = null;
    state.screen3 = true;
    update();
  })

  return container;
}
