'use strict';

const Screen4 = (update) => {
  const container = $('<div class="container margin-container"></div>');
  const row = $('<div class="row"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-msg" src="img/icons/lockone.png" alt=""></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Crea tu usuario Yape</span><p>Ingresa un nombre, email y clave de usuario</p></div>');
  const row3 = $('<div class="row input-name no-mrg-btm"></div>');
  const inputField = $('<div class="input-field col s12"><img class="user-img" src="img/icons/user.png" alt=""></div>');
  const inputName = $('<input value="" id="name" type="text" pattern="[aA-zZñÑá-ú]" class="validate text-center" placeholder="Nombre" required>');
  const row4 = $('<div class="row input-mail no-mrg-btm"></div>');
  const inputField2 = $('<div class="input-field col s12"><img class="msg-img" src="img/icons/message-gray.png" alt=""></div>');
  const inputMail = $('<input value="" id="mail" type="text" class="validate text-center" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" placeholder="correo@ejemplo.com" required>');
  const row5 = $('<div class="row input-pass no-mrg-btm"></div>');
  const inputField3 = $('<div class="input-field col s12"><img class="lock-img" src="img/icons/lock.png" alt=""></div>');
  const inputPass = $('<input value="" id="pass" type="password" pattern="[0-9]{6}" class="validate text-center" placeholder="Ingresa clave de 6 dígitos" required>');
  const divCenter = $('<div class="center"><span class="span-clave">Cuida esta clave como oro, es tu acceso a Yape.</span></div>'+"21"+'');
  const crearCuenta = $('<a><div class="btn waves-effect waves-light btn-crear-cuenta">CREAR CUENTA</div></a>');

  container.append(row);
  container.append(row2);
  container.append(row3);
  container.append(row4);
  container.append(row5);

  container.append(divCenter);
  container.append(crearCuenta);

  row.append(img);
  row2.append(span);
  row3.append(inputField);
  inputField.append(inputName);
  row4.append(inputField2);
  inputField2.append(inputMail);
  row5.append(inputField3);
  inputField3.append(inputPass);

  crearCuenta.on('click',(e)=>{
    e.preventDefault();
    state.screen1 = null;
    state.screen2 = null;
    state.screen3 = null;
    state.screen4 = null;
    state.screen5 = true;
    update();
  })

  return container;
}
