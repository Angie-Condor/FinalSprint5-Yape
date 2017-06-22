'use strict';

const Screen5 = (update) => {
  const container = $('<div class="container check-container"></div>');
  const row = $('<div class="row box-check-img"></div>');
  const img = $('<div class="col s4 push-s4"><img class="img-check" src="img/icons/check.png" alt=""></div>');
  const row2 = $('<div class="row"></div>');
  const span = $('<div class="content-span center"><span class="strong-span black-text">¡Bien!<br>Ahora puedes usar Yape</span></div>');

  container.append(row);
  container.append(row2);

  row.append(img);
  row2.append(span);

  // crearCuenta.on('click',(e)=>{
  //   e.preventDefault();
  //   state.screen1 = null;
  //   state.screen2 = null;
  //   state.screen3 = null;
  //   state.screen4 = null;
  //   state.screen5 = true;
  //   update();
  // })

  return container;
}
