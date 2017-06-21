'use strict';

const Screen3 = () => {
  const container = $('<div class="container margin-container"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-msg" src="img/icons/message.png" alt="message"></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Para comenzar validamos tu número</span><p>Recibirás un SMS con un código de validación</p></div>');
  const row3 = $('<div class="row input-msg"></div>');
  const inputField = $('<div class="input-field col s12"><img class="phone-number" src="img/icons/phoneandnumber.png" alt="Phone and number"></div>');
  const inputPass = $('<input value="" id="phone" type="text" class="validate text-center" placeholder="- - - - - -">');
  const divCenter = $('<div class="center"><span>Reintentar en <img class="img-clock" src="img/icons/clock.png" alt="">21 seg</span></div>');

  container.append(row);
  container.append(row2);
  container.append(row3);
  container.append(divCenter);

  row.append(img);
  row2.append(span);
  row3.append(inputField);
  inputField.append(inputPass);

  // continuar.on('click',(e)=>{
  //   e.preventDefault();
  //   state.screen2 = null;
  //   state.screen3 = true;
  //   update();
  // })

  return container;
}
