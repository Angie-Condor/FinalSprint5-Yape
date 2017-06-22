'use strict';

const Screen2 = (update) => {
  const container = $('<div class="container margin-container"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-phone" src="img/icons/phone.png" alt="phone"></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Para comenzar validamos tu número</span><p>Recibirás un SMS con un código de validación</p></div>');
  const row3 = $('<div class="row input-phone"></div>');
  const inputField = $('<div class="input-field col s12"><img class="phone-number" src="img/icons/phoneandnumber.png" alt="Phone and number"></div>');
  const inputPhone = $('<input value="" id="phone" type="number" min="100000000" max="999999999" class="validate text-center" required>');
  const errorSpan = $('<span>Usuario Inválido</span>');
  const inputCheck = $('<div class="input-check"><input type="checkbox" class="filled-in input-checkbox" id="filled-in-box"><label for="filled-in-box">Acepto los <span>Términos y Condiciones</span></label></div>');
  const continuar = $('<a><div class="btn waves-effect waves-light btn-continue" disabled>CONTINUAR</div></a>');

  container.append(row);
  container.append(row2);
  container.append(row3);
  container.append(continuar);

  row.append(img);
  row2.append(span);
  row3.append(inputField);
  row3.append(inputCheck);

  inputField.append(inputPhone);

  inputPhone.on('blur',(e) => {
    errorSpan.text('Celular Inválido');
    if($(e.target).val().length == 9){
      state.validate = true;
      errorSpan.hide();
    }
    else{
      state.validate = false;
      errorSpan.show();
    }
  });

  $('.input-checkbox').on('change',(e)=>{
    if($(e.target).is(':checked')) {
      continuar.attr('disabled',false);
    }else{
      continuar.attr('disabled',true);
    }
  });

  continuar.on('click',(e)=>{
    e.preventDefault();
    state.screen1 = null;
    state.screen2 = null;
    state.screen3 = true;
    update();
  })

  return container;
}
