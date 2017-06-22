'use strict';

const Screen4 = (update) => {
  const container = $('<div class="container margin-container"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-msg" src="img/icons/lockone.png" alt=""></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Crea tu usuario Yape</span><p>Ingresa un nombre, email y clave de usuario</p></div>');
  const row3 = $('<div class="row input-msg"></div>');
  const inputField = $('<div class="input-field col s12"><img class="user-img" src="img/icons/user.png" alt=""></div>');
  const inputPass = $('<input value="" id="phone" type="text" class="validate text-center" placeholder="Nombre">');
  const divCenter = $('<div class="center"><span>Cuida esta clave como oro, es tu acceso a Yape.</span></div>'+"21"+'');
  const spanTime = $('<span></span>');

  container.append(row);
  container.append(row2);
  container.append(row3);
  container.append(divCenter);

  row.append(img);
  row2.append(span);
  row3.append(inputField);
  inputField.append(inputPass);

  return container;
}
