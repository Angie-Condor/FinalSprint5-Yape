'use strict';

const Screen2 = () => {
  const container = $('<div class="container content-phone"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-phone" src="img/icons/phone.png" alt="phone"></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Para comenzar validamos tu número</span><p>Recibirás un SMS con un código de validación</p></div>');
  const row3 = $('<div class="row input-phone"></div>');
  const inputField = $('<div class="input-field col s12"><input value="" id="phone" type="text" class="validate"><img class="phone-number" src="img/icons/phoneandnumber.png" alt="Phone and number"></div>');
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

  return container;
}
